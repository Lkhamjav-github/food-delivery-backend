import mongoose from "mongoose";
const { Schema } = mongoose

export const CarModel = mongoose.model(
    "Car",
    new Schema({ name: String, color: String, year: Number })
);
