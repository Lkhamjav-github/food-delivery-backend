import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import { string } from "yup";
const { Schema } = mongoose

export const userModel = mongoose.model(
    "User",
    new Schema({
        name: String, email: String, phoneNumber: Number, role: {
            type: String,
            enum: ["admin", "customer"]
        }
    })
);
