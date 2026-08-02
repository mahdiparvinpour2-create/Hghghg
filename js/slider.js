// ===============================
// MovieVerse Slider
// ===============================

const movies = [
    {
        title: "Interstellar",
        year: "2014",
        rating: "9.0",
        image: "assets/images/movie1.jpg"
    },
    {
        title: "Oppenheimer",
        year: "2023",
        rating: "8.5",
        image: "assets/images/movie2.jpg"
    },
    {
        title: "Dune Part Two",
        year: "2024",
        rating: "8.7",
        image: "assets/images/movie3.jpg"
    }
];

let currentMovie = 0;

function showMovie(index){

    const movie = movies[index];

    const title =
    document.querySelector(".slider-title");

    const image =
    document.querySelector(".slider-image");

    const info =
    document.querySelector(".slider-info");


    if(title){
        title.textContent = movie.title;
    }

    if(image){
        image.src = movie.image;
    }

    if(info){
        info.textContent =
        movie.year + " | ⭐ " + movie.rating;
    }

}


// Auto slider

setInterval(()=>{

    currentMovie++;

    if(currentMovie >= movies.length){
        currentMovie = 0;
    }

    showMovie(currentMovie);

},5000);
