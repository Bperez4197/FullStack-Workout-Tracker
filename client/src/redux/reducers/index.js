import { combineReducers } from "redux";
import workouts from "./workoutReducer";

export default combineReducers({
  workouts: workouts,
});
