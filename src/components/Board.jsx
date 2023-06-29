import React from "react";
import Lane from "./Lane";
import TableauObj from "../behavior/tableauObj";

class Board extends React.Component {
    render() {
        const board = new TableauObj()
        board.initialize()
        let laneList = [], i = 0;
        for (let lane in board.tableau) {
            laneList.push(<Lane key={i} laneData={board.tableau[lane]}/>);
            i += 1;
            // for clarity - remove after css has been fixed
            laneList.push(<hr key={i}/>)
            i += 1;
        }
        return <div>{laneList}</div>;
    }
}

export default Board;
