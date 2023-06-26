import React from "react";
import BoardObj from "../behavior/boardObj";


class Board extends React.Component {
    render() {
        const board = new BoardObj()
        const deck = board.initializeBoard()
        return <p>board initialized</p>;
    }
}

export default Board;
