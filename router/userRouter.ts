import { Router } from "express";
import { signUp, getUsers, logIn } from "../controllers/userController";

const userRouter = Router()

userRouter.get('/users', getUsers).post('/signup', signUp).post('/login', logIn)

export { userRouter }

