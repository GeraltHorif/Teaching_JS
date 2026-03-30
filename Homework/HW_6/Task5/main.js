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

const spadeAce = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log('Піковий туз:', spadeAce);

const allSixes = deck.filter(card => card.value === '6');
console.log('Усі шістки:', allSixes);

const redCards = deck.filter(card => card.color === 'red');
console.log('Червоні карти:', redCards);

const diamonds = deck.filter(card => card.cardSuit === 'diamond');
console.log('Буби:', diamonds);
const heavyClubs = deck.filter(card => {
    return card.cardSuit === 'clubs' &&
        card.value !== '6' &&
        card.value !== '7' &&
        card.value !== '8';
});
console.log('Трефи від 9 і вище:', heavyClubs);

const sortedDeck = deck.reduce((acc, card) => {

    if (card.cardSuit === 'spade') {
        acc.spades.push(card);
    } else if (card.cardSuit === 'diamond') {
        acc.diamonds.push(card);
    } else if (card.cardSuit === 'heart') {
        acc.hearts.push(card);
    } else if (card.cardSuit === 'clubs') {
        acc.clubs.push(card);
    }


    return acc;
}, { spades: [], diamonds: [], hearts: [], clubs: [] });

console.log(sortedDeck);
