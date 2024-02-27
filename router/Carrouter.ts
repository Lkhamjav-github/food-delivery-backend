import { Router } from "express";
import { createCar, getCars } from "../controllers/carController";

const carRouter = Router()

carRouter.get('/cars', getCars).post('/cars', createCar)

export { carRouter }

