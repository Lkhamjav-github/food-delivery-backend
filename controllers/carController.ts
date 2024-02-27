import { CarModel } from "../models/carModel"
import express from "express"

export const getCars = async (req: express.Request, res: express.Response) => {
    const findCar = await CarModel.find({})
    res.send(findCar)
}

export const createCar = async (req: express.Request, res: express.Response) => {

    const userCreate = await CarModel.create({ name: "lc200", color: "green", year: 2000 })
}