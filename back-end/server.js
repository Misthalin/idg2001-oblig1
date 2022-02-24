const express = require('express');
const mongoose = require('mongoose');
const env = require('dotenv').config();

const app = express()
const PORT = process.env.PORT || 8080

app.get("/", (req, res) => {
    res.send("Server running")
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))