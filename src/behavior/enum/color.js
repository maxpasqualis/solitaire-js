class Color {
  static Red = new Color("red");
  static Black = new Color("black");

  constructor(name) {
    this.name = name;
  }

  toString() {
    return `Color.${this.name}`;
  }
}

export default Color;
