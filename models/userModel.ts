import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import { string } from "yup";
const { Schema, model } = mongoose

export const userModel = mongoose.model(
    "User",
    new Schema({
        name: {
            type: String,
            required: [true, "Please enter your name"]
        }, email: {
            type: String,
            unique: true,
            required: [true, "Please enter your email"]
        }, address: {
            district: { type: String },
            street: { type: String },
            buildingNo: { type: Number },
        }, Password: {
            type: String,
            minlength: 6,
            required: [true, "Please enter your password"]
        }, role: {
            type: String,
            enum: ["admin", "user"],
            default: "user",
        },
        createdAt: {
            type: Date,
            default: new Date()
        }
    })

);
