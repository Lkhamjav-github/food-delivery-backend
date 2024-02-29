import express, { Application } from "express";
import cors from 'cors'
import { connectToDb } from "./connectToDb";
import { userRouter } from "./router/userRouter";
import coockieParser from "cookie-parser"
import { verifyToken } from "verify";
// import { IReq } from "./utils/interface"
// import connectDB from 'db'
import dotenv from "dotenv"
import { verify } from "crypto";


const PORT = 8080;
const app: Application = express()

dotenv.config();


connectToDb();

app.use(cors());
app.use(express.json());
app.use(coockieParser())
app.use("/auth", userRouter);

app.use("/profile", verifyToken)

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('hello')
})

app.listen(PORT, () => {
    console.log('runnin : http://localhost:' + PORT)
})