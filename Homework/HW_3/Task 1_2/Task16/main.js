let books = [
    {title: 'The Hobbit', pages: 310, authors: ['J.R.R. Tolkien'], genres: ['Fantasy', 'Adventure']},
    {title: 'Harry Potter and the Philosopher Stone', pages: 223, authors: ['J.K. Rowling'], genres: ['Fantasy', 'Magic', 'Children']},
    {title: 'Clean Code', pages: 464, authors: ['Robert C. Martin'], genres: ['Education', 'Programming']},
    {title: 'Refactoring', pages: 448, authors: ['Martin Fowler', 'Kent Beck'], genres: ['Education', 'Tech']},
    {title: 'Design Patterns', pages: 395, authors: ['Erich Gamma', 'Richard Helm', 'Ralph Johnson', 'John Vlissides'], genres: ['Software Design']},
    {title: 'War and Peace', pages: 1225, authors: ['Leo Tolstoy'], genres: ['Novel', 'History', 'Drama']}
];

let biggestBook = books[0]; // Припускаємо, що перша — найбільша

for (let i = 0; i < books.length; i++) {
    if (books[i].pages > biggestBook.pages) {
        biggestBook = books[i];
    }
}
console.log('Найбільша книжка:', biggestBook);

let maxGenresBook = books[0];

for (const book of books) {
    if (book.genres.length > maxGenresBook.genres.length) {
        maxGenresBook = book;
    }
}
console.log('Найбільше жанрів у:', maxGenresBook.title);

let longestTitleBook = books[0];

for (const book of books) {
    if (book.title.length > longestTitleBook.title.length) {
        longestTitleBook = book;
    }
}
console.log('Найдовша назва у:', longestTitleBook.title);

console.log('Книжки з 2 авторами:');
for (const book of books) {
    if (book.authors.length === 2) {
        console.log(book.title);
    }
}

console.log('Книжки з 1 автором:');
for (const book of books) {
    if (book.authors.length === 1) {
        console.log(book.title);
    }
}
