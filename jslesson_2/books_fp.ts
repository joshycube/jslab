import library from "./resources/library";

const genre = ["science-fiction", "fiction", "drama", "fantasy"];

function listByGenre(myGenre: string) {
  const books = library.books;
  const key = genre.indexOf(myGenre);

  return books.filter((book) =>
    book.genre.some((bookItem) => bookItem === key)
  );
}

const myBooks = listByGenre("fantasy");
console.log(myBooks);
