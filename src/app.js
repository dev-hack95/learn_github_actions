const express = require('express')
const app = express()

app.get("/testNode", (_req, res) => {
    res.status(200).send("Yes test to endpoint worked")
})

// Helps the app use the outside of this file
module.exports = app;