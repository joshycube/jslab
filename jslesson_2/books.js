var library_1 = require("./library");
var genre = ["science-fiction", "fiction", "drama", "fantasy"];
function listByGenre(myGenre) {
    var subject = library_1["default"].books;
    var booksResult = [];
    for (var i = 0; i <= subject.length - 1; i++) {
        var actualGenre = subject[i].genre;
        console.log("kulso ciklus futok:", i);
        for (var c = 0; c <= actualGenre.length - 1; c++) {
            console.log(" - belso ciklus futok:", c);
            var genreIndex = actualGenre[c];
            var genreName = genre[genreIndex];
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
var myBooks = listByGenre("science-fiction");
console.log(myBooks);
