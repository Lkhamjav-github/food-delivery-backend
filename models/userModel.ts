import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import { string } from "yup";
const { Schema } = mongoose

export const userModel = mongoose.model(
    "User",
    new Schema({ _id: ObjectId, name: String, email: String, phoneNumber: Number })
);
