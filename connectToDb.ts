
const mongoose = require('mongoose')
require("dotenv").config()

export const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Succeseffuly connected to Database")
    }
    catch (err) {
        console.error(err)
    }
}

