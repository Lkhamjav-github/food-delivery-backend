"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const connectToDb_1 = require("./connectToDb");
const userRouter_1 = require("./router/userRouter");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// import { verifyToken } from "verify";
// import { IReq } from "./utils/interface"
// import connectDB from 'db'
const dotenv_1 = __importDefault(require("dotenv"));
const PORT = 8080;
const app = (0, express_1.default)();
dotenv_1.default.config();
(0, connectToDb_1.connectToDb)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(userRouter_1.userRouter);
// app.use("/profile", verifyToken)
app.get('/', (req, res) => {
    res.send('hello');
});
app.listen(PORT, () => {
    console.log('runnin : http://localhost:' + PORT);
});
