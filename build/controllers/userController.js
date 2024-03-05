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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const findUser = yield userModel_1.userModel.find({});
    res.send(findUser);
});
exports.getUsers = getUsers;
const salt = "10";
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(req.body)
    const { name, email, password, address } = req.body;
    try {
        const hashedPassword = yield bcrypt_1.default.hash(password, salt);
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
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).send("Email and password are required");
        }
        const user = yield userModel_1.userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }
        const passwordMatch = yield bcrypt_1.default.compare(password, user.Password);
        if (!passwordMatch) {
            return res.status(400).json({ message: 'Wrong password' });
        }
        const token = jsonwebtoken_1.default.sign({ userId: user._id, email: user.email }, 'your_secret_key', { expiresIn: '1h' });
        console.log("your generated token is :", token);
        res.status(200).json({ message: 'User sign in success', token: token });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'User failed' });
    }
});
exports.logIn = logIn;
