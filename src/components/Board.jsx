import React from "react";
import Lane from "./Lane";
import TableauObj from "../behavior/boardObj";
import "./styles/Board.css"

class Board extends React.Component {
    render() {
        const board = new TableauObj()
        board.initialize()
        let laneList = [], i = 0;
        for (let lane in board.tableau.cardDict) {
            laneList.push(<Lane key={i} laneData={board.tableau.cardDict[lane]}/>);
            i += 1;

        }
        return <div>
                    <div id="tableau">
                        {laneList}
                    </div>
                </div>;
    }
}

export default Board;
