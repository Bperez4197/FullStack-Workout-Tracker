import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

export default function Home() {
  return (
    <main>
      <h1>Keep Track of your Workouts</h1>
      <h4>
        Now easier than ever, just share your location, plot your wokouts on a
        map, and fill in some information about the workout!
      </h4>
      <div className="home-buttons">
        <Link to="/signup" className="home-button">
          <button>Sign Up!</button>
        </Link>
        <h6>Or</h6>
        <Link to="/signin" className="home-button">
          <button>Sign In!</button>
        </Link>
      </div>
    </main>
  );
}
