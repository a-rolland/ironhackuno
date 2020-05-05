class UnoCanvas {
    constructor(){
        this.canvas = document.getElementById("uno");
        this.ctx = this.canvas.getContext('2d')
        this.ctx.fillStyle = "white";
        this.ctx.font = "15px Arial";
        this.ctx.fillRect(0,0,900,500)
    }

    getCursorPosition(event) {
        const rect = this.canvas.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        return [x,y]
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
        this.facedDownCard(25, 200, 75, 100)
    }

    mostrarCurrentCard(currentCard) {
        this.ctx.save()
        let cardColor = currentCard[0].color
        cardColor = this.correctColorTone(cardColor)
        let cardLogo = currentCard[0].cardLogo
        if (cardColor === 'multi') {
            cardColor = "grey"
        }
        this.ctx.fillStyle = `${cardColor}`
        this.ctx.fillRect(400, 200, 75,100);
        this.drawACard(cardLogo,cardColor,400,200,75,100)
        this.ctx.restore()
    }

    mostrarCartasPlayer(player) {
        let initX = 100
        let Y = 400
        let height = 100
        if (player.playerNumber === 2) {
            Y = 0
        }
        this.ctx.save()
        for (let i=0;i<player.hand.length;i++) {
            let cardColor = player.hand[i].color
            let cardLogo = player.hand[i].cardLogo
            cardColor = this.correctColorTone(cardColor)

            if (player.playerNumber === 1) {
                this.ctx.fillStyle = `${cardColor}`
            }
            if (player.playerNumber === 2) {
                this.facedDownCard(initX,Y)
            }
            if (player.playerNumber === 1) {
                this.drawACard(cardLogo,cardColor,initX,Y, 75,100)
            }

            initX += 100;
            if (i === 7 && player.playerNumber === 1) {
                initX = 150;
                Y = 350;
                height = 40
            }
            if (i === 14 && player.playerNumber === 1) {
                initX = 200;
                Y = 325;
                height = 10
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

    drawACard(number,color,x,y,width,height) {
        this.ctx.save()
        this.ctx.fillStyle = color
        this.ctx.fillRect(x,y,width,height);
        this.drawCircle(x+width/2, y+height/2, 35, 0,'white')

        this.ctx.fillStyle = color;
        this.ctx.font = number === 'SKIP' ? "lighter italic 20px Arial" : number === 'Reverse' ? "lighter italic 15px Arial" : 
                        number === 'PickColor' ? "lighter italic 15px Arial" : "lighter italic 30px Arial"
        number === 'SKIP' ? this.ctx.fillText(number,x+13,y+57) : number === 'Reverse' ? this.ctx.fillText(number,x+10,y+53) : 
        number === 'PickColor' ? this.ctx.fillText(number,x+5,y+55) : number === '+2' ? this.ctx.fillText(number,x+18,y+60) :
        number === '+4' ? this.ctx.fillText(number,x+18,y+60) : this.ctx.fillText(number,x+width/2.8,y+height/1.7);

        this.ctx.fillStyle = "white"
        this.ctx.font = number === 'SKIP' ? "normal 12px Arial" : number === 'Reverse' ? "normal 14px Arial" : 
                        number === 'PickColor' ? "normal 14px Arial" : "bold 17px Arial";

        number === 'Reverse' ? this.writeCardInfo(number,x+2,y+12,x+width-54,(y+height)-3) : 
        number === 'PickColor' ? this.writeCardInfo(number,x+2,y+12,x+width-62,(y+height)-3) :
        number === 'SKIP' ? this.writeCardInfo(number,x+2,y+12,x+width-30,(y+height)-3,(x+width-30),y+12,x+2,(y+height)-3) :
        number === '+2' || number === '+4' ?  this.writeCardInfo(number,x+2,y+15,x+width-23,(y+height)-3,x+2,(y+height)-3,(x+width-23),y+15) : 
        this.writeCardInfo(number,x+2,y+15,x+width-13,(y+height)-3,(x+width-13),y+15,x+2,(y+height)-3)
        this.ctx.restore()
    }

    chooseAColor() {
        this.ctx.save()
        this.ctx.fillStyle = '#ff5555'
        this.ctx.fillRect(575, 200, 45, 45);
        this.ctx.fillStyle = '#55aa55'
        this.ctx.fillRect(630, 200, 45,45);
        this.ctx.fillStyle = '#5555ff'
        this.ctx.fillRect(575, 255, 45,45);
        this.ctx.fillStyle = '#ffaa00'
        this.ctx.fillRect(630, 255, 45,45);
        this.ctx.restore()
    }

    correctColorTone(originalColor) {
        let newColor = null;
        return newColor = originalColor === 'multi' ? 'grey' :
                          originalColor === 'red' ? '#ff5555' :
                          originalColor === 'green' ? '#55aa55' :
                          originalColor === 'blue' ? '#5555ff' :
                          originalColor === 'yellow' ? '#ffaa00' : 'black';
    }

    writeCardInfo(cardNumber,xUpperLeft,yUpperLeft,xLowerRight,yLowerRight,xUpperRight,yUpperRight,xLowerLeft,yLowerLeft) {
        if (cardNumber === 'Reverse' || cardNumber === 'PickColor') {
            this.ctx.fillText(cardNumber,xUpperLeft,yUpperLeft);
            this.ctx.fillText(cardNumber,xLowerRight,yLowerRight);
        } else {
            this.ctx.fillText(cardNumber,xUpperLeft,yUpperLeft);
            this.ctx.fillText(cardNumber,xLowerRight,yLowerRight);
            this.ctx.fillText(cardNumber,xUpperRight,yUpperRight);
            this.ctx.fillText(cardNumber,xLowerLeft,yLowerLeft)
        }
    }

    drawCircle(x,y,radius,startAngle,color) {
        this.ctx.beginPath();
        this.ctx.arc(x,y,radius,startAngle, 2 * Math.PI);
        this.ctx.fillStyle = color
        this.ctx.fill()
        this.ctx.strokeStyle = color
        this.ctx.stroke();
    }

    facedDownCard(x,y) {
        this.ctx.save()
        this.ctx.fillRect(x, y, 75, 100)
        this.drawCircle(x+75/2, y+100/2, 35, 0,'lightgrey')
        this.ctx.fillStyle = "grey"
        this.ctx.font = "bold italic 17px Arial";
        this.ctx.fillText('¡Hack',x+10,y+45);
        this.ctx.fillText('Uno!',x+20,y+65);
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