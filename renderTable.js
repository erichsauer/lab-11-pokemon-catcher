import { findById } from './utils.js';


export function renderPokeStatsTable(pokemonArray, statsArray, id) {
    const inventoryItem = findById(pokemonArray, id);
    const statsItem = findById(statsArray, id);

    const mainTr = document.createElement('tr');
    const imageTd = document.createElement('td');
    const img = document.createElement('img');
    const nameTd = document.createElement('td');
    const quantitySeenTd = document.createElement('td');
    const quantityCaughtTd = document.createElement('td');
    
    img.src = inventoryItem.url_image;
    img.alt = inventoryItem.pokemon;

    nameTd.textContent = inventoryItem.pokemon;
    quantitySeenTd.textContent = statsItem.seen;
    quantityCaughtTd.textContent = statsItem.caught;

    imageTd.append(img);
    mainTr.append(imageTd, nameTd, quantitySeenTd, quantityCaughtTd);
    return mainTr;
}