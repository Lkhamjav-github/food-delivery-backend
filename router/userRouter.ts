import { Router } from "express";
import { signUp, getUsers } from "../controllers/userController";

const userRouter = Router()

userRouter.get('/users', getUsers).post('/signup', signUp)

export { userRouter }

