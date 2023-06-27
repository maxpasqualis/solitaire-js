import CardObj from "./cardObj";

import Color from "./enum/color";
import Suit from "./enum/suit";
import Type from "./enum/type";
import Foundation from "./foundationObj";
import Stock from "./stockObj";

class TableauObj {
  constructor() {
    // playing field
    this.tableau = {};
    // cards that have been 'put away', player wins when all cards are here
    this.foundation = new Foundation();
    // cards still available to draw from
    this.stock = new Stock();
  }

  initialize() {
    let deck = [];
    // populates deck with 52 cards
    Object.entries(Suit).forEach((suit) => {
      if (suit[0] == "Hearts" || suit[0] == "Diamonds") {
        Object.entries(Type).forEach((type) => {
          deck.push(new CardObj(Color.Red, suit[1], type[1]));
        });
      } else {
        Object.entries(Type).forEach((type) => {
          deck.push(new CardObj(Color.Black, suit[1], type[1]));
        });
      }
    });
    this.shuffleDeck(deck);

    let tableauList = deck.splice(0, 28);
    // set up tableau columns and divide 28 cards into them
    for (let i = 0; i < 7; i++) {
      this.tableau[i + 1] = tableauList.splice(0, i + 1);
    }
    // add remaining deck to stock linked list
    this.stock.setDeck(deck);
    console.log(this.tableau);
    console.log(this.stock);
    return this;
  }

  shuffleDeck(/*list*/ deck) {
    // fisher-yates algorithm
    let m = deck.length,
      t,
      i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = deck[m];
      deck[m] = deck[i];
      deck[i] = t;
    }
  }

  // for debug
  readAllCards(deck) {
    let out = "";
    deck.forEach((card) => (out += ` ${card.toString()}`));
    return out;
  }
}

export default TableauObj;
