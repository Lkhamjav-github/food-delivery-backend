import { userModel } from "../models/userModel"
import express from "express"

export const getUsers = async (req: express.Request, res: express.Response) => {
    const findUser = await userModel.find({})
    res.send(findUser)
}

export const createUser = async (req: express.Request, res: express.Response) => {
    // req.send(userCreate)
    const userCreate = await userModel.create({ name: "${name}", email: "String@email.com", phoneNumber: 976984792347, role: "admin" })
    // res.send(userCreate)
}