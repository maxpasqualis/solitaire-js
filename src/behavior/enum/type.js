class Type {
  static King = new Type("K");
  static Queen = new Type("Q");
  static Jack = new Type("J");
  static Ace = new Type("A");
  static 2 = new Type("2");
  static 3 = new Type("3");
  static 4 = new Type("4");
  static 5 = new Type("5");
  static 6 = new Type("6");
  static 7 = new Type("7");
  static 8 = new Type("8");
  static 9 = new Type("9");
  static 10 = new Type("10");

  constructor(value) {
    this.value = value;
  }

  toString() {
    return `Type.${this.value}`;
  }
}

export default Type;
