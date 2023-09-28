import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";

import Homepage from "./components/Homepage";
import Profile from "./components/Profile";
import Hometown from "./components/Hometown";
import Food from "./components/Food";
import Tourist from "./components/Tourist";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Router>
            <Navbar />
            <Routes>
              <Route path="/quiz1" element={<Homepage />} />
              <Route path="/" element={<Navigate to="/quiz1" />} />
              <Route path="/quiz1/profile" element={<Profile />} />
              <Route path="/quiz1/hometown" element={<Hometown />} />
              <Route path="quiz1/food" element={<Food />} />
              <Route path="quiz1/tourist" element={<Tourist />} />
            </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
