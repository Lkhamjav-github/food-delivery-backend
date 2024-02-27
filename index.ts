import express from "express";
import { connectToDb } from "./connectToDb";
import { userRouter } from "./router/userRouter";

const PORT = 8080;
const app = express()

connectToDb();
app.use(userRouter);

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('hello')
})

app.listen(PORT, () => {
    console.log('runnin : http://localhost:' + PORT)
})