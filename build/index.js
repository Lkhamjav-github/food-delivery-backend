"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connectToDb_1 = require("./connectToDb");
const userRouter_1 = require("./router/userRouter");
const PORT = 8080;
const app = (0, express_1.default)();
(0, connectToDb_1.connectToDb)();
app.use(userRouter_1.userRouter);
app.get('/', (req, res) => {
    res.send('hello');
});
app.listen(PORT, () => {
    console.log('runnin : http://localhost:' + PORT);
});
