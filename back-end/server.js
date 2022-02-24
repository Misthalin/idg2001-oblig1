const express = require('express');
const mongoose = require('mongoose');
const env = require('dotenv').config();
const path = require('path');

const app = express()
const PORT = process.env.PORT || 8080

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../front-end", "index.html"))
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))