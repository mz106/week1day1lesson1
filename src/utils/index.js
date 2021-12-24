
const fs = require("fs");

//step3: addMovie

// const addMovie = (title, actor) => {
//     try {
//         const stringyObj = JSON.stringify({title: title, actor: actor});
//         fs.writeFileSync('./storage.json', stringyObj);
//     } catch (error) {
//         console.log(error);
//     }
// };

//step4: addMovie
const addMovie = (movieArr, movieObj) => {
    try {
        const movie = {
            title: movieObj.title,
            actor: movieObj.actor
        };
        movieArr.push(movie);
        const stringyObj = JSON.stringify(movieArr);
        fs.writeFileSync('./storage.json', stringyObj);
    } catch (error) {
        console.log(error);
    }    
}; 

//step6: findMovie

const findMovie = (movieArr, title) => {
    let foundMovie;
    for (let movie of movieArr) {
        if (movie.title === title) {
            foundMovie = movie;
        } 
    }
    if (foundMovie) {
        return foundMovie;
    } else {
        console.log("movie not found", foundMovie)
    }
}; 

module.exports = {
    addMovie,
    findMovie,
};