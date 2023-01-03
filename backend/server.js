import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API RUNNING");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

//DB Connect
connectDB();

//Start Server
const PORT = process.env.PORT;
const MODE = process.env.MODE_ENV;
app.listen(PORT, console.log(`Server running ${MODE} on port ${PORT}`.yellow.bold));
