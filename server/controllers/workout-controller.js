import { workoutModel } from "../Models/workout-model.js";

export const getAllWorkouts = async (req, res) => {
  try {
    const Allworkouts = await workoutModel.find();
    res.status(200).json(Allworkouts);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

export const postWorkout = async (req, res) => {
  const { type, distance, time, description } = req.body;

  const newWorkout = new workoutModel({
    createdBy,
    type,
    distance,
    time,
    color,
    description,
  });

  try {
    await newWorkout.save();
    res.status(201).json(newWorkout);
  } catch (err) {
    res.status(404).json({ message: "Not able to post workout: " + err });
  }
};

export const updateWorkout = async (req, res) => {
  const { id: _id } = req.params;
  const workoutData = req.body;

  // guard clause on valid id
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No workout with that id");

  try {
    const updatedWorkout = await workoutModel.findByIdAndUpdate(
      _id,
      ...workoutData,
      { new: true }
    );
    res.json(updatedWorkout);
  } catch (err) {
    res.status(404).json({ message: "Not able to update Workout: " + err });
  }
};

export const deleteWorkout = async (req, res) => {
  const { id: _id } = req.params;

  // guard clause on valid id
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No workout with that id");

  try {
    await workoutModel.findByIdAndRemove(_id);
    res.status(201).json({ message: "Workout Successfully Deleted" });
  } catch (err) {
    res.status(404).json({ message: "Not able to delete workout: " + err });
  }
};
