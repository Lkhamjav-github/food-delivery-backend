"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logIn = exports.signUp = exports.getUsers = void 0;
const userModel_1 = require("../models/userModel");
const bcrypt_1 = __importDefault(require("bcrypt"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const findUser = yield userModel_1.userModel.find({});
    res.send(findUser);
});
exports.getUsers = getUsers;
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(req.body)
    const { name, email, password, address } = req.body;
    try {
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const createUser = yield userModel_1.userModel.create({
            name: name,
            email,
            Password: hashedPassword,
            address,
        });
        res.status(201).json({ message: `${createUser.email} user create successfully` });
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ message: "User cretaion failed" });
    }
});
exports.signUp = signUp;
const logIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
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
});
exports.logIn = logIn;
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
