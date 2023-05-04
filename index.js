const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes") // new
require('dotenv').config();
mongoose.connect(
    process.env.CONNECTION_STRING,
    {
        useNewUrlParser: true,
    }
)
    .then(() => {
        const app = express()
        app.use(express.json()) // new
        app.use("/api", routes) // new
        const db = mongoose.connection;
        db.on("error", console.error.bind(console, "connection error: "));
        db.once("open", function () {
            console.log("Connected successfully");
        });
        app.listen(5000, () => {
            console.log("Server has started!")
        })
    })