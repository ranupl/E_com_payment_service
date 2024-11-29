const express = require("express");
const app = express();
require('dotenv').config({ path: './config/.env' });
const cors = require("cors");
const PORT = process.env.PORT || 5003;
const connectDB = require('./config/dbConfig');
const router = require("./routes/payment.route")

connectDB();
app.use(express.json());
app.use(cors());
app.use("/api/payment" , router);

app.get("/", (req, res) => {
    console.log("payment service is running");
    return res.json({message : "payment service is running"});
})

app.listen(PORT, () => {
    console.log(`Payment service is running at http://localhost:${PORT}/`)
})