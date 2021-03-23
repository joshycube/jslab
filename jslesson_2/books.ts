import library from "./resources/library";

const genre = ["science-fiction", "fiction", "drama", "fantasy"];

function listByGenre(myGenre: string) {
  const subject = library.books;
  const booksResult = [];

  for (let i = 0; i <= subject.length - 1; i++) {
    const actualGenre = subject[i].genre;

    console.log("kulso ciklus futok:", i);

    for (let c = 0; c <= actualGenre.length - 1; c++) {
      console.log(" - belso ciklus futok:", c);
      const genreIndex = actualGenre[c];
      const genreName = genre[genreIndex];

      if (genreName === myGenre) {
        booksResult.push(subject[i].title);
      }
    }
  }

  if (booksResult.length === 0) {
    return ["No results"];
  }

  return booksResult;
}

const myBooks = listByGenre("science-fiction");
console.log(myBooks);
