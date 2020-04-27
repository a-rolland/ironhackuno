class UnoGame {
    constructor(cards){
      this.cards = cards;
    }
    shuffleCards() {
      let m = this.cards.length;
      let t;
      let i;
      // While there remain elements to shuffle
      while (m) {
        // Pick a remaining element
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t = this.cards[m];
        this.cards[m] = this.cards[i];
        this.cards[i] = t;
      }
      return undefined
    }
}