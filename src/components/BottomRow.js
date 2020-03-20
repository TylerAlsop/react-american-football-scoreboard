import React, {useContext} from "react";
// import "./App.css";
import BottomRowContext from "../contexts/BottomRowContext";

function BottomRow() {
  const { downNumber, yardsToGo, yardLine, quarterNumber } = useContext(BottomRowContext);



  //////////////////// RETURN ////////////////////
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{downNumber}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        {/* Type In Yards To Go: <input></input> */}
        <div className="toGo__value">{yardsToGo}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        {/* Type In The Yard Line The Ball Is On: <input></input> */}
        <div className="ballOn__value">{yardLine}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarterNumber}</div>
      </div>
    </div>
  );
};

export default BottomRow;
