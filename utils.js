import pokemonArray from './data.js';
import { getPokemonStats, incrementCaught, incrementSeen } from './pokeArrayUtils.js';

const gameContainer = document.getElementById('game-container');
const caughtSoFar = document.getElementById('caught-so-far');
const resultsString = document.getElementById('results-div');

let round = 0;
getPokemonStats();

export function findById(array, id) {
    for (const item of array) {
        if (item.pokemon === id) {
            return item;
        }
    }}
    
function getRandomPokemon() {
        // generate random number between 0 and 1
        // multiply by the number of items in passed-in array
        // round down the nearest whole number
    const randomPokemonIndex = Math.floor(Math.random() * pokemonArray.length);
        // find the pokemon at the array random array index
    const randomPokemon = pokemonArray[randomPokemonIndex];
    return randomPokemon;
}
    
export function getThreePokemon() {
        // get three random pokemon
    let pokemonOne = getRandomPokemon();
    let pokemonTwo = getRandomPokemon();
    let pokemonThree = getRandomPokemon();
        
    caughtSoFar.textContent = round;
    
    // make sure that they are not the same
    // while these conditions are true, try again
    while (pokemonOne.pokemon === pokemonTwo.pokemon || pokemonOne.pokemon === pokemonThree.pokemon || pokemonThree.pokemon === pokemonTwo.pokemon) {
        pokemonOne = getRandomPokemon();
        pokemonTwo = getRandomPokemon();
        pokemonThree = getRandomPokemon();
    }
    
    // render the pokemon on the screen!
    const img1 = renderPokemon(pokemonOne);
    const img2 = renderPokemon(pokemonTwo);
    const img3 = renderPokemon(pokemonThree);
    
    gameContainer.textContent = '';
    
    gameContainer.append(img1, img2, img3);
    
    incrementSeen(pokemonOne.pokemon);
    incrementSeen(pokemonTwo.pokemon);
    incrementSeen(pokemonThree.pokemon);
}

// function renderResultsTable {
//     const statsArray = getPokemonStats()
//     for (const item of statsArray) {
        
//     }
// }

function renderPokemon(pokemon) {
    // create a new image
    const image = document.createElement('img');

    // set image attributes & add click handler
    image.src = pokemon.url_image;
    image.alt = pokemon.pokemon;
    image.addEventListener('click', () => {
        getThreePokemon();
        incrementCaught(pokemon.pokemon);
        if (round < 9) {
            round++;
            caughtSoFar.textContent = round;
        } else {
            round++;
            caughtSoFar.textContent = round;
            gameContainer.style.display = 'none';
            resultsString.style.display = 'block';
            // resultsString.textContent = ``;
        }
    });
    return image;
}