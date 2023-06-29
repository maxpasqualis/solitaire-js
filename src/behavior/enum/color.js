class Color {
  static Red = new Color("red");
  static Black = new Color("black");

  constructor(value) {
    this.value = value;
  }

  toString() {
    return `Color.${this.value}`;
  }
}

export default Color;
