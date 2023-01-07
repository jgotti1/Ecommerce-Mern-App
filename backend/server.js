import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler  } from "./middleware/errorHandling.js";
import colors from "colors";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API RUNNING");
});

app.use("/api/products", productRoutes);

// error handling

app.use(notFound)

app.use(errorHandler);

//DB Connect
connectDB();

//Start Server
const PORT = process.env.PORT;
const MODE = process.env.MODE_ENV;
app.listen(PORT, console.log(`Server running ${MODE} on port ${PORT}`.yellow.bold));
