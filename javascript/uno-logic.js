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

    getCurrentCard() {
      return this.cards.splice(this.cards.length-1,1)
    }

    checkCurrentCardDeck(currentCardDeck) {
      if (currentCardDeck.length >4) {
        this.cards.unshift(...currentCardDeck.splice(1,currentCardDeck.length-1))
        this.shuffleCards(this.cards)
      }
    }

    checkFinished(player1,player2) {
      if (player1.hand.length === 0 || player2.hand.length === 0) {
        return true;
      }
      return false
    }
}

class Player {
  constructor(hand,playerNumber){
    this.hand = hand;
    this.playerNumber = playerNumber;
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
    return false
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

  randomMove(currentCard,deck) {
    let hasPossibility = this.getPlayableCards(currentCard)
    if (hasPossibility.length > 0) {
      let found = 0;
      while (found === 0) {
        let rand = Math.floor(Math.random() * this.hand.length)
        if (this.isPlayable(this.hand[rand],currentCard[0])) {
          currentCard.unshift(...this.hand.splice(rand,1));
          // currentCard.unshift =  this.hand.splice(rand,1);
          found = 1
        }
      }
    } else {
        this.pickCards(1,deck)
    }
  }

  play(pos,currentCard) {
    if (typeof pos === 'string') {
      console.log("Not a card")
    } else {
      if (this.isPlayable(this.hand[pos],currentCard[0])) {
        currentCard.unshift(...this.hand.splice(pos,1))
      } else {
        console.log("NOT POSSIBLE TO PLAY THIS CARD")
      }
    }
  }

  getCardInfo(position) {
    let x = position[0];
    let y = position[1];
    if (x >=100 && x <=175 && y>= 400) {
      return 0
    } else if (x >=200 && x <=275 && y>= 400) {
      return 1
    } else if (x >=300 && x <=375 &&  y>= 400) {
      return 2
    } else if (x >=400 && x <=475 &&  y>= 400) {
      return 3
    } else if (x >=500 && x <=575 &&  y>= 400) {
      return 4
    } else if (x >=600 && x <=675 &&  y>= 400) {
      return 5
    } else if (x >=700 && x <=775 &&  y>= 400) {
      return 6
    } else if (x >=800 && x <=875 &&  y>= 400) {
      return 7
    } else {
      return (`This is not a card`)
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