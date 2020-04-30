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
      if (currentCardDeck.length >45) {
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

  play(pos,currentCard,deck) {
    if (typeof pos === 'string') {
      if (pos === 'deck') {
        console.log('Deck, you picked one card !')
        this.pickCards(1,deck)
      } else if (pos === 'current') {
        console.log("CURRENT CARD :")
        console.log(currentCard)
      }
    } else {
      if (this.isPlayable(this.hand[pos],currentCard[0])) {
        currentCard.unshift(...this.hand.splice(pos,1))
      } else {
        console.log("NOT POSSIBLE TO PLAY THIS CARD")
      }
    }
  }

  getCardPosition(position) {
    let x = position[0];
    let y = position[1];

    return x >=100 && x <=175 && y>= 400 ? 0 : 
    x >=200 && x <=275 && y>= 400 && this.hand.length >=2 ? 1 :
    x >=300 && x <=375 && y>= 400 && this.hand.length >=3 ? 2 :
    x >=400 && x <=475 && y>= 400 && this.hand.length >=4 ? 3 :
    x >=500 && x <=575 && y>= 400 && this.hand.length >=5 ? 4 :
    x >=600 && x <=675 && y>= 400 && this.hand.length >=6 ? 5 : 
    x >=700 && x <=775 && y>= 400 && this.hand.length >=7 ? 6 :
    x >=800 && x <=875 && y>= 400 && this.hand.length >=8 ? 7 :

    x >=150 && x <=225 && y>= 350 && y<400 && this.hand.length >=9 ? 8 :
    x >=250 && x <=325 && y>= 350 && y<400 && this.hand.length >=10 ? 9 :
    x >=350 && x <=425 && y>= 350 && y<400 && this.hand.length >=11 ? 10 :
    x >=450 && x <=525 && y>= 350 && y<400 && this.hand.length >=12 ? 11 :
    x >=550 && x <=625 && y>= 350 && y<400 && this.hand.length >=13 ? 12 :
    x >=650 && x <=725 && y>= 350 && y<400 && this.hand.length >=14 ? 13 :
    x >=750 && x <=825 && y>= 350 && y<400 && this.hand.length >=15 ? 14 :

    x >=200 && x <=275 && y>= 325 && y<350 && this.hand.length >=16 ? 15 :
    x >=300 && x <=375 && y>= 325 && y<350 && this.hand.length >=17 ? 16 :
    x >=400 && x <=475 && y>= 325 && y<350 && this.hand.length >=18 ? 17 :
    x >=500 && x <=575 && y>= 325 && y<350 && this.hand.length >=19 ? 18 :
    x >=600 && x <=675 && y>= 325 && y<350 && this.hand.length >=20 ? 19 :
    x >=700 && x <=775 && y>= 325 && y<350 && this.hand.length >=21 ? 20 :
    x >=800 && x <=875 && y>= 325 && y<350 && this.hand.length >=22 ? 21 :

    x >=25 && x <=100 &&  y>= 200 && y<=300 ? 'deck' :
    x >=400 && x <=475 &&  y>= 100 && y<=300 ? 'current' : 'This is not a card'
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