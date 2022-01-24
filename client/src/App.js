import "./App.css";
import Home from "./pages/Home/Home";
import SignIn from "./pages/Sign-In/SignIn";
import SignUp from "./pages/Sign-Up/SignUp";
import Map from "./pages/Map/Map";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </div>
  );
}

export default App;
