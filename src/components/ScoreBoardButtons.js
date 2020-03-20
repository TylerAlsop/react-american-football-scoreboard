import React, { useContext } from "react";
import TopRowContext from '../contexts/TopRowContext';
import BottomRowContext from "../contexts/BottomRowContext";

function ScoreBoardButtons() {
    const { homeScore, setHomeScore, awayScore, setAwayScore } = useContext(TopRowContext);

    const { downNumber, setDownNumber, yardsToGo, setYardsToGo, yardLine, setYardLine, quarterNumber, setQuarterNumber } = useContext(BottomRowContext);


    //////////////////// Scores ////////////////////

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

    //////////////////// Down Number ////////////////////
    // const [downNumber, setDownNumber] = useState(1);

    const nextDown = (e) => {
        if (downNumber <= 3) {
        setDownNumber(downNumber + 1)
        } else {
        setDownNumber(1)
        }
    }

    //////////////////// Yards To Go ////////////////////
    // const [yardsToGo, setYardsToGo] = useState(0);

    const addOneYardToGo = (e) => {
        if (yardsToGo <= 98) {
        setYardsToGo(yardsToGo + 1)
        } else {
        setYardsToGo(0)
        }
    }

    const addFiveYardsToGo = (e) => {
        if (yardsToGo <= 94) {
        setYardsToGo(yardsToGo + 5)
        } else {
        setYardsToGo(0)
        }
    }

    const addTenYardsToGo = (e) => {
        if (yardsToGo <= 89) {
        setYardsToGo(yardsToGo + 10)
        } else {
        setYardsToGo(0)
        }
    }

    const goalIsLessThan10Yards = (e) => {
        setYardsToGo("Goal")
    }

    //////////////////// Yard Line ////////////////////
    // const [yardLine, setYardLine] = useState(1);

    const addOneYardLine = (e) => {
        if (yardLine <= 49) {
        setYardLine(yardLine + 1)
        } else {
        setYardLine(1)
        }
    }

    const addFiveYardsLine = (e) => {
        if (yardLine <= 45) {
        setYardLine(yardLine + 5)
        } else {
        setYardLine(1)
        }
    }

    const addTenYardsLine = (e) => {
        if (yardLine <= 40) {
        setYardLine(yardLine + 10)
        } else {
        setYardLine(1)
        }
    }

    //////////////////// Quarter Number ////////////////////
    // const [quarterNumber, setQuarterNumber] = useState(1);

    const nextQuarter = (e) => {
        if (quarterNumber <= 3) {
        setQuarterNumber(quarterNumber + 1)
        } else if (quarterNumber === 4) {
        setQuarterNumber("End")
        } else {
        setQuarterNumber(1)
        }
    }

    return (
        <div className="buttons">
            <div className="home-away-buttons">
                <h3 className="buttons-heading">Team Score's Buttons</h3>
                <div className="homeButtons">
                    <button className="homeButtons__touchdown" onClick={homeTouchDown}>Home Touchdown</button>
                    <button className="homeButtons__fieldGoal" onClick={homeFieldGoal}>Home Field Goal</button>
                </div>
                <div className="awayButtons">
                    <button className="awayButtons__touchdown" onClick={awayTouchDown}>Away Touchdown</button>
                    <button className="awayButtons__fieldGoal" onClick={awayFieldGoal}>Away Field Goal</button>
                </div>
            </div>
            
            <div className="down-quarter">
                <h3 className="buttons-heading">Down / Quarter Buttons</h3>
                <div className="down-quarter-buttons">
                    <button className="next_down" onClick={nextDown}>Next Down</button>
                    <button className="next_quarter" onClick={nextQuarter}>Next Quarter</button>
                </div>

            </div>
            <div className="yards-to-go">
                <h3 className="buttons-heading">Yards To Go Buttons</h3>
                <div className="to-go-buttons">
                    <button className="add_one_yard" onClick={addOneYardToGo}>+1</button>
                    <button className="add_five_yards" onClick={addFiveYardsToGo}>+5</button>
                    <button className="add_ten_yards" onClick={addTenYardsToGo}>+10</button>
                    <button className="goal_less_than_10" onClick={goalIsLessThan10Yards}>"Goal"</button>    
                </div>

            </div>
            <div className="ball-on">
                <h3 className="buttons-heading">Ball is on this yard line:</h3>
                <div className="ball-on-buttons">
                    <button className="add_one_yard" onClick={addOneYardLine}>+1</button>
                    <button className="add_five_yards" onClick={addFiveYardsLine}>+5</button>
                    <button className="add_ten_yards" onClick={addTenYardsLine}>+10</button>
                </div>


            </div>
        </div>
        
    );
};

export default ScoreBoardButtons;
