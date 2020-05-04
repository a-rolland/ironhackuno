class UnoGame {
    constructor(cards,board,player1,player2){
      this.cards = cards;
      this.actualCard = [];
      this.seconds = 59;
      this.gameExecuting = false;
      this.board = board
      this.player1 = player1
      this.player2 = player2
      this.winner = null;
    }

    gameTimer() {
        document.getElementById('timer').innerHTML = `Time left : ${this.seconds}`;
        this.seconds--;
        if (this.seconds < 0) {
            this.gameExecuting = false
            this.board.weHaveAWinner(this.player1,this.player2)
        }
        else {
          let winner = this.checkFinished(this.player1,this.player2)
          if (!winner) {
            setTimeout(this.gameTimer.bind(this), 1000);
          }
        }
    }

    shuffleCards() {
      let m = this.cards.length;
      let t;
      let i;
      while (m) {
        i = Math.floor(Math.random() * m--);
        t = this.cards[m];
        this.cards[m] = this.cards[i];
        this.cards[i] = t;
      }
      return undefined
    }

    dealCards(playersArray) {
      for (let player=0;player<playersArray.length;player++) {
        playersArray[player].hand = this.cards.splice(this.cards.length-7, 7);
      }
    }

    getCurrentCard() {
      return this.cards.splice(this.cards.length-1,1)
    }

    checkCurrentCardDeck(currentCardDeck) {
      if (currentCardDeck.length >30) {
        this.cards.unshift(...currentCardDeck.splice(1,currentCardDeck.length-1))
        this.shuffleCards(this.cards)
      }
    }

    checkFinished() {
      if (this.player1.hand.length === 0 || this.player2.hand.length === 0 || !this.gameExecuting) {
        this.winner = this.player1.hand.length === 0 ? this.player1 : this.player2
        return true
      }
      return false
    }

    playerOneMove() {
      let position = this.board.getCursorPosition(event)
      let cardToBePlayed = this.player1.getCardPosition(position)
      this.player1.play(cardToBePlayed,this.actualCard,this.cards)
      if ((this.player1.hasPlayedACard && this.actualCard[0].cardType === "skip") ||
          (this.player1.hasPlayedACard && this.actualCard[0].cardType === "reverse")) {
              this.player2.isSkipped = true;
          }
      this.checkDraw2(this.player1,this.player2)
                // if (this.player1.hasPlayedACard && this.actualCard[0].cardType === 'wild') {
                //   console.log("Select a color")
                //   this.player1.hasPlayed = false
                //   console.log(this.actualCard[0].color)
                //   document.getElementById("uno").addEventListener('click', function(event) {
                //     if (this.player1.hasPlayedACard && this.actualCard[0].color === 'multi') {
                //     console.log(this.actualCard[0].color)
                //     let colorPosition = this.board.getCursorPosition(event)
                //     let color = this.player1.getCardPosition(colorPosition)
                //     this.actualCard[0].color = color
                //     console.log(this.actualCard[0].color)
                //     if (this.actualCard[0].color !== 'multi') {
                //       this.player1.hasPlayed = true;
                //       this.player2.isPlaying = true;
                //       this.player1.hasPlayedACard
                //     }
                //     this.board.update(this.player1,this.player2,this.actualCard)
                //     this.playerTwoMove()
                //   }
                //   }.bind(this))
                // }
      this.board.update(this.player1,this.player2,this.actualCard)
    }

    playerTwoMove() {
      this.player2.randomMove(this.actualCard,this.cards)
      this.checkDraw2(this.player2,this.player1)
      if ((this.player2.hasPlayedACard && this.actualCard[0].cardType === "skip") || 
          (this.player2.hasPlayedACard && this.actualCard[0].cardType === "reverse")) {
          this.player1.isSkipped = true;
          if (!this.checkFinished()) {
              this.player2.hasPlayedACard = false;
              this.board.update(this.player1,this.player2,this.actualCard)
              setTimeout(this.playerTwoMove.bind(this),1600)
          }
      } else {
          this.player1.isSkipped = false
      }
      setTimeout(function(){
          if (!this.checkFinished()) {
              this.board.update(this.player1,this.player2,this.actualCard)
          }
          this.player2.isPlaying = false;
      }.bind(this),800)
      if (this.checkFinished()) {
          this.board.weHaveAWinner(this.player1,this.player2,this.winner)
      }
  }

    checkDraw2(player,recipient) {
      if (player.hasPlayedACard && this.actualCard[0].cardType === "draw-2") {
        recipient.pickCards(2,this.cards)
      }
    }

}

class Player {
  constructor(playerNumber){
    this.hand = null;
    this.playerNumber = playerNumber;
    this.hasPlayed = false;
    this.hasPlayedACard = false;
    this.hasPickedFromDeck = false;
    this.isPlaying = false;
    this.isSkipped = false;
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
    for (let i=0;i<this.hand.length;i++) {
        if (this.isPlayable(this.hand[i],currentCard[0])) {
            return true
        }
    }
    return false
  }

  randomMove(currentCard,deck) {
    let canPlay = this.getPlayableCards(currentCard)
    if (canPlay) {
      let found = false;
      while (!found) {
        let rand = Math.floor(Math.random() * this.hand.length)
        if (this.isPlayable(this.hand[rand],currentCard[0])) {
          currentCard.unshift(...this.hand.splice(rand,1));
          found = true
          this.hasPlayedACard = true;
        }
      }
    } else {
        this.pickCards(1,deck)
        this.hasPickedFromDeck = true;
    }
  }

  play(pos,currentCard,deck) {
    if (typeof pos === 'string') {
      if (pos === 'deck') {
        console.log('Deck, you picked one card !')
        this.hasPlayed = true;
        this.pickCards(1,deck)
      } else if (pos === 'current') {
        console.log("CURRENT CARD :")
      }
    } else {
      if (this.isPlayable(this.hand[pos],currentCard[0])) {
        currentCard.unshift(...this.hand.splice(pos,1))
        this.hasPlayedACard = true
        this.hasPlayed = true;
      } else {
        console.log("NOT POSSIBLE TO PLAY THIS CARD")
      }
    }
  }

  getCardPosition(position) {
    let x = position[0];
    let y = position[1];

    return x >=100 && x <=175 && y >= 400 ? 0 : 
    x >=200 && x <=275 && y >= 400 && this.hand.length >=2 ? 1 :
    x >=300 && x <=375 && y >= 400 && this.hand.length >=3 ? 2 :
    x >=400 && x <=475 && y >= 400 && this.hand.length >=4 ? 3 :
    x >=500 && x <=575 && y >= 400 && this.hand.length >=5 ? 4 :
    x >=600 && x <=675 && y >= 400 && this.hand.length >=6 ? 5 : 
    x >=700 && x <=775 && y >= 400 && this.hand.length >=7 ? 6 :
    x >=800 && x <=875 && y >= 400 && this.hand.length >=8 ? 7 :

    x >=150 && x <=225 && y >= 350 && y <400 && this.hand.length >=9 ? 8 :
    x >=250 && x <=325 && y >= 350 && y <400 && this.hand.length >=10 ? 9 :
    x >=350 && x <=425 && y >= 350 && y <400 && this.hand.length >=11 ? 10 :
    x >=450 && x <=525 && y >= 350 && y <400 && this.hand.length >=12 ? 11 :
    x >=550 && x <=625 && y >= 350 && y <400 && this.hand.length >=13 ? 12 :
    x >=650 && x <=725 && y >= 350 && y <400 && this.hand.length >=14 ? 13 :
    x >=750 && x <=825 && y >= 350 && y <400 && this.hand.length >=15 ? 14 :

    x >=200 && x <=275 && y >= 325 && y <350 && this.hand.length >=16 ? 15 :
    x >=300 && x <=375 && y >= 325 && y <350 && this.hand.length >=17 ? 16 :
    x >=400 && x <=475 && y >= 325 && y <350 && this.hand.length >=18 ? 17 :
    x >=500 && x <=575 && y >= 325 && y <350 && this.hand.length >=19 ? 18 :
    x >=600 && x <=675 && y >= 325 && y <350 && this.hand.length >=20 ? 19 :
    x >=700 && x <=775 && y >= 325 && y <350 && this.hand.length >=21 ? 20 :
    x >=800 && x <=875 && y >= 325 && y <350 && this.hand.length >=22 ? 21 :

    x >=575 && x <= 620 && y >= 200 && y <= 245 ? 'red' :
    x >=575 && x <= 620 && y >= 255 && y <= 300 ? 'blue' :
    x >=630 && x <= 675 && y >= 200 && y <= 250 ? 'green' :
    x >=639 && x <= 675 && y >= 255 && y <= 300 ? 'yellow' :
    
    x >=25 && x <=100 &&  y >= 200 && y <=300 ? 'deck' :
    x >=400 && x <=475 &&  y >= 100 && y <=300 ? 'current' : 'This is not a card'
  }
}