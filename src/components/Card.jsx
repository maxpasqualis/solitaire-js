import React from "react";
import CardObj from "../behavior/card";
import Color from "../behavior/enum/color";
import Suit from "../behavior/enum/suit";
import Type from "../behavior/enum/type";

class Card extends React.Component {
    render() { 
        const card = new CardObj(Color.Red, Suit.Hearts, Type.Ace)
        return <>
            <p>this is a Card component.</p>
            <p>properties:</p>
            <p>{card.color.name}</p>
            <p>{card.suit.name}</p>
            <p>{card.type.name}</p>
        </> 
    }
}

export default Card;