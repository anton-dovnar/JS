class Movie {
    constructor(title, director, genre, releaseYear, rating) {
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rating = rating;
    }

    getOverview() {
        console.log(`
            ${this.title}, a ${this.genre} film directed
            by ${this.director} was released in ${this.releaseYear}.
            It received a rating of ${this.rating}.
        `);
    }
}


const GreenBook = new Movie(
    'Green Book',
    'Peter Farrelly',
    'Biography, Comedy, Drama, Music',
    2018,
    82,
);

console.log(GreenBook.getOverview());
