import React from "react";
import Card from "./Card";
import Lane from "./Lane";
import TableauObj from "../behavior/tableauObj";


class Tableau extends React.Component {
    render() {
        const tableau = new TableauObj()
        tableau.initialize()
        let laneList = []
        for (let lane in tableau.tableau) {
            laneList.push(<Lane laneData = {tableau.tableau[lane]}/>);
            // for clarity
            laneList.push(<hr />)
        }
        return <div>{laneList}</div>;
    }
}

export default Tableau;
