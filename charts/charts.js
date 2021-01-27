import { mungeSeen, mungeCaught, mungeNames } from './mungeUtils.js';
import { getPokemonStats } from '../pokeArrayUtils.js';
import { renderImages } from './renderImages.js';

const caughtSoFar = document.getElementById('caught-so-far'); 
const goBackButton = document.getElementById('back-button');
const imageDiv = document.getElementById('pokemon-container');

const currentStats = getPokemonStats();
const seenArray = mungeSeen(currentStats);
const caughtArray = mungeCaught(currentStats);
const nameArray = mungeNames(currentStats);

caughtSoFar.textContent = 10;

goBackButton.addEventListener('click', () => {
    window.location.href = '../';
});

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, { // eslint-disable-line
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: nameArray,
        datasets: [{
            label: 'Seen',
            backgroundColor: 'rgba(255, 99, 132, .5)',
            borderColor: 'rgb(255, 99, 132)',
            data: seenArray
        },
        {
            label: 'Caught',
            backgroundColor: 'rgba(255, 0, 0, .5)',
            borderColor: 'rgb(255, 0, 0)',
            data: caughtArray
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    } });
    
renderImages(imageDiv);
