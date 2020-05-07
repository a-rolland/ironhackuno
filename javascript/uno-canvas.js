class UnoCanvas {
    constructor(){
        this.canvas = document.getElementById("uno");
        this.ctx = this.canvas.getContext('2d')
        this.ctx.font = "15px Arial";
        this.img_win = new Image();
        this.img_win.src = ("images/logo_won.png");
        this.img_lost = new Image();
        this.img_lost.src = ("images/logo_lost.png");
        this.img_skipped = new Image();
        this.img_skipped.src = ("images/logo_skipped.png");
        this.img_reverse = new Image();
        this.img_reverse.src = ("images/logo_reverse.png");
        this.img_draw2 = new Image();
        this.img_draw2.src = ("images/logo_plus2.png");
        this.ctx.fillRect(0,0,900,500)
    }   

    getCursorPosition(event) {
        const rect = this.canvas.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        return [x,y]
    }

    update(firstPlayer,secondPlayer,currentCard,paused,winner,time) {
        this.clearBoard()
        this.ctx.save()
        this.ctx.fillStyle = "black"
        if (winner) {
            time <= 0 ? this.displayTimeOut() : null
            winner.playerNumber === 1 ? this.youWon(time) : this.youLost(firstPlayer,secondPlayer,time)  
        } else {
            this.showDeck()
            this.showPlayerCards(firstPlayer)
            this.showPlayerCards(secondPlayer)
            this.showCurrentCard(currentCard)
            if (paused) {
                this.chooseAColor()
            }
            if ((firstPlayer.isSkipped || secondPlayer.isSkipped) && currentCard[0].cardType === 'reverse') {
                this.reverse(firstPlayer,secondPlayer)
            } else if (firstPlayer.isSkipped || secondPlayer.isSkipped) {
                this.youAreSkipped(firstPlayer,secondPlayer)
            }
            if ((firstPlayer.hasPlayedACard || secondPlayer.hasPlayedACard) && currentCard[0].cardType === 'draw-2') {
                this.draw2(firstPlayer,secondPlayer)
            }
        }
        this.ctx.restore()
    }

    displayTimeOut() {
        this.ctx.drawImage(this.img_win,0,0,787,201,60,60,787,201)
    }

    clearBoard() {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0,0,900,500)
    }

    showDeck() {
        this.facedDownCard(25, 200, 75, 100)
    }

    showCurrentCard(currentCard) {
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

    showPlayerCards(player) {
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
        number === 'SKIP' ? this.drawSkipSign(x,y,color) : number === 'Reverse' ? this.drawReverseSign(x,y,color) : 
        number === 'PickColor' ? this.drawPickColorLogo(x,y) : number === '+2' ? this.ctx.fillText(number,x+18,y+60) :
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
        this.ctx.font = "normal 20px Arial"
        this.ctx.fillText("Choose a color !",555,170);
        this.ctx.fillStyle = '#ff5555' // red
        this.ctx.fillRect(575, 200, 45, 45);
        this.ctx.fillStyle = '#55aa55' // green
        this.ctx.fillRect(630, 200, 45,45);
        this.ctx.fillStyle = '#5555ff' // blue
        this.ctx.fillRect(575, 255, 45,45);
        this.ctx.fillStyle = '#ffaa00' // yellow
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

    drawSkipSign(x,y,color) {
        // this.drawACard('',color,200,150,75,100)
        this.ctx.save()
        this.drawCircle(x+37.5, y+50, 25, 0, color)
        this.drawCircle(x+37.5, y+50, 20,0, 'white')
        this.ctx.beginPath()
        this.ctx.strokeStyle = color
        this.ctx.lineWidth = 5;
        this.ctx.moveTo(x+22, y+70);
        this.ctx.lineTo(x+50, y+33);
        this.ctx.stroke();
        this.ctx.restore();
    }

    drawReverseSign(x,y,color) {
        this.ctx.save()
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = 5;
        this.ctx.moveTo(x+28,y+40)
        this.ctx.lineTo(x+28,y+65)
        this.ctx.moveTo(x+47,y+35)
        this.ctx.lineTo(x+47,y+60)
        this.ctx.stroke()
        this.ctx.beginPath()
        this.ctx.moveTo(x+23,y+65)
        this.ctx.lineTo(x+33,y+65)
        this.ctx.lineTo(x+28,y+70)
        this.ctx.closePath()
        this.ctx.stroke()
        this.ctx.beginPath()
        this.ctx.moveTo(x+42,y+35)
        this.ctx.lineTo(x+52,y+35)
        this.ctx.lineTo(x+47,y+30)
        this.ctx.closePath()
        this.ctx.stroke()
        this.ctx.restore()
    }

    drawPickColorLogo(x,y) {
        this.ctx.save()
        this.ctx.fillStyle = '#ff5555'
        this.ctx.fillRect(x+17,y+28,19,19)
        this.ctx.fillStyle = '#55aa55'
        this.ctx.fillRect(x+38,y+35,19,19)
        this.ctx.fillStyle = '#5555ff'
        this.ctx.fillRect(x+17,y+49,19,19)
        this.ctx.fillStyle = '#ffaa00'
        this.ctx.fillRect(x+38,y+56,19,19)
        this.ctx.restore()
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

    youAreSkipped(p1,p2) {
        this.ctx.drawImage(this.img_skipped,0,0,686,242,525,180,341,111)
        this.ctx.font = "20px Arial";
        this.ctx.fillStyle = "grey"
        p1.isSkipped ? this.ctx.fillText(`You cannot play !`, 525, 310) :
                       this.ctx.fillText(`Player 2 cannot play !`, 525, 200)             
    }

    reverse(p1,p2) {
        this.ctx.font = "20px Arial";
        this.ctx.fillStyle = "grey"
        this.ctx.drawImage(this.img_reverse,0,0,778,308,525,160,350,140)
        p1.isSkipped ? this.ctx.fillText(`You cannot play !`, 525, 310) :
                       this.ctx.fillText(`Player 2 cannot play !`, 525, 200)  
    }

    draw2(p1,p2) {
        this.ctx.font = "20px Arial";
        this.ctx.fillStyle = "grey"
        this.ctx.drawImage(this.img_draw2,0,0,347,195,525,160,313,176)
        p1.hasPlayedACard ? this.ctx.fillText(`Player 2 draws 2 cards !`, 525, 180) :
                            this.ctx.fillText(`You draw 2 cards !`, 525, 330)
    }

    youWon(time) {
        time <= 0 ? this.ctx.drawImage(this.img_win,0,202,787,402,60,240,787,402) :
                    this.ctx.drawImage(this.img_win,0,202,787,402,60,100,787,402)
    }

    youLost(p1,p2,time) {
        time <= 0 ? this.ctx.drawImage(this.img_lost,0,202,792,380,60,240,792,380) :
                    this.ctx.drawImage(this.img_lost,0,202,792,380,60,100,792,380)
        this.ctx.save()
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = "grey"
        time <= 0 ? this.ctx.fillText(`You had ${p1.points} ${p1.points > 1 ? `points` : `point`} and Player 2 had`
                                     +` ${p2.points} ${p2.points > 1 ? `points` : `point`}.`, 170, 460) : null
        this.ctx.restore()
    }
}










// Backup code

// weHaveAWinner(player1,player2,player) {
//     this.clearBoard()
//     this.ctx.save()
//     this.ctx.fillStyle = "black"
//     this.ctx.font = "40px Arial";
//     if (player1.hand.length > 0 && player2.hand.length > 0) {
//         const totalPlayer1 = player1.hand.reduce((total, current) => total + current.value,0); 
//         const totalPlayer2 = player2.hand.reduce((total, current) => total + current.value,0); 
//         totalPlayer1 > totalPlayer2 ? this.ctx.fillText(`Timeout ! You lost !!! With ${totalPlayer1} points`, 75, this.canvas.height/2) :
//                                              this.ctx.fillText(`Timeout ! You won !!! With ${totalPlayer1} points`, 75, this.canvas.height/2)   
//     } else {
//         let message = player.playerNumber === 1 ? 'You won !!!' : 'You lost !!!';
//         this.ctx.fillText(message, this.canvas.width/3,this.canvas.height/2);
//     }
//     this.ctx.restore()
// }