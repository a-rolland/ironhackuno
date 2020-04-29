const cards = [
    { name: 'red-0', cardType: 'zero', value: 0, color: 'red' },
    { name: 'red-1', cardType: 'one', value: 1, color: 'red' },
    { name: 'red-2', cardType: 'two', value: 2, color: 'red' },
    { name: 'red-3', cardType: 'three', value: 3, color: 'red' },
    { name: 'red-4', cardType: 'four', value: 4, color: 'red' },
    { name: 'red-5', cardType: 'five', value: 5, color: 'red' },
    { name: 'red-6', cardType: 'six', value: 6, color: 'red' },
    { name: 'red-7', cardType: 'seven', value: 7, color: 'red' },
    { name: 'red-8', cardType: 'eight', value: 8, color: 'red' },
    { name: 'red-9', cardType: 'nine', value: 9, color: 'red' },
    { name: 'red-1', cardType: 'one', value: 1, color: 'red' },
    { name: 'red-2', cardType: 'two', value: 2, color: 'red' },
    { name: 'red-3', cardType: 'three', value: 3, color: 'red' },
    { name: 'red-4', cardType: 'four', value: 4, color: 'red' },
    { name: 'red-5', cardType: 'five', value: 5, color: 'red' },
    { name: 'red-6', cardType: 'six', value: 6, color: 'red' },
    { name: 'red-7', cardType: 'seven', value: 7, color: 'red' },
    { name: 'red-8', cardType: 'eight', value: 8, color: 'red' },
    { name: 'red-9', cardType: 'nine', value: 9, color: 'red' },
    { name: 'blue-0', cardType: 'zero', value: 0, color: 'blue' },
    { name: 'blue-1', cardType: 'one', value: 1, color: 'blue' },
    { name: 'blue-2', cardType: 'two', value: 2, color: 'blue' },
    { name: 'blue-3', cardType: 'three', value: 3, color: 'blue' },
    { name: 'blue-4', cardType: 'four', value: 4, color: 'blue' },
    { name: 'blue-5', cardType: 'five', value: 5, color: 'blue' },
    { name: 'blue-6', cardType: 'six', value: 6, color: 'blue' },
    { name: 'blue-7', cardType: 'seven', value: 7, color: 'blue' },
    { name: 'blue-8', cardType: 'eight', value: 8, color: 'blue' },
    { name: 'blue-9', cardType: 'nine', value: 9, color: 'blue' },
    { name: 'blue-1', cardType: 'one', value: 1, color: 'blue' },
    { name: 'blue-2', cardType: 'two', value: 2, color: 'blue' },
    { name: 'blue-3', cardType: 'three', value: 3, color: 'blue' },
    { name: 'blue-4', cardType: 'four', value: 4, color: 'blue' },
    { name: 'blue-5', cardType: 'five', value: 5, color: 'blue' },
    { name: 'blue-6', cardType: 'six', value: 6, color: 'blue' },
    { name: 'blue-7', cardType: 'seven', value: 7, color: 'blue' },
    { name: 'blue-8', cardType: 'eight', value: 8, color: 'blue' },
    { name: 'blue-9', cardType: 'nine', value: 9, color: 'blue' },
    { name: 'green-0', cardType: 'zero', value: 0, color: 'green' },
    { name: 'green-1', cardType: 'one', value: 1, color: 'green' },
    { name: 'green-2', cardType: 'two', value: 2, color: 'green' },
    { name: 'green-3', cardType: 'three', value: 3, color: 'green' },
    { name: 'green-4', cardType: 'four', value: 4, color: 'green' },
    { name: 'green-5', cardType: 'five', value: 5, color: 'green' },
    { name: 'green-6', cardType: 'six', value: 6, color: 'green' },
    { name: 'green-7', cardType: 'seven', value: 7, color: 'green' },
    { name: 'green-8', cardType: 'eight', value: 8, color: 'green' },
    { name: 'green-9', cardType: 'nine', value: 9, color: 'green' },
    { name: 'green-1', cardType: 'one', value: 1, color: 'green' },
    { name: 'green-2', cardType: 'two', value: 2, color: 'green' },
    { name: 'green-3', cardType: 'three', value: 3, color: 'green' },
    { name: 'green-4', cardType: 'four', value: 4, color: 'green' },
    { name: 'green-5', cardType: 'five', value: 5, color: 'green' },
    { name: 'green-6', cardType: 'six', value: 6, color: 'green' },
    { name: 'green-7', cardType: 'seven', value: 7, color: 'green' },
    { name: 'green-8', cardType: 'eight', value: 8, color: 'green' },
    { name: 'green-9', cardType: 'nine', value: 9, color: 'green' },
    { name: 'yellow-0', cardType: 'zero', value: 0, color: 'yellow' },
    { name: 'yellow-1', cardType: 'one', value: 1, color: 'yellow' },
    { name: 'yellow-2', cardType: 'two', value: 2, color: 'yellow' },
    { name: 'yellow-3', cardType: 'three', value: 3, color: 'yellow' },
    { name: 'yellow-4', cardType: 'four', value: 4, color: 'yellow' },
    { name: 'yellow-5', cardType: 'five', value: 5, color: 'yellow' },
    { name: 'yellow-6', cardType: 'six', value: 6, color: 'yellow' },
    { name: 'yellow-7', cardType: 'seven', value: 7, color: 'yellow' },
    { name: 'yellow-8', cardType: 'eight', value: 8, color: 'yellow' },
    { name: 'yellow-9', cardType: 'nine', value: 9, color: 'yellow' },
    { name: 'yellow-1', cardType: 'one', value: 1, color: 'yellow' },
    { name: 'yellow-2', cardType: 'two', value: 2, color: 'yellow' },
    { name: 'yellow-3', cardType: 'three', value: 3, color: 'yellow' },
    { name: 'yellow-4', cardType: 'four', value: 4, color: 'yellow' },
    { name: 'yellow-5', cardType: 'five', value: 5, color: 'yellow' },
    { name: 'yellow-6', cardType: 'six', value: 6, color: 'yellow' },
    { name: 'yellow-7', cardType: 'seven', value: 7, color: 'yellow' },
    { name: 'yellow-8', cardType: 'eight', value: 8, color: 'yellow' },
    { name: 'yellow-9', cardType: 'nine', value: 9, color: 'yellow' },
    { name: 'red-draw-2', cardType: 'draw-2', value: 20, color: 'red' },
    { name: 'red-draw-2', cardType: 'draw-2', value: 20, color: 'red' },
    { name: 'blue-draw-2', cardType: 'draw-2', value: 20, color: 'blue' },
    { name: 'blue-draw-2', cardType: 'draw-2', value: 20, color: 'blue' },
    { name: 'green-draw-2', cardType: 'draw-2', value: 20, color: 'green' },
    { name: 'green-draw-2', cardType: 'draw-2', value: 20, color: 'green' },
    { name: 'yellow-draw-2', cardType: 'draw-2', value: 20, color: 'yellow' },
    { name: 'yellow-draw-2', cardType: 'draw-2', value: 20, color: 'yellow' },
    { name: 'red-reverse', cardType: 'reverse', value: 20, color: 'red' },
    { name: 'red-reverse', cardType: 'reverse', value: 20, color: 'red' },
    { name: 'blue-reverse', cardType: 'reverse', value: 20, color: 'blue' },
    { name: 'blue-reverse', cardType: 'reverse', value: 20, color: 'blue' },
    { name: 'green-reverse', cardType: 'reverse', value: 20, color: 'green' },
    { name: 'green-reverse', cardType: 'reverse', value: 20, color: 'green' },
    { name: 'yellow-reverse', cardType: 'reverse', value: 20, color: 'yellow' },
    { name: 'yellow-reverse', cardType: 'reverse', value: 20, color: 'yellow' },
    { name: 'red-skip', cardType: 'skip', value: 20, color: 'red' },
    { name: 'red-skip', cardType: 'skip', value: 20, color: 'red' },
    { name: 'blue-skip', cardType: 'skip', value: 20, color: 'blue' },
    { name: 'blue-skip', cardType: 'skip', value: 20, color: 'blue' },
    { name: 'green-skip', cardType: 'skip', value: 20, color: 'green' },
    { name: 'green-skip', cardType: 'skip', value: 20, color: 'green' },
    { name: 'yellow-skip', cardType: 'skip', value: 20, color: 'yellow' },
    { name: 'yellow-skip', cardType: 'skip', value: 20, color: 'yellow' },
    // Then we will add these ones. Remind adding a coma at the previous line
    { name: 'wild', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'draw-4-wild', cardType: 'draw-4-wild', value: 50, color: 'multi' },
    { name: 'draw-4-wild', cardType: 'draw-4-wild', value: 50, color: 'multi' },
    { name: 'draw-4-wild', cardType: 'draw-4-wild', value: 50, color: 'multi' },
    { name: 'draw-4-wild', cardType: 'draw-4-wild', value: 50, color: 'multi' }
  ];

document.getElementById("start").onclick = function (event) {
    let game = new UnoGame(cards)
    let board = new UnoCanvas(game)
    game.shuffleCards()
    console.log(game.cards)
    
    let player1 = new Player()
    player1.playerNumber = 1

    let player2 = new Player()
    player2.playerNumber = 2

    game.dealCards(player1)
    game.dealCards(player2)
    
    console.log("Player 1 hand")
    console.log(player1.hand)
    
    let actualCard = game.cards.splice(game.cards.length-1,1)

    board.update(player1,player2,actualCard)
    
    console.log("Current card")
    console.log(actualCard)
    
    playersOptions = player1.getPlayableCards(actualCard)
    playersOptions2 = player2.getPlayableCards(actualCard)
    
    console.log("Player 1 options")
    console.log(playersOptions)
    
    console.log("Player 2 options")
    console.log(playersOptions2)

    document.getElementById("next-move").onclick = function (event) {
        board.update(player1,player2,actualCard)
        console.log("GAME CARDS")
        console.log(game.cards)
        console.log("CURRENT DECK")
        console.log(actualCard)

        player1.randomMove(actualCard,game.cards)
        console.log("Player 1 hand")
        console.log(player1.hand)
        board.update(player1,player2,actualCard)
    
        player2.randomMove(actualCard,game.cards)
        console.log("Player 2 hand")
        console.log(player2.hand)
        board.update(player1,player2,actualCard)
    
        console.log("Current Card : ")
        console.log(actualCard)

        game.checkCurrentCardDeck(actualCard)

        console.log(game.checkFinished(player1,player2))
    }
    
    // player1.randomMove(actualCard,playersOptions,game.cards)
    
    // player1.randomMove(actualCard,game.cards)
    // console.log("Player 1 hand")
    // console.log(player1.hand)
    
    // player2.randomMove(actualCard,game.cards)
    // console.log("Player 2 hand")
    // console.log(player2.hand)
    
    // console.log("Current Card : ")
    // console.log(actualCard)
}





// Computer playing
// if (playersChoice.length > 0) {
//     currentCard = playersChoice[Math.floor(Math.random() * playersChoice.length)];
//     console.log(`Current card : `)
//     console.log(currentCard)
//     console.log('Players cards')
//     console.log(player1.hand)
// } else {
//     player1.hand.push(...game.cards.splice(game.cards.length-1,1))
//     console.log('Players cards')
//     console.log(player1.hand)
// }


// Backup codelines 
// let playerCards = game.cards.splice(game.cards.length-7, 7); //Give player his first hand

// player1.hand.push(...game.cards.splice(game.cards.length-7,  7)); ---> // Pick cards

// console.log("Possibilities : " + possibilities)