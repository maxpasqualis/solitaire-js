class Suit {
  static Hearts = new Suit("♥");
  static Diamonds = new Suit("♦");
  static Clubs = new Suit("♣");
  static Spades = new Suit("♠");

  constructor(value) {
    this.value = value;
  }

  toString() {
    return `Suit.${this.value}`;
  }
}

export default Suit;
