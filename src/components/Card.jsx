import React from "react";
import PropTypes from "prop-types";
import CardObj from "../behavior/cardObj";
import Color from "../behavior/enum/color";
import Suit from "../behavior/enum/suit";
import Type from "../behavior/enum/type";

import "./styles/Card.css"

class Card extends React.Component {
    render() { 
        const card = new CardObj(this.props.color, this.props.suit, this.props.type)
        return <div className="card">
            <p>{card.toString()}</p>
        </div> 
    }
}

Card.propTypes = {
    color: PropTypes.instanceOf(Color),
    suit: PropTypes.instanceOf(Suit),
    type: PropTypes.instanceOf(Type)

}

export default Card;