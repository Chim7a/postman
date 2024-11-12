import dotenv from "dotenv";
import express from "express";
const app = express();
const port = 3000;

// Use to extract values sent from the incoming request.
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

// setting up a post route
app.post("/register", (req, res) => {
  console.log(req.body.firstName);

  res.status(201).json({ message: "User registered successfully" });
});

// Setting put route
app.put("/update-profile", (req, res) => {
  res.status(200).json({ message: "account updated successfully" });
});

// Setting patch route
app.patch("/update-email", (req, res) => {
  res.status(200).json({ message: "email updated successfully" });
});

// Setting delete route
app.delete("/delete-account", (req, res) => {
  res.status(200).json({ message: "Deleted successfully" });
});

// Get user info
app.get("/get-info", (req, res) => {
  console.log(req.query);

  const user = {
    name: "Chima Paul",
    age: 30,
    city: "London",
  };
  res.status(200).json(user);
});

// Listening to server
app.listen(port, () => {
  console.log("Listening to server on port " + port);
});
