class UnoCanvas {
    constructor(game){
        this.game = game;
        this.canvas = document.getElementById("uno");
        this.ctx = this.canvas.getContext('2d')
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0,0,900,500)
    }
    update(firstPlayer,secondPlayer,currentCard) {
        this.clearBoard()
        this.mostrarDeck()
        this.mostrarCartasPlayer(firstPlayer)
        this.mostrarCartasPlayer(secondPlayer)
        this.mostrarCurrentCard(currentCard)
    }
    clearBoard() {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0,0,900,500)
    }
    mostrarDeck() {
        this.ctx.save()
        let image = new Image()
        image.src = `images/back.png`; 
        this.ctx.drawImage(image, 25, 200, 75,100);
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
            let cardName = player.hand[i].name
            let image = new Image()
            image.src = `images/${cardName}.png`;
            this.ctx.drawImage(image, initX, Y, 75,100);
            initX += 100;
        }
        this.ctx.restore()
    }
    mostrarCurrentCard(currentCard) {
        this.ctx.save()
        console.log("CURRENT NAME")
        console.log(currentCard[0])
        let currentCardName = currentCard[0].name
        let image = new Image()
        image.src = `images/${currentCardName}.png`; 
        this.ctx.drawImage(image, 400, 200, 75,100);
        this.ctx.restore()
    }
}