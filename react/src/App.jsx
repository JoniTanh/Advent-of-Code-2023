import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import DayOneChallenges from "./components/dayOne/DayOneChallenges";
import DayTwoChallenges from "./components/dayTwo/DayTwoChallenges";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/day/1" element={<DayOneChallenges />} />
        <Route path="/day/2" element={<DayTwoChallenges />} />
      </Routes>
    </Router>
  );
};

export default App;
