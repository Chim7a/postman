import express from "express";
const app = express();
const port = 3000;

import userRoutes from "./routes/userRoutes.js";

// Use to extract values sent from the incoming request.
app.use(express.json());

app.use("/api/v1", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

// Listening to server
app.listen(port, () => {
  console.log("Listening to server on port " + port);
});
