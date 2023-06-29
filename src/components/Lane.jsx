import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";

class Lane extends React.Component {
    render() {
        let cardList = [], i = 0;
        this.props.laneData.forEach(card => {
            cardList.push(<Card key = {i} color={card.color} suit={card.suit} type={card.type}/>)
            i += 1;
        })
        return <div>{cardList}</div>;
    }
}

Lane.propTypes = {
    laneData: PropTypes.array.isRequired,
}

export default Lane;
