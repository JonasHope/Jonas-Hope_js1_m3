//QUESTION 1

const getRemainder = (a,b) => a % b; 


//QUESTION 2

const API = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=35494aed45734f19b11875b5a10fa5dd"

const games = document.querySelector(".gamesContainer");

async function getGameInfo() {

    try {
    const response = await fetch(API);
    const results = await response.json();
    const data = results.results;
    console.log(results.results);

    for (let i = 0; i < data.length; i++) {
        if (i === 8) {
            break;
            }
        }
    }
    catch(error){
        console.log("error occured", error);
    }
};

getGameInfo();