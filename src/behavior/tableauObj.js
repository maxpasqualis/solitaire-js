class Tableau {
  constructor() {
    this.cardDict = {};
  }

  setDeck(cardDict) {
    this.cardDict = cardDict;
  }

  setLane(laneIndex, cardList) {
    this.cardDict[laneIndex] = cardList;
  }
}

export default Tableau;
