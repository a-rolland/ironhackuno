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
      this.paused = false;
      this.audio = new Audio('media/bensound-ukulele.mp3');
      this.audio.volume = 0.2;
      this.win = new Audio('media/win.mp3');
      this.win.volume = 0.6;
      this.lose = new Audio('media/lose.mp3');
      this.lose.volume = 0.6;
    }

    gameTimer() {
        document.getElementById('timer').innerHTML = `Time left : ${this.seconds}`;
        this.seconds--;
        if (this.seconds < 0) {
            this.gameExecuting = false
            this.audio.pause()
            this.checkFinished(this.player1,this.player2)
            this.board.update(this.player1,this.player2,this.actualCard,this.paused,this.winner,this.seconds)
          }
        else {
          if (!this.checkFinished(this.player1,this.player2)) {
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
      let card = this.cards.splice(this.cards.length-1,1)
      while (card[0].cardType === 'wild' || card[0].cardType === 'draw-4-wild') {
        card = this.cards.splice(this.cards.length-1,1)
      }
      this.actualCard = card
    }

    checkCurrentCardDeck(currentCardDeck) {
      if (currentCardDeck.length >50) {
        this.cards.unshift(...currentCardDeck.splice(1,currentCardDeck.length-1))
        this.shuffleCards(this.cards)
      }
    }

    checkFinished() {
      if (this.player1.hand.length === 0 || this.player2.hand.length === 0 || !this.gameExecuting) {
        this.player1.calculatePoints()
        this.player2.calculatePoints()
        this.winner = this.player1.hand.length === 0 ? this.player1 : 
                      this.player2.hand.length === 0 ? this.player2 :
                      this.player1.points > this.player2.points ? this.player2 :
                      this.player1
        this.winner === this.player1 ? this.win.play() : this.lose.play();
        this.audio.pause()
        return true
      }
      return false
    }

    pickColor() {
      // Make sure that the user clicked on a correct color - if not, nothing will happen
      let position = this.board.getCursorPosition(event)
      let cardToBePlayed = this.player1.getCardPosition(position)
      if (cardToBePlayed === 'red' || cardToBePlayed === 'green' || cardToBePlayed === 'blue' || cardToBePlayed === 'yellow') {
        return cardToBePlayed
      }
      return null;
    }

    changeColor(color) {
      this.actualCard[0].color = color
      if (this.actualCard[0].cardType === 'draw-4-wild') {
        this.player2.pickCards(4,this.cards)
      }
      this.board.update(this.player1,this.player2,this.actualCard)
      this.paused = false;
      this.player1.hasPlayedACard = true;
    }

    checkDraw2(player,recipient) {
      if (player.hasPlayedACard && this.actualCard[0].cardType === "draw-2") {
        recipient.pickCards(2,this.cards)
      }
    }

    playerOneMove() {
      let position = this.board.getCursorPosition(event)
      let cardToBePlayed = this.player1.getCardPosition(position)
      this.player1.play(cardToBePlayed,this.actualCard,this.cards)
      if ((this.player1.hasPlayedACard && this.actualCard[0].cardType === "skip") ||
          (this.player1.hasPlayedACard && this.actualCard[0].cardType === "reverse")) {
              this.player2.isSkipped = true;
          }
      // If the user played a "+2" card, then player2 will draw 2 cards from the deck automatically
      this.checkDraw2(this.player1,this.player2)
      // Put the game is a "paused" mode in case the user has to select a color
      if (this.player1.hasPlayedACard && (this.actualCard[0].cardType === 'wild' || this.actualCard[0].cardType === 'draw-4-wild')) {
        this.paused = true;
      }
      this.board.update(this.player1,this.player2,this.actualCard,this.paused)
    }

    playerTwoMove() {
      this.player2.playRandom(this.actualCard,this.cards)
      // If player2 played a "+2" card, then the user will draw 2 cards from the deck automatically
      this.checkDraw2(this.player2,this.player1)
      if (this.player2.hasPlayedACard && (this.actualCard[0].cardType === 'wild'|| this.actualCard[0].cardType === 'draw-4-wild')) {
        let colors = ['red','green','blue','yellow']
        let randomColor = Math.floor(Math.random() * colors.length)
        this.actualCard[0].color = colors[randomColor]
        if (this.actualCard[0].cardType === 'draw-4-wild') {
          this.player1.pickCards(4,this.cards)
        }
      }
      // While player2 plays a "skip" or a "reverse" card, the user will be skipped
      // And a new playerTwoMove will be triggered
      if ((this.player2.hasPlayedACard && this.actualCard[0].cardType === "skip") || 
          (this.player2.hasPlayedACard && this.actualCard[0].cardType === "reverse")) {
          this.player1.isSkipped = true;
          if (!this.checkFinished()) {
              this.player2.hasPlayedACard = false;
              setTimeout(this.playerTwoMove.bind(this),1600)
          }
      } else {
          this.player1.isSkipped = false
      }
      // Player2 card will be shown with a delay of 0.8 second, in order to be able to see the movement
      // During this brief moment, the user cannot play 
      setTimeout(function(){
          if (!this.checkFinished()) {
              this.board.update(this.player1,this.player2,this.actualCard)
          }
          this.player2.isPlaying = false;
      }.bind(this),800)
      if (this.checkFinished()) {
        this.board.update(this.player1,this.player2,this.actualCard,this.paused,this.winner,this.seconds)
      }
  }

  resetPlayersStatus() {
    this.player1.hasPlayedACard = false;
    this.player1.hasPickedFromDeck = false;
    this.player2.isSkipped = false;
  }
}

class Player {
  constructor(playerNumber){
    this.hand = null;
    this.playerNumber = playerNumber;
    this.hasPlayedACard = false;
    this.hasPickedFromDeck = false;
    this.isPlaying = false;
    this.isSkipped = false;
    this.points = null;
  }

  calculatePoints() {
    if(this.hand) {
      this.points = this.hand.reduce((total, current) => total + current.value,0)
    }
  }

  pickCards(quantity,deck) {
    this.hand.push(...deck.splice(deck.length-quantity,  quantity));
  }

  isPlayable(card,currentCard) {
    // Check if a card is playable or not
    if (card.cardType === currentCard.cardType || 
      card.color === currentCard.color || 
      card.cardType === 'wild' || 
      card.cardType === 'draw-4-wild') {
        return true
      }
    return false
  }

  canPlay(currentCard) {
    // Check if a player has any option to play
    // This method is used for random actions
    for (let i=0;i<this.hand.length;i++) {
        if (this.isPlayable(this.hand[i],currentCard[0])) {
            return true
        }
    }
    return false
  }

  playRandom(currentCard,deck) {
    if (this.canPlay(currentCard)) {
      let found = false;
      // We randomly select a card in player2's hand
      // If it's "playable", then we play it
      // If not, we start again until we find one
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
        this.pickCards(1,deck)
        this.hasPickedFromDeck = true;
      }
    } else {
      if (this.isPlayable(this.hand[pos],currentCard[0])) {
        currentCard.unshift(...this.hand.splice(pos,1))
        this.hasPlayedACard = true;
      }
    }
  }

  getCardPosition(position) {
    // Any click on the canvas will return a value that we can use
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