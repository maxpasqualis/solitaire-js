class CardObj {
  constructor(/*color enum*/ color, /*suit enum*/ suit, /*type enum*/ type) {
    this.color = color;
    this.suit = suit;
    this.type = type;
  }

  toString() {
    return `${this.color.name} ${this.type.name} of ${this.suit.name}`;
  }
}

export default CardObj;
