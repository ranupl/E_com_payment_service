const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT || 5003;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    console.log("payment service is running");
    return res.json({message : "payment service is running"});
})

app.listen(PORT, () => {
    console.log(`Payment service is running at http://localhost:${PORT}/`)
})