import { userModel } from "../models/userModel"
import express from "express"
import bcrypt from 'bcrypt'

export const getUsers = async (req: express.Request, res: express.Response) => {
    const findUser = await userModel.find({})
    res.send(findUser)
}
export const signUp = async (req: express.Request, res: express.Response) => {
    const { name, email, password, address, role } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const createUser = await userModel.create({
            name: name,
            email,
            password: hashedPassword,
            address,
            role,
        })
        res.status(201).json({ message: `${createUser.email} user create successfully` })
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ message: "User cretaion failed" })
    }

}

// export const updateUser = async (req: express.Request, res: express.Response) => {
//     // req.send(userCreate)
//     const update = await userModel.create({ name: "${name}", email: "String@email.com", phoneNumber: 976984792347, role: "admin" })
//     res.send(update)
// }        