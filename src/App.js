//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import TopRow from './components/TopRow';
import BottomRow from "./components/BottomRow";
import ScoreBoardButtons from './components/ScoreBoardButtons';

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




  return (
    <TopRowContext.Provider value={{ homeScore, setHomeScore, awayScore, setAwayScore }}>
      <BottomRowContext.Provider value={{ downNumber, setDownNumber, yardsToGo, setYardsToGo, yardLine, setYardLine, quarterNumber, setQuarterNumber }}>
        <div className="container">
          <section className="scoreboard">
            <TopRow />
            <BottomRow />
          </section>
          <section className="buttons">
            <ScoreBoardButtons />
          </section>
        </div>
      </BottomRowContext.Provider>
    </TopRowContext.Provider>
    
  );
}

export default App;
