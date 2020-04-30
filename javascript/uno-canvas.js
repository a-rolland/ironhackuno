class UnoCanvas {
    constructor(game){
        this.game = game;
        this.canvas = document.getElementById("uno");
        this.ctx = this.canvas.getContext('2d')
        this.ctx.fillStyle = "white";
        this.ctx.font = "15px Arial";
        this.ctx.fillRect(0,0,900,500)
    }

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
        // image.src = `images/back.png`; 
        // this.ctx.drawImage(image, 25, 200, 75,100);
        this.ctx.fillRect(25, 200, 75,100)
        this.ctx.restore()
    }

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

    weHaveAWinner(player) {
        this.clearBoard()
        this.ctx.save()
        this.ctx.fillStyle = "black"
        this.ctx.font = "40px Arial";
        this.ctx.fillText(`Player ${player.playerNumber} has won !!!`, this.canvas.width/2,this.canvas.height/2);
        this.ctx.restore()
    }
}