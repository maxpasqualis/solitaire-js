import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";

class Lane extends React.Component {
    render() {
        let cardList = []
        this.props.laneData.forEach(card => {
            cardList.push(<Card />)
        })
        //console.log(this.props.laneData)
        return <div>{cardList}</div>;
    }
}

Lane.propTypes = {
    laneData: PropTypes.array.isRequired,
}

export default Lane;
