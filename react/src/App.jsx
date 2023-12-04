import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import DayOneChallenges from "./components/dayOne/DayOneChallenges";
import DayTwoChallenges from "./components/dayTwo/DayTwoChallenges";
import DayThreeChallenges from "./components/dayThree/DayThreeChallenges";
import DayFourChallenges from "./components/dayFour/DayFourChallenges";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/day/1" element={<DayOneChallenges />} />
        <Route path="/day/2" element={<DayTwoChallenges />} />
        <Route path="/day/3" element={<DayThreeChallenges />} />
        <Route path="/day/4" element={<DayFourChallenges />} />
      </Routes>
    </Router>
  );
};

export default App;
