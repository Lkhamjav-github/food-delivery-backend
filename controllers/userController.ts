import { userModel } from "../models/userModel"
import express from "express"
import bcrypt from 'bcrypt'

export const getUsers = async (req: express.Request, res: express.Response) => {
    const findUser = await userModel.find({})

    res.send(findUser)
}
export const signUp = async (req: express.Request, res: express.Response) => {
    // console.log(req.body)
    const { name, email, password, address } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
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
    console.log(req.body)
    const { email, password } = req.body;
    // try {
    //     if (!email || !password) {
    //         return res.status(400).send("Email and password are require")
    //     }
    //     const findUser = req.body.email
    //     if (findUser.length === 0) {
    //         return res.status(400).json({ message: 'User not found' })
    //     }
    //     const checkPassword = bcrypt.compare(password, findUser[0].password);
    //     if (!checkPassword) {
    //         return res.status(400).json({ message: 'wrong password' })
    //     }
    //     res.status(201).json({ message: 'User sign in success' })
    // }
    // catch (error) {
    //     console.log(error)
    //     res.status(500).json({ message: 'User failed' })
    // }

}

// export const updateUser = async (req: express.Request, res: express.Response) => {
//     // req.send(userCreate)
//     const update = await userModel.create({ name: "${name}", email: "String@email.com", phoneNumber: 976984792347, role: "admin" })
//     res.send(update)
// }        


// app.post("/login", async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         if (!email || !password) {
//             return res.status(400).send("Email and password are require")
//         }
//         const findUser = await sql`SELECT * FROM users WHERE email=${email}`
//         console.log("findUser", findUser);

//         if (findUser.length === 0) {
//             return res.status(400).json({ message: 'User not found' })
//         }
//         const checkPassword = bcrypt.compare(password, findUser[0].password);
//         if (!checkPassword) {
//             return res.status(400).json({ message: 'wrong password' })
//         }

//         const token = jwt.sign({ userId: findUser[0].id }, secretKey, { expiresIn: '10h' })

//         res.status(201).json({ message: 'User sign in success', token })
//     }
//     catch (error) {
//         console.log(error)
//         res.status(500).json({ message: 'User failed' })
//     }
// })