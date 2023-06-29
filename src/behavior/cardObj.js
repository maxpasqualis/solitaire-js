class CardObj {
  constructor(/*color enum*/ color, /*suit enum*/ suit, /*type enum*/ type) {
    this.color = color;
    this.suit = suit;
    this.type = type;
  }

  toString() {
    return `${this.type.value} ${this.suit.value}`;
  }
}

export default CardObj;
