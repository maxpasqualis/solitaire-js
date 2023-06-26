import React from "react";
import boardObj from "../behavior/boardObj";


class Board extends React.Component {
    render() {
        const board = new boardObj()
        board.initializeDeck()
        return <p>{board.readAllCards()}</p>;
    }
}

export default Board;
