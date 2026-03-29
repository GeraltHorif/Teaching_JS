const suits = [
    { name: 'spade', color: 'black' },
    { name: 'diamond', color: 'red' },
    { name: 'heart', color: 'red' },
    { name: 'clubs', color: 'black' }
];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

let deck = [];

for (const suit of suits) {
    for (const value of values) {
        deck.push({
            cardSuit: suit.name,
            value: value,
            color: suit.color
        });
    }
}

console.log('Усього карт у колоді:', deck.length);
