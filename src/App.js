//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import TopRow from './components/TopRow';
import BottomRow from "./components/BottomRow";

import TopRowContext from './contexts/TopRowContext';
import BottomRowContext from './contexts/BottomRowContext';



function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const [downNumber, setDownNumber] = useState(1);
  const [yardsToGo, setYardsToGo] = useState(0);
  const [yardLine, setYardLine] = useState(1);
  const [quarterNumber, setQuarterNumber] = useState(1);


  const homeTouchDown = (e) => {
    setHomeScore(homeScore + 7)
  }

  const homeFieldGoal = (e) => {
    setHomeScore(homeScore + 3)
  }

  const awayTouchDown = (e) => {
    setAwayScore(awayScore + 7)
  }

  const awayFieldGoal = (e) => {
    setAwayScore(awayScore + 3)
  }


  return (
    <TopRowContext.Provider value={{ homeScore, setHomeScore, awayScore, setAwayScore }}>
      <BottomRowContext.Provider value={{ downNumber, setDownNumber, yardsToGo, setYardsToGo, yardLine, setYardLine, quarterNumber, setQuarterNumber }}>
        <div className="container">
          <section className="scoreboard">
            <TopRow />
            <BottomRow />
          </section>
          <section className="buttons">
            <div className="homeButtons">
              {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
              <button className="homeButtons__touchdown" onClick={homeTouchDown}>Home Touchdown</button>
              <button className="homeButtons__fieldGoal" onClick={homeFieldGoal}>Home Field Goal</button>
            </div>
            <div className="awayButtons">
              <button className="awayButtons__touchdown" onClick={awayTouchDown}>Away Touchdown</button>
              <button className="awayButtons__fieldGoal" onClick={awayFieldGoal}>Away Field Goal</button>
            </div>
          </section>
        </div>
      </BottomRowContext.Provider>
    </TopRowContext.Provider>
    
  );
}

export default App;
