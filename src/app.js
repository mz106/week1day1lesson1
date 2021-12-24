
const fs = require('fs');
const { addMovie, findMovie } = require("./utils/index");


//step 1: write app to create .txt. file to show local storage. Explain that .txt file is useless 
// const app = () => {
//     if (process.argv[2] === 'title' && process.argv[4] === 'actor') {
//         fs.writeFileSync('storage.txt', `title: ${process.argv[3]}, actor: ${process.argv[5]}`);
//     }
// };

//step 2: write app using .json. explain that json data is useful. 
// const app = () => {
//     if (process.argv[2] === 'title' && process.argv[4] === 'actor') {
//         const stringyObj = JSON.stringify({title: process.argv[3], actor: process.argv[5]});
//         fs.writeFileSync('./storage.json', stringyObj);
//     }
// };

//step 3: seperate out the movie adding process in to utils/index.js (addMovie)
//explain that data will be one entry and will overwrite. ask about different datatypes to solve this
// - array
// const app = () => {
//     if (process.argv[2] === 'add') {
//         addMovie(process.argv[3], process.argv[4]);
//     }
// };


//step 4: add and array and corresponding addMovie in utils/index.js
const app = () => {
    let movieArr;
    try {
        movieArr = JSON.parse(fs.readFileSync('./storage.json'));
        
    } catch (error) {
        movieArr = [];
    }    
    //Step 5: add listMovies condition/listMovies
    if (process.argv[2] === 'add') {
        addMovie(movieArr, {title: process.argv[3], actor: process.argv[4]});
    } else if (process.argv[2] === 'list') {
        console.log(movieArr);
    //step 6: find one movie
    } else if (process.argv[2] === 'findMovie') {
        console.log(findMovie(movieArr, process.argv[3]));
    //step 7: updatemovie
    } else if (process.argv[2] === 'updateTitle') {
        updateMovie(movieArr, process.argv[3], process.argv[4]);
    }
};

app();