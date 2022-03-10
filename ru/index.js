require('dotenv').config()
const cors = require("cors")
const express = require("express")
const mongoose = require("mongoose")
const router = require("./routers/index")
const errorHandler = require("./middleware/ErrorHandlingMiddleware")

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)

app.use(errorHandler)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, () => console.log("Mongoose connected"), e => console.error(e));
        app.listen(PORT, () => console.log("Server started on " + PORT));
    } catch (e) {
        console.log(e);
    }
}

startApp();