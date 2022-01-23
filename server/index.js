import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;

// Routes

app.get("/", (req, res) => {
  res.send("Workout Backend!");
});

// connect to database and listen on port
// mongoose.connect().then().catch()
app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});
