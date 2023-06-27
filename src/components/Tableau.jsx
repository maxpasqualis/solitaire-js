import React from "react";
import TableauObj from "../behavior/tableauObj";


class Tableau extends React.Component {
    render() {
        const board = new TableauObj()
        const deck = board.initializeTableau()
        return <p>board initialized</p>;
    }
}

export default Tableau;
