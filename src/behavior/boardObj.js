import CardObj from "./cardObj";
import Color from "./enum/color";
import Suit from "./enum/suit";
import Type from "./enum/type";

class boardObj {
  constructor() {
    this.deck = [];
  }

  initializeDeck() {
    Object.entries(Suit).forEach((suit) => {
      if (suit[0] == "Hearts" || suit[0] == "Diamonds") {
        Object.entries(Type).forEach((type) => {
          this.deck.push(new CardObj(Color.Red, suit[1], type[1]));
        });
      } else {
        Object.entries(Type).forEach((type) => {
          this.deck.push(new CardObj(Color.Black, suit[1], type[1]));
        });
      }
    });
    return this.deck;
  }

  readAllCards() {
    let out = "";
    this.deck.forEach((card) => (out += ` ${card.toString()}`));
    return out;
  }
}

export default boardObj;
