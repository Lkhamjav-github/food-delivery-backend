"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
userRouter.get('/users', userController_1.getUsers).post('/signup', userController_1.signUp).post('/login', userController_1.logIn);
