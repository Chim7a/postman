import dotenv from "dotenv/config";
import express from "express";
const app = express();
const port = 3000;

import userRoutes from "./routes/userRoutes.js";
import mongoose from "mongoose";

// Use to extract values sent from the incoming request.
app.use(express.json());

app.use("/api/v1", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

// Connect to the database
async function connectToDatabase(params) {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION);
    console.log("Server started successfully");
    console.log("Connected to datbase");
  } catch (error) {
    console.log(error);
  }
}

// Listening to server
app.listen(port, () => {
  console.log(connectToDatabase());
});
