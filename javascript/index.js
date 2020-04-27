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
    { name: 'wild', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'wild', cardType: 'wild', value: 50, color: 'multi' },
    { name: 'draw-4-wild', cardType: 'draw-4-wild', value: 50, color: 'multi' },
    { name: 'draw-4-wild', cardType: 'draw-4-wild', value: 50, color: 'multi' },
    { name: 'draw-4-wild', cardType: 'draw-4-wild', value: 50, color: 'multi' },
    { name: 'draw-4-wild', cardType: 'draw-4-wild', value: 50, color: 'multi' }
  ];

let game = new UnoGame(cards)

game.shuffleCards()
let playerCards = game.cards.splice(game.cards.length-7, 7);

//   playerCards.push(...game.cards.splice(game.cards.length-7,  7)); ---> PICK CARDS

let currentCard = game.cards.splice(game.cards.length-1,1)

console.log(currentCard[0])

let possibilities = 0
let playersChoice = []

for (i=0;i<playerCards.length;i++) {
    console.log(playerCards[i])
    playerCards[i].cardType
    if (playerCards[i].cardType === currentCard[0].cardType || 
        playerCards[i].color === currentCard[0].color || 
        playerCards[i].cardType === 'wild' ||
        playerCards[i].cardType === 'draw-4-wild') {
        possibilities ++
        playersChoice.push(playerCards[i])
    }
}

if (playersChoice.length > 0) {
    currentCard = playersChoice[Math.floor(Math.random() * playersChoice.length)];
    console.log(`Current card : `)
    console.log(currentCard)
    console.log('Players cards')
    console.log(playerCards)
} else {
    playerCards.push(...game.cards.splice(game.cards.length-1,1))
    console.log('Players cards')
    console.log(playerCards)
}

console.log("Possibilities : " + possibilities)