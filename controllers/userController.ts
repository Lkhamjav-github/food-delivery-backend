import { userModel } from "../models/userModel"
import express from "express"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

export const getUsers = async (req: express.Request, res: express.Response) => {
    const findUser = await userModel.find({})

    res.send(findUser)
}
const salt = "10"
export const signUp = async (req: express.Request, res: express.Response) => {
    // console.log(req.body)
    const { name, email, password, address } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, salt)
        const createUser = await userModel.create({
            name: name,
            email,
            Password: hashedPassword,
            address,
        })
        res.status(201).json({ message: `${createUser.email} user create successfully` })
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ message: "User cretaion failed" })
    }

}

export const logIn = async (req: express.Request, res: express.Response) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).send("Email and password are required");
        }

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const passwordMatch = await bcrypt.compare(password, user.Password);
        if (!passwordMatch) {
            return res.status(400).json({ message: 'Wrong password' });
        }
        const refreshToken = jwt.sign({ userId: user._id, email: user.email }, 'JWT_SECRET_KEY', { expiresIn: '24h' });
        const accessToken = jwt.sign({ userId: user._id, email: user.email }, 'JWT_SECRET_KEY', { expiresIn: '1h' });

        res.status(200).json({ message: 'User sign in success' }).cookie("refreshToken", refreshToken).header({ accessToken: accessToken })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'User failed' });
    }
};