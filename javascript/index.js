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
    { name: 'red-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'red' },
    { name: 'red-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'red' },
    { name: 'blue-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'blue' },
    { name: 'blue-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'blue' },
    { name: 'green-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'green' },
    { name: 'green-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'green' },
    { name: 'yellow-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'yellow' },
    { name: 'yellow-skip', cardLogo: 'SKIP', cardType: 'skip', value: 20, color: 'yellow' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },

    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardLogo: 'PickColor', cardType: 'wild', value: 50, color: 'multi' },
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
    let player2 = new Player(2)
    let players = [player1,player2]
    let board = new UnoCanvas()
    let game = new UnoGame(cards,board,player1,player2)

    game.gameExecuting = true;
    game.shuffleCards()
    game.dealCards(players)
    game.actualCard = game.getCurrentCard()
    board.update(player1,player2,game.actualCard)
    game.gameTimer()

    document.getElementById('uno').addEventListener('click', function(event) {

        if (!game.checkFinished() && !player2.isPlaying && !game.paused) {
            if (!player1.isSkipped) {
                game.playerOneMove()
            }
            player2.isPlaying = true

            if (!player2.isSkipped && (player1.hasPlayedACard || player1.hasPickedFromDeck) && !game.paused) {
                game.playerTwoMove()
            } else {
                player2.isPlaying = false;
            }  

            player1.hasPlayedACard = false;
            player1.hasPickedFromDeck = false;
            player2.isSkipped = false;

            game.checkCurrentCardDeck(game.actualCard)
            if (game.checkFinished()) {
                board.weHaveAWinner(player1,player2,game.winner)
            }
        }
    })
}








// Backup block

// playerTwoMove()

// Ver como poner esta funcion dentro de la Clase Game (problema con Closure)
// function playerTwoMove() {
//     player2.randomMove(game.actualCard,game.cards)
//     game.checkDraw2(player2,player1)
//     if ((player2.hasPlayedACard && game.actualCard[0].cardType === "skip") || 
//         (player2.hasPlayedACard && game.actualCard[0].cardType === "reverse")) {
//         player1.isSkipped = true;
//         if (!game.checkFinished()) {
//             player2.hasPlayedACard = false;
//             board.update(player1,player2,game.actualCard)
//             setTimeout(playerTwoMove,1600)
//         }
//     } else {
//         player1.isSkipped = false
//     }
//     setTimeout(function(){
//         if (!game.checkFinished()) {
//             board.update(player1,player2,game.actualCard)
//         }
//         player2.isPlaying = false;
//     },800)
//     if (game.checkFinished()) {
//         board.weHaveAWinner(player1,player2,game.winner)
//     }
// }