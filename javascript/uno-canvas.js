class UnoCanvas {
    constructor(){
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
        this.chooseAColor()
        this.ctx.restore()
    }

    clearBoard() {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0,0,900,500)
    }

    mostrarDeck() {
        this.ctx.save()
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
            let cardColor = player.hand[i].color
            let cardLogo = player.hand[i].cardLogo
            if (cardColor === 'multi') {
                cardColor = "grey"
            }
            if (player.playerNumber === 1) {
                this.ctx.fillStyle = `${cardColor}`
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
        let cardColor = currentCard[0].color
        let cardLogo = currentCard[0].cardLogo
        if (cardColor === 'multi') {
            cardColor = "grey"
        }
        this.ctx.fillStyle = `${cardColor}`
        this.ctx.fillRect(400, 200, 75,100);

        this.ctx.fillStyle = "black"
        this.ctx.fillText(`${cardLogo}`, 400,200);
        this.ctx.restore()
    }

    getCursorPosition(event) {
        const rect = this.canvas.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        return [x,y]
    }

    chooseAColor() {
        this.ctx.save()
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(575, 200, 45, 45);
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(630, 200, 45,45);
        this.ctx.fillStyle = 'blue'
        this.ctx.fillRect(575, 255, 45,45);
        this.ctx.fillStyle = 'yellow'
        this.ctx.fillRect(630, 255, 45,45);
        this.ctx.restore()
    }

    weHaveAWinner(player1,player2,player) {
        this.clearBoard()
        this.ctx.save()
        this.ctx.fillStyle = "black"
        this.ctx.font = "40px Arial";
        if (player1.hand.length > 0 && player2.hand.length > 0) {
            const totalPlayer1 = player1.hand.reduce((total, current) => total + current.value,0); 
            const totalPlayer2 = player2.hand.reduce((total, current) => total + current.value,0); 
            totalPlayer1 > totalPlayer2 ? this.ctx.fillText(`Timeout ! Player 2 won !!! With ${totalPlayer2} points`, 75, this.canvas.height/2) :
                                                 this.ctx.fillText(`Timeout ! You won !!! With ${totalPlayer1} points`, 75, this.canvas.height/2)   
        } else {
            let message = player.playerNumber === 1 ? 'You won !!!' : 'Player 2 won !!!';
            this.ctx.fillText(message, this.canvas.width/3,this.canvas.height/2);
        }
        this.ctx.restore()
    }
}