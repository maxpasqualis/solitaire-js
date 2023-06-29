import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";

class Lane extends React.Component {
    render() {
        let cardList = []
        this.props.laneData.forEach(card => {
            cardList.push(<Card color={card.color} suit={card.suit} type={card.type}/>)
        })
        return <div>{cardList}</div>;
    }
}

Lane.propTypes = {
    laneData: PropTypes.array.isRequired,
}

export default Lane;
