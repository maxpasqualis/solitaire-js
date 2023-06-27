import React from "react";
import CardObj from "../behavior/cardObj";
import Color from "../behavior/enum/color";
import Suit from "../behavior/enum/suit";
import Type from "../behavior/enum/type";

import "./styles/Card.css"

class Card extends React.Component {
    render() { 
        const card = new CardObj(Color.Red, Suit.Hearts, Type.Ace)
        return <div className="card">
            <p>{card.toString()}</p>
        </div> 
    }
}

export default Card;