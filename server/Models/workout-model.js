import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema({
  type: String,
  distance: {
    type: Number,
    default: 0,
  },
  time: {
    type: Number,
    default: 0,
  },
  color: { type: String, default: "grey" },
  description: String,
  date: { type: Date, default: new Date() },
  mph: { type: Number, default: 0 },
});

export const workoutModel = mongoose.model("workoutModel", workoutSchema);
