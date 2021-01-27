import { getPokemonStats } from '../pokeArrayUtils.js';
import { findById } from '../utils.js';
import pokemon from '../data.js';

export function renderOnePokeImage(pokemonArray, id) {
    const img = document.createElement('img');
    
    const inventoryItem = findById(pokemonArray, id);
    
    img.classList.add('pokemon');
    img.src = inventoryItem.url_image;
    img.alt = inventoryItem.pokemon;
    
    return img;
}

export function renderImages(imageDiv) {
    const currentStats = getPokemonStats();
    const pokemonArray = pokemon;
    for (const pokemon of currentStats) {
        const statsItem = findById(currentStats, pokemon.pokemon);
        let newImg = renderOnePokeImage(pokemonArray, statsItem.pokemon);
        imageDiv.append(newImg);
    }}