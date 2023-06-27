import LinkedList from "./linkedListImpl";

class Stock {
  constructor() {
    (this.current = null), this.deck;
  }

  setDeck(cardList) {
    this.deck = new LinkedList();
    cardList.forEach((card) => {
      this.deck.insert(card);
    });
    return this.deck;
  }

  drawCard() {
    if (!this.current) {
      this.current = this.deck.head;
    } else {
      this.current = this.current.next;
    }
    return this.current;
  }

  takeCurrentCard() {
    if (this.current) {
      let card = this.current;
      this.current = this.current.next;
      this.deck.remove(card);
      return card;
    }
  }
}

export default Stock;
