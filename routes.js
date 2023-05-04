const express = require("express")
const Predictions = require("./models/Predictions")
const router = express.Router()

router.get("/preds", async (req, res) => {
    const preds = await Predictions.find()
    res.send(preds)
})

module.exports = router