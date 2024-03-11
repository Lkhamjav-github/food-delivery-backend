import express, { Application } from "express";
import cors from 'cors'
import { connectToDb } from "./connectToDb";
import { userRouter } from "./router/userRouter";
import coockieParser from "cookie-parser"
// import { verifyToken } from "verify";
// import { IReq } from "./utils/interface"
// import connectDB from 'db'
import dotenv from "dotenv"
import { verify } from "crypto";


// const app = express();
const app: Application = express()
app.get("/", (req, res) => res.send("Express on Vercel"));
const PORT = 8080;
app.listen(PORT, () => console.log("Server ready on port." + PORT));

module.exports = app;



dotenv.config();


connectToDb();

app.use(cors());
app.use(express.json());
app.use(coockieParser())
app.use(userRouter);

// app.use("/profile", verifyToken)

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('hello')
})

app.listen(PORT, () => {
    console.log('runnin : http://localhost:' + PORT)
})