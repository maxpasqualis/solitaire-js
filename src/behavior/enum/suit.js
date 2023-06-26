class Suit {
  static Hearts = new Suit("hearts");
  static Diamonds = new Suit("diamonds");
  static Clubs = new Suit("clubs");
  static Spades = new Suit("spades");

  constructor(name) {
    this.name = name;
  }

  toString() {
    return `Suit.${this.name}`;
  }
}

export default Suit;
