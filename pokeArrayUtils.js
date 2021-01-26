import { findById } from './utils.js';

const POKEMON = 'POKEMON';
// const SESSION = 'SESSION';

export function getPokemonStats() {
    // get stats from localStorage
    const initialStatsArray = JSON.stringify([]);
    const currentStatsArray = localStorage.getItem(POKEMON);
    // if no local storage, initialize empty array
    if (!currentStatsArray) {
        localStorage.setItem(POKEMON, initialStatsArray);
    } else {
    // otherwise, return stats as an array
        const parsedStats = JSON.parse(currentStatsArray);
        return parsedStats;
    }
}

export function setPokemonStats(newStats) {
    // takes in new stats as array
    // sets stringified array to localStorage
    localStorage.setItem(POKEMON, JSON.stringify(newStats));
}

export function incrementSeen(id) {
    // takes in id
    // uses getPokemonStats function to retrieve the current stats
    const currentStatsArray = getPokemonStats();

    // checks stats array for an instance of this id
    const pokemonSeen = findById(currentStatsArray, id);
    const newSighting = {
        pokemon: id,
        seen: 1,
        caught: 0,
    };

    // if there is no matching pokemon in the stats array, initialize one
    if (!pokemonSeen) {
        currentStatsArray.push(newSighting);

    // otherwise, increment the seen value of the current pokemon
    } else {
        pokemonSeen.seen++;
    }
    // finally, set the stats to localStorage
    setPokemonStats(currentStatsArray);
}

export function incrementCaught(id) {
    // takes in id
    // uses getPokemonStats function to retrieve the current stats
    const currentStatsArray = getPokemonStats();

    // finds pokemon by id passed in
    const pokemonCaught = findById(currentStatsArray, id);

    // increments caught value
    pokemonCaught.caught++;
    // sets the stats to localStorage
    setPokemonStats(currentStatsArray);
}
