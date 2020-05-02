class UnoCanvas {
    constructor(){
        this.canvas = document.getElementById("uno");
        this.ctx = this.canvas.getContext('2d')
        this.ctx.fillStyle = "white";
        this.ctx.font = "15px Arial";
        this.ctx.fillRect(0,0,900,500)
    }

    // Update when : the game starts
    // when player 1 plays
    // when player 2 plays
    update(firstPlayer,secondPlayer,currentCard) {
        this.clearBoard()
        this.ctx.save()
        this.ctx.fillStyle = "black"
        this.mostrarDeck()
        this.mostrarCartasPlayer(firstPlayer)
        this.mostrarCartasPlayer(secondPlayer)
        this.mostrarCurrentCard(currentCard)
        this.ctx.restore()
    }

    clearBoard() {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0,0,900,500)
    }

    mostrarDeck() {
        this.ctx.save()
        // let image = new Image()
        // image.src = `images/back-reduce.png`; 
        // this.ctx.drawImage(image, 25, 200, 75,100);
        this.ctx.fillRect(25, 200, 75,100)
        this.ctx.restore()
    }

    // Show player hand
    // Only player 1 hand can be seen
    // The rest is faced down
    mostrarCartasPlayer(player) {
        let initX = 100
        let Y = 400
        if (player.playerNumber === 2) {
            Y = 0
        }
        this.ctx.save()
        for (let i=0;i<player.hand.length;i++) {
            // let cardName = player.hand[i].name
            // let image = new Image()
            // image.src = `images/${cardName}.png`;
            // this.ctx.drawImage(image, initX, Y, 75,100);
            let cardColor = player.hand[i].color
            let cardLogo = player.hand[i].cardLogo
            if (cardColor === 'multi') {
                cardColor = "grey"
            }
            if (player.playerNumber === 1) {
                this.ctx.fillStyle = `${cardColor}` // OJO con carta WILD & WILD +4
            }
            this.ctx.fillRect(initX, Y, 75,100);

            this.ctx.fillStyle = "black"
            if (player.playerNumber === 1) {
                this.ctx.fillText(`${cardLogo}`, initX,Y);
            } 
            initX += 100;
            if (i === 7 && player.playerNumber === 1) {
                initX = 150;
                Y = 350;
            }
            if (i === 14 && player.playerNumber === 1) {
                initX = 200;
                Y = 325;
            }
            if (i === 7 && player.playerNumber === 2) {
                initX = 150;
                Y = 50;
            }
            if (i === 14 && player.playerNumber === 2) {
                initX = 200;
                Y = 125;
            }
        }
        this.ctx.restore()
    }

    mostrarCurrentCard(currentCard) {
        this.ctx.save()
        // console.log("CURRENT NAME")
        // console.log(currentCard[0])
        // let currentCardName = currentCard[0].name
        // let image = new Image()
        // image.src = `images/${currentCardName}.png`; 
        // this.ctx.drawImage(image, 400, 200, 75,100);
        let cardColor = currentCard[0].color
        let cardLogo = currentCard[0].cardLogo
        if (cardColor === 'multi') {
            cardColor = "grey"
        }
        this.ctx.fillStyle = `${cardColor}` // OJO con carta WILD & WILD +4
        this.ctx.fillRect(400, 200, 75,100);

        this.ctx.fillStyle = "black"
        this.ctx.fillText(`${cardLogo}`, 400,200);
        this.ctx.restore()
    }

    getCursorPosition(event) {
        const rect = this.canvas.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        // console.log("x: " + x + " y: " + y)
        return [x,y]
    }

    weHaveAWinner(player,player1,player2) {
        this.clearBoard()
        this.ctx.save()
        this.ctx.fillStyle = "black"
        this.ctx.font = "40px Arial";
        if (player1.hand.length > 0 && player2.hand.length > 0) {
            const totalPlayer1 = player1.hand.reduce((total, current) => total + current.value,0); 
            const totalPlayer2 = player2.hand.reduce((total, current) => total + current.value,0); 
            totalPlayer1 > totalPlayer2 ? this.ctx.fillText(`Timeout ! Player 2 won !!! With ${totalPlayer2} points`, 75, this.canvas.height/2) :
                                                 this.ctx.fillText(`Timeout ! Player 1 won !!! With ${totalPlayer1} points`, 75, this.canvas.height/2)
            
        } else {
            this.ctx.fillText(`Player ${player.playerNumber} has won !!!`, this.canvas.width/3,this.canvas.height/2);
        }
        this.ctx.restore()
    }
}