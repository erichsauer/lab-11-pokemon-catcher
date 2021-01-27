// import functions and grab DOM elements
import { getThreePokemon, resetStuff } from './utils.js';
import { getPokemonStats } from './pokeArrayUtils.js';

const resetButton = document.getElementById('reset-button');
const nerdButton = document.getElementById('nerd-button');

resetStuff();

resetButton.addEventListener('click', () => {
    resetStuff();
});

nerdButton.addEventListener('click', () => {
    window.location.href = './charts/';
});