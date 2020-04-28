class UnoCanvas {
    constructor(game){
        this.game = game;
        this.canvas = document.getElementById("uno");
        this.ctx = this.canvas.getContext('2d')
    }
    update() {
        this.mostrarDeck()
    }
    mostrarDeck() {
        this.ctx.save()
        this.ctx.fillRect(10,10,50,50)
        this.ctx.restore()
    }
    mostrarCartas(player) {
        for (let i=0;i<player.hand.length;i++) {
            //Code Here
        }

    }

    // drawLines() {
    //     this.context.lineWidth = 2;
    //     this.context.strokeStyle = 'black';
    //     this.context.font = "50px Arial";
    
    //     let initX = 350
    //     let Y = 650
    
    //     for (let i=0;i<this.secretWord.length;i++) {
    //         this.context.moveTo(initX,Y)
    //         this.context.lineTo(initX+50,Y)
    //         this.context.moveTo(initX+75,Y)
    //         initX += 75;
    //     }
    
    //     this.context.stroke()
    //   }



    mostrarCartaMedio() {

    }
}