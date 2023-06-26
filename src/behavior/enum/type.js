class Type {
  static King = new Type("king");
  static Queen = new Type("queen");
  static Jack = new Type("jack");
  static Ace = new Type("ace");
  static 2 = new Type("2");
  static 3 = new Type("3");
  static 4 = new Type("4");
  static 5 = new Type("5");
  static 6 = new Type("6");
  static 7 = new Type("7");
  static 8 = new Type("8");
  static 9 = new Type("9");
  static 10 = new Type("10");

  constructor(name) {
    this.name = name;
  }

  toString() {
    return `Type.${this.name}`;
  }
}

export default Type;
