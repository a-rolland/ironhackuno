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
    dealCards(player) {
      player.hand = this.cards.splice(this.cards.length-7, 7);
    }
}

class Player {
  constructor(hand){
    this.hand = hand;
  }
  pickCards(quantity,deck) {
    this.hand.push(...deck.splice(deck.length-quantity,  quantity));
  }
  isPlayable(card,currentCard) {
    if (card.cardType === currentCard.cardType || 
      card.color === currentCard.color || 
      card.cardType === 'wild' || 
      card.cardType === 'draw-4-wild' || 
      currentCard.cardType === 'wild' ||
      currentCard.cardType === 'draw-4-wild') {
        return true
      }
  }
  getPlayableCards(currentCard) {
    let possibilities = 0
    let playersChoice = []

    for (let i=0;i<this.hand.length;i++) {
        // console.log(this.hand[i])
        if (this.isPlayable(this.hand[i],currentCard[0])) {
            possibilities ++
            playersChoice.push(this.hand[i])
        }
    }
    return playersChoice
  }
  
  // Function to be uncommented when player will be able to play, and not the computer
  // getPlayableCards(currentCard) {
  //   let possibilities = 0
  //   let playersChoice = []

  //   for (let i=0;i<this.hand.length;i++) {
  //       // console.log(this.hand[i])
  //       if (this.isPlayable(this.hand[i],currentCard[0])) {
  //           possibilities ++
  //           playersChoice.push(this.hand[i])
  //       }
  //   }
  //   return playersChoice
  // }

  randomMove(currentCard,deck) {
    let hasPossibility = this.getPlayableCards(currentCard)
    if (hasPossibility.length > 0) {
      let found = 0;
      while (found === 0) {
        let rand = Math.floor(Math.random() * this.hand.length)
        if (this.isPlayable(this.hand[rand],currentCard[0])) {
          currentCard =  this.hand.splice(rand,1);
          found = 1
        }
      }
    } else {
        this.pickCards(1,deck)
    }
  }

  // randomMove(currentCard,options,deck) {
  //   if (options.length > 0) {
  //     currentCard = options[Math.floor(Math.random() * options.length)];
  //     console.log("player1 could play")
  //   } else {
  //       this.pickCards(1,deck)
  //       console.log('Players cards')
  //       console.log(player1.hand)
  //       console.log("player1 could NOT play")
  //   }
  // }

  // randomMove(currentCard,options,deck) {
  //   let copyHand = [...this.hand]
  //   let options = this.getPlayableCards(currentCard)
  //   if (options.length > 0) {
  //     let found = 0;
  //     while (found === 0) {
  //       let rand = Math.floor(Math.random() * this.hand.length)
  //       if (this.isPlayable(this.hand[rand],currentCard[0])) {
  //         currentCard =  this.hand.splice(rand,1);
  //         found = 1
  //       }
  //     }
  //     console.log("Current Card ==>")
  //     console.log(currentCard)
  //     console.log("Before Hand")
  //     console.log(copyHand)
  //     console.log("player1 could play")
  //   } else {
  //       this.pickCards(1,deck)
  //       console.log('Players cards')
  //       console.log(player1.hand)
  //       console.log("player1 could NOT play")
  //   }
  // }
}