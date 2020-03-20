import React, { useContext } from "react";
// import "./App.css";
import TopRowContext from "../contexts/TopRowContext";

function TopRow() {
    const { homeScore, awayScore } = useContext(TopRowContext);

    return (
        <div className="topRow">
            <div className="home">
                <h2 className="home__name">Lions</h2>
                <div className="home__score">{homeScore}</div>
            </div>
            <div className="timer">00:03</div>
            <div className="away">
                <h2 className="away__name">Tigers</h2>
                <div className="away__score">{awayScore}</div>
            </div>
        </div>
    );
};

export default TopRow;
