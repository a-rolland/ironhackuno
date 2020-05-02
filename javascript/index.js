const cards = [
    { name: 'red-0', cardLogo: '0', cardType: 'zero', value: 0, color: 'red' },
    { name: 'red-1', cardLogo: '1', cardType: 'one', value: 1, color: 'red' },
    { name: 'red-2', cardLogo: '2', cardType: 'two', value: 2, color: 'red' },
    { name: 'red-3', cardLogo: '3', cardType: 'three', value: 3, color: 'red' },
    { name: 'red-4', cardLogo: '4', cardType: 'four', value: 4, color: 'red' },
    { name: 'red-5', cardLogo: '5', cardType: 'five', value: 5, color: 'red' },
    { name: 'red-6', cardLogo: '6', cardType: 'six', value: 6, color: 'red' },
    { name: 'red-7', cardLogo: '7', cardType: 'seven', value: 7, color: 'red' },
    { name: 'red-8', cardLogo: '8', cardType: 'eight', value: 8, color: 'red' },
    { name: 'red-9', cardLogo: '9', cardType: 'nine', value: 9, color: 'red' },
    { name: 'red-1', cardLogo: '1', cardType: 'one', value: 1, color: 'red' },
    { name: 'red-2', cardLogo: '2', cardType: 'two', value: 2, color: 'red' },
    { name: 'red-3', cardLogo: '3', cardType: 'three', value: 3, color: 'red' },
    { name: 'red-4', cardLogo: '4', cardType: 'four', value: 4, color: 'red' },
    { name: 'red-5', cardLogo: '5', cardType: 'five', value: 5, color: 'red' },
    { name: 'red-6', cardLogo: '6', cardType: 'six', value: 6, color: 'red' },
    { name: 'red-7', cardLogo: '7', cardType: 'seven', value: 7, color: 'red' },
    { name: 'red-8', cardLogo: '8', cardType: 'eight', value: 8, color: 'red' },
    { name: 'red-9', cardLogo: '9', cardType: 'nine', value: 9, color: 'red' },
    { name: 'blue-0', cardLogo: '0', cardType: 'zero', value: 0, color: 'blue' },
    { name: 'blue-1', cardLogo: '1', cardType: 'one', value: 1, color: 'blue' },
    { name: 'blue-2', cardLogo: '2', cardType: 'two', value: 2, color: 'blue' },
    { name: 'blue-3', cardLogo: '3', cardType: 'three', value: 3, color: 'blue' },
    { name: 'blue-4', cardLogo: '4', cardType: 'four', value: 4, color: 'blue' },
    { name: 'blue-5', cardLogo: '5', cardType: 'five', value: 5, color: 'blue' },
    { name: 'blue-6', cardLogo: '6', cardType: 'six', value: 6, color: 'blue' },
    { name: 'blue-7', cardLogo: '7', cardType: 'seven', value: 7, color: 'blue' },
    { name: 'blue-8', cardLogo: '8', cardType: 'eight', value: 8, color: 'blue' },
    { name: 'blue-9', cardLogo: '9', cardType: 'nine', value: 9, color: 'blue' },
    { name: 'blue-1', cardLogo: '1', cardType: 'one', value: 1, color: 'blue' },
    { name: 'blue-2', cardLogo: '2', cardType: 'two', value: 2, color: 'blue' },
    { name: 'blue-3', cardLogo: '3', cardType: 'three', value: 3, color: 'blue' },
    { name: 'blue-4', cardLogo: '4', cardType: 'four', value: 4, color: 'blue' },
    { name: 'blue-5', cardLogo: '5', cardType: 'five', value: 5, color: 'blue' },
    { name: 'blue-6', cardLogo: '6', cardType: 'six', value: 6, color: 'blue' },
    { name: 'blue-7', cardLogo: '7', cardType: 'seven', value: 7, color: 'blue' },
    { name: 'blue-8', cardLogo: '8', cardType: 'eight', value: 8, color: 'blue' },
    { name: 'blue-9', cardLogo: '9', cardType: 'nine', value: 9, color: 'blue' },
    { name: 'green-0', cardLogo: '0', cardType: 'zero', value: 0, color: 'green' },
    { name: 'green-1', cardLogo: '1', cardType: 'one', value: 1, color: 'green' },
    { name: 'green-2', cardLogo: '2', cardType: 'two', value: 2, color: 'green' },
    { name: 'green-3', cardLogo: '3', cardType: 'three', value: 3, color: 'green' },
    { name: 'green-4', cardLogo: '4', cardType: 'four', value: 4, color: 'green' },
    { name: 'green-5', cardLogo: '5', cardType: 'five', value: 5, color: 'green' },
    { name: 'green-6', cardLogo: '6', cardType: 'six', value: 6, color: 'green' },
    { name: 'green-7', cardLogo: '7', cardType: 'seven', value: 7, color: 'green' },
    { name: 'green-8', cardLogo: '8', cardType: 'eight', value: 8, color: 'green' },
    { name: 'green-9', cardLogo: '9', cardType: 'nine', value: 9, color: 'green' },
    { name: 'green-1', cardLogo: '1', cardType: 'one', value: 1, color: 'green' },
    { name: 'green-2', cardLogo: '2', cardType: 'two', value: 2, color: 'green' },
    { name: 'green-3', cardLogo: '3', cardType: 'three', value: 3, color: 'green' },
    { name: 'green-4', cardLogo: '4', cardType: 'four', value: 4, color: 'green' },
    { name: 'green-5', cardLogo: '5', cardType: 'five', value: 5, color: 'green' },
    { name: 'green-6', cardLogo: '6', cardType: 'six', value: 6, color: 'green' },
    { name: 'green-7', cardLogo: '7', cardType: 'seven', value: 7, color: 'green' },
    { name: 'green-8', cardLogo: '8', cardType: 'eight', value: 8, color: 'green' },
    { name: 'green-9', cardLogo: '9', cardType: 'nine', value: 9, color: 'green' },
    { name: 'yellow-0', cardLogo: '0', cardType: 'zero', value: 0, color: 'yellow' },
    { name: 'yellow-1', cardLogo: '1', cardType: 'one', value: 1, color: 'yellow' },
    { name: 'yellow-2', cardLogo: '2', cardType: 'two', value: 2, color: 'yellow' },
    { name: 'yellow-3', cardLogo: '3', cardType: 'three', value: 3, color: 'yellow' },
    { name: 'yellow-4', cardLogo: '4', cardType: 'four', value: 4, color: 'yellow' },
    { name: 'yellow-5', cardLogo: '5', cardType: 'five', value: 5, color: 'yellow' },
    { name: 'yellow-6', cardLogo: '6', cardType: 'six', value: 6, color: 'yellow' },
    { name: 'yellow-7', cardLogo: '7', cardType: 'seven', value: 7, color: 'yellow' },
    { name: 'yellow-8', cardLogo: '8', cardType: 'eight', value: 8, color: 'yellow' },
    { name: 'yellow-9', cardLogo: '9', cardType: 'nine', value: 9, color: 'yellow' },
    { name: 'yellow-1', cardLogo: '1', cardType: 'one', value: 1, color: 'yellow' },
    { name: 'yellow-2', cardLogo: '2', cardType: 'two', value: 2, color: 'yellow' },
    { name: 'yellow-3', cardLogo: '3', cardType: 'three', value: 3, color: 'yellow' },
    { name: 'yellow-4', cardLogo: '4', cardType: 'four', value: 4, color: 'yellow' },
    { name: 'yellow-5', cardLogo: '5', cardType: 'five', value: 5, color: 'yellow' },
    { name: 'yellow-6', cardLogo: '6', cardType: 'six', value: 6, color: 'yellow' },
    { name: 'yellow-7', cardLogo: '7', cardType: 'seven', value: 7, color: 'yellow' },
    { name: 'yellow-8', cardLogo: '8', cardType: 'eight', value: 8, color: 'yellow' },
    { name: 'yellow-9', cardLogo: '9', cardType: 'nine', value: 9, color: 'yellow' },
    { name: 'red-draw-2', cardLogo: '+2', cardType: 'draw-2', value: 20, color: 'red' },
    { name: 'red-draw-2', cardLogo: '+2', cardType: 'draw-2', value: 20, color: 'red' },
    { name: 'blue-draw-2', cardLogo: '+2', cardType: 'draw-2', value: 20, color: 'blue' },
    { name: 'blue-draw-2', cardLogo: '+2', cardType: 'draw-2', value: 20, color: 'blue' },
    { name: 'green-draw-2', cardLogo: '+2', cardType: 'draw-2', value: 20, color: 'green' },
    { name: 'green-draw-2', cardLogo: '+2', cardType: 'draw-2', value: 20, color: 'green' },
    { name: 'yellow-draw-2', cardLogo: '+2', cardType: 'draw-2', value: 20, color: 'yellow' },
    { name: 'yellow-draw-2', cardLogo: '+2', cardType: 'draw-2', value: 20, color: 'yellow' },
    { name: 'red-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'red' },
    { name: 'red-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'red' },
    { name: 'blue-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'blue' },
    { name: 'blue-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'blue' },
    { name: 'green-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'green' },
    { name: 'green-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'green' },
    { name: 'yellow-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'yellow' },
    { name: 'yellow-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'yellow' },

    //TEST BLOCK
    { name: 'red-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'red' },
    { name: 'red-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'red' },
    { name: 'blue-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'blue' },
    { name: 'blue-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'blue' },
    { name: 'green-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'green' },
    { name: 'green-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'green' },
    { name: 'yellow-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'yellow' },
    { name: 'yellow-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'yellow' },
    { name: 'red-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'red' },
    { name: 'red-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'red' },
    { name: 'blue-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'blue' },
    { name: 'blue-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'blue' },
    { name: 'green-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'green' },
    { name: 'green-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'green' },
    { name: 'yellow-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'yellow' },
    { name: 'yellow-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'yellow' },
    { name: 'red-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'red' },
    { name: 'red-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'red' },
    { name: 'blue-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'blue' },
    { name: 'blue-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'blue' },
    { name: 'green-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'green' },
    { name: 'green-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'green' },
    { name: 'yellow-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'yellow' },
    { name: 'yellow-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'yellow' },
    { name: 'red-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'red' },
    { name: 'red-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'red' },
    { name: 'blue-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'blue' },
    { name: 'blue-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'blue' },
    { name: 'green-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'green' },
    { name: 'green-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'green' },
    { name: 'yellow-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'yellow' },
    { name: 'yellow-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'yellow' },
    { name: 'red-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'red' },
    { name: 'red-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'red' },
    { name: 'blue-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'blue' },
    { name: 'blue-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'blue' },
    { name: 'green-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'green' },
    { name: 'green-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'green' },
    { name: 'yellow-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'yellow' },
    { name: 'yellow-reverse', cardLogo: 'Reverse', cardType: 'reverse', value: 20, color: 'yellow' },
    //END TEST BLOCK

    { name: 'red-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'red' },
    { name: 'red-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'red' },
    { name: 'blue-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'blue' },
    { name: 'blue-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'blue' },
    { name: 'green-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'green' },
    { name: 'green-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'green' },
    { name: 'yellow-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'yellow' },
    { name: 'yellow-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'yellow' },

    // TEST BLOCK
    { name: 'red-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'red' },
    { name: 'red-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'red' },
    { name: 'blue-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'blue' },
    { name: 'blue-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'blue' },
    { name: 'green-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'green' },
    { name: 'green-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'green' },
    { name: 'yellow-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'yellow' },
    { name: 'yellow-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'yellow' },
    { name: 'red-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'red' },
    { name: 'red-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'red' },
    { name: 'blue-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'blue' },
    { name: 'blue-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'blue' },
    { name: 'green-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'green' },
    { name: 'green-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'green' },
    { name: 'yellow-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'yellow' },
    { name: 'yellow-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'yellow' },
    { name: 'red-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'red' },
    { name: 'red-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'red' },
    { name: 'blue-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'blue' },
    { name: 'blue-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'blue' },
    { name: 'green-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'green' },
    { name: 'green-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'green' },
    { name: 'yellow-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'yellow' },
    { name: 'yellow-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'yellow' },
    { name: 'red-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'red' },
    { name: 'red-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'red' },
    { name: 'blue-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'blue' },
    { name: 'blue-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'blue' },
    { name: 'green-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'green' },
    { name: 'green-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'green' },
    { name: 'yellow-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'yellow' },
    { name: 'yellow-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'yellow' },
    { name: 'red-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'red' },
    { name: 'red-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'red' },
    { name: 'blue-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'blue' },
    { name: 'blue-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'blue' },
    { name: 'green-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'green' },
    { name: 'green-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'green' },
    { name: 'yellow-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'yellow' },
    { name: 'yellow-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'yellow' },
    // END TEST BLOCK

    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'draw-4-wild', cardLogo: '+4', cardType: 'draw-4-wild', value: 50, color: 'multi' },
    { name: 'draw-4-wild', cardLogo: '+4', cardType: 'draw-4-wild', value: 50, color: 'multi' },
    { name: 'draw-4-wild', cardLogo: '+4', cardType: 'draw-4-wild', value: 50, color: 'multi' },
    { name: 'draw-4-wild', cardLogo: '+4', cardType: 'draw-4-wild', value: 50, color: 'multi' }
  ];

document.getElementById("start").onclick = function (event) {

    let player1 = new Player(1)
    // player1.playerNumber = 1

    let player2 = new Player(2)
    // player2.playerNumber = 2

    let board = new UnoCanvas()
    let game = new UnoGame(cards,board,player1,player2)
    game.gameExecuting = true;
    game.shuffleCards()
    // console.log(game.cards)

    // Give each player 7 cards
    game.dealCards(player1)
    game.dealCards(player2)
    
    // console.log("Player 1 starting hand")
    // console.log(player1.hand)
    
    // Set a first card in the middle to start the game
    let actualCard = game.getCurrentCard()

    board.update(player1,player2,actualCard)
    
    // console.log("First Current card")
    // console.log(actualCard[0])

    // After 1 minute, if players still have cards, the winner is the one with the fewest points

    // let winner = false;
    // let i = 59; // Initialize the timer at 59 sec.
    // let gameTimer = function onTimer() {
    //     document.getElementById('timer').innerHTML = `Time left : ${i}`;
    //     i--;
    //     if (i < 0) {
    //         board.weHaveAWinner(winner,player1,player2)
    //         winner = true;
    //         clearTimeout(gameTimer)
    //         // Reminder : clear Timeout utilizando una referencia
    //     }
    //     else {
    //         setTimeout(onTimer, 1000);
    //     }
    // }

    game.gameTimer()
    // function onTimer() {
    //     document.getElementById('timer').innerHTML = `Time left : ${i}`;
    //     i--;
    //     if (i < 0) {
    //         board.weHaveAWinner(winner,player1,player2)
    //         winner = true;
    //         // Reminder : clear Timeout utilizando una referencia
    //     }
    //     else {
    //         setTimeout(onTimer, 1000);
    //     }
    // }

    // setTimeout(game.gameTimer,1000);
    // setTimeout(gameTimer,1000);

    function player2Move() {
        player2.randomMove(actualCard,game.cards) // A ver si lo ponemos en el setTimeout
        if (player2.hasPlayedACard && (actualCard[0].cardType === "skip" || actualCard[0].cardType === "reverse")) {
            player1.isSkipped = true;
            winner = game.checkFinished(player1,player2)
            if (!winner) {
                player2.hasPlayedACard = false;
                setTimeout(player2Move,1600)
            }
            //  {
            //     player2.randomMove(actualCard,game.cards)
            //     board.update(player1,player2,actualCard)
            //     player1.isSkipped = false;
            //     player2.isPlaying = false;
            // },1600)
        } else {
            player1.isSkipped = false
        }
        setTimeout(function(){
            if (!winner) { // Even if game is ended, we have to set this condition as this is a Timeout function,
                            // otherwise the board will be updated with cards
            board.update(player1,player2,actualCard)
            }
            player2.isPlaying = false;
        },800)
        winner = game.checkFinished(player1,player2)
        if (winner) {
            board.weHaveAWinner(game.winner,player1,player2)
        }
        // board.update(player1,player2,actualCard)
    }
 
    let winner = game.checkFinished(player1,player2)
    // Action when player clicks on canvas and only if game is not finished
    document.getElementById('uno').addEventListener('click', function(event) {

        if (!game.checkFinished(player1,player2)) {
            if (!player2.isPlaying && !player1.isSkipped) {
            // Check position of the click
            let position = board.getCursorPosition(event)

            // Pick the card found on this position
            let cardToBePlayed = player1.getCardPosition(position)

            console.log("CURRENT CARD")
            console.log(actualCard[0])

            console.log("PLAYER 1 HAND")
            console.log(player1.hand)
            
            // Check if player2 is skipped : we check first if the clicked element is a card from the player 1
            // Then we check if this card is of type "skipped" or "reverse"
            // If it is, player2 is skipped for 1 round. At the end of the round this status is set back to false
            if (player1.hand[cardToBePlayed]) {
                if (player1.hand[cardToBePlayed].cardType === 'skip' || 
                    player1.hand[cardToBePlayed].cardType === 'reverse') {
                    player2.isSkipped = true;
                }
            }
            
            // Play the picked card
            player1.play(cardToBePlayed,actualCard,game.cards)
            player2.isPlaying = true
            board.update(player1,player2,actualCard)
            }
            
            console.log("PLAYER 2 HAND")
            console.log(player2.hand)

            console.log("SKIPPED ?")
            console.log(player1.isSkipped)

            console.log("player2.isPlaying?")
            console.log(player2.isPlaying)

            // Player 2 will play randomly, only if player one either played a card, or picked one from the deck
            if (player1.hasPlayed === true && !player2.isSkipped) {
                player2Move()


                // player2.randomMove(actualCard,game.cards) // A ver si lo ponemos en el setTimeout
                // if (actualCard[0].cardType === "skip") {
                //     player1.isSkipped = true;
                //     setTimeout(function() {
                //         player2.randomMove(actualCard,game.cards)
                //         board.update(player1,player2,actualCard)
                //         player1.isSkipped = false;
                //         player2.isPlaying = false;
                //     },1600)
                // }
            }




            // setTimeout(function(){
            //     if (!winner) { // Even if game is ended, we have to set this condition as this is a Timeout function,
            //                    // otherwise the board will be updated with cards
            //     board.update(player1,player2,actualCard)
            //     }
            //     player2.isPlaying = false;
            // },800)
            // // board.update(player1,player2,actualCard)
            
            player1.hasPlayed = false;

            // If current card deck is getting too big, just keep the first card, the rest of the cards will be 
            // added to the deck, and the deck will be shuffled
            game.checkCurrentCardDeck(actualCard)
            player2.isSkipped = false;
            player2.isPlaying = false;
            player2.hasPlayedACard = false;
            
            // Each round : check if game is finished, and if so, who the winner is
            // let winner = game.checkFinished(player1,player2)
            winner = game.checkFinished(player1,player2)
            if (winner) {
                board.weHaveAWinner(game.winner,player1,player2)
            }
        }
    })
}

// Backup codelines 
// let playerCards = game.cards.splice(game.cards.length-7, 7); //Give player his first hand

// player1.hand.push(...game.cards.splice(game.cards.length-7,  7)); ---> // Pick cards

// console.log("Possibilities : " + possibilities)

// setTimeout(function() {
    //                 board.weHaveAWinner(winner,player1,player2)
    //                 winner = true;
    //             },5000)