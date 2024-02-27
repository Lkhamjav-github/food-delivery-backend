import express from "express";
import { connectToDb } from "./connectToDb";
import { carRouter } from "./router/Carrouter";

const PORT = 8080;
const app = express()

connectToDb();
app.use(carRouter);

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('hello')
})

app.listen(PORT, () => {
    console.log('runnin : htts://localhost' + PORT)
})