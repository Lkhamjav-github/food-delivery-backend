"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
exports.userModel = mongoose_1.default.model("User", new Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"]
    }, email: {
        type: String,
        unique: true,
        required: [true, "Please enter your email"]
    }, address: {
        type: String,
        required: [true, "Please enter your name"]
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
}));
