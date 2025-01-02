const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destruction
// const book = getBook(3);
// const secondBook = getBook(3);
// book;
// const title = book.title;
// const author = book.author;
// author;
// title;

// Destructuring
// const {
//   title,
//   author,
//   pages,
//   publicationDate,
//   genres,
//   hasMovieAdaptation,
//   translations,
// } = book;
// console.log(title, author, pages, publicationDate, genres, hasMovieAdaptation);

// Destructuring with arrays
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];
// console.log(primaryGenre, secondaryGenre);

// const [thirdGenre, forthGenre] = genres;
// console.log(thirdGenre, forthGenre);

// Rest and spread operators
// const [first, ...rest] = genres;
// console.log(first, rest);
// const newGenres = [...genres, "epic fantasy"];
// console.log(newGenres);

// const updatedBook = {
//   ...book,
//   //   adding a new property
//   moviePublicationDate: "2001-12-19",
//   //   overridig an existing property
//   pages: 1210,
// };
// console.log(updatedBook);

// template literals
// const summary = `${title}, with a ${pages}-page long book, was written by ${author} and published in ${
//   publicationDate.split("-")[0]
// }, The book has ${hasMovieAdaptation ? "" : "not"}been adapted as a movie`;
// summary;

// // Ternary operation
// const pageRange = pages > 1000 ? "over a thousand" : "less than a 1000";
// pageRange;
// console.log(`The book has ${pageRange} pages`);

// Arrow Function
// function getYear(str) {
//   return str.split("-")[0];
// }
// const getYear = (str) => str.split("-")[0];
// console.log(getYear(publicationDate));

// // short-circuiting and logical operators
// // the && operator short circuit whenenver the first value is false
// console.log(true && "Some String");
// console.log(false && "Some String");
// console.log(hasMovieAdaptation && "This book has a movie");

// truthy and falsely value
// falsly: 0, "", undefined, null
// console.log(0 && "Some String");

// // the || oprator short circuit when the first value is true
// console.log(true || "Some String");
// console.log(false || "Some string");

// console.log(book.translations.spanish);
// const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
// spanishTranslation;

// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "no data";
// countWrong;

// nullish
// const count = book.reviews.librarything.reviewsCount ?? "no data";
// count;

// optional chaining
// function getTotalReviewCount(book) {
//   const goodread = book.reviews?.goodreads?.reviewsCount;
//   const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
//   return goodread + librarything;
// }
// console.log(getTotalReviewCount(book));

/*
function getTotalReviewCount(book) {
  const goodread = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodread + librarything;
}

// functional array method
const books = getBooks();
books;

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

// map method
const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => {
  return {
    title: book.title,
    author: book.author,
  };
});

const essentData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
essentData;

essentialData;

// filter method
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooks;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

const names = ["adesina", "lind", "Martha", "Christopher", "eve"];

const nameFilter = names.filter((name) => name.includes("d"));
nameFilter;

// filter reduce method
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
pagesAllBooks;

// sort method
const arr = [3, 7, 1, 9, 6];
const sorted = arr.slice().sort((a, b) => a - b);
sorted;
arr;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

// working with immutable arrays
// 1)Add book object to array
const newBook = {
  id: 6,
  title: "Marry Potter and the chamber of Secrets",
  author: "J. K. Rowling",
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2)Delete a book object from an array
const bookAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
bookAfterDelete;

// 3)update a book object in the array
const booksAfterUpdate = bookAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1 } : book
);

booksAfterUpdate;
*/

// asynchronous javascript
// promise
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
// console.log("jonas");

// async await
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);

  return data;
}

const todos = getTodos();
console.log(todos);
