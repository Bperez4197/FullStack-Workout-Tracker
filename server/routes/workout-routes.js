import express from "express";
import {
  getAllWorkouts,
  postWorkout,
  updateWorkout,
  deleteWorkout,
} from "../controllers/workout-controller.js";

const router = express.Router();

router.get("/", getAllWorkouts);
router.post("/", postWorkout);
router.patch("/:id", updateWorkout);
router.delete("/:id", deleteWorkout);

export default router;
