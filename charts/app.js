import { mungeSeen, mungeCaught, mungeNames, mungePics } from '../charts/mungeUtils.js';
import { getPokemonStats } from '../pokeArrayUtils.js';

const caughtSoFar = document.getElementById('caught-so-far'); 
const currentStats = getPokemonStats();

const seenArray = mungeSeen(currentStats);
const caughtArray = mungeCaught(currentStats);
const nameArray = mungeNames(currentStats);
const picArray = mungePics(currentStats);

caughtSoFar.textContent = 10;
console.log(picArray);

var ctx = document.getElementById('myChart').getContext('2d');
var stackedBar = new Chart(ctx, { // eslint-ignore
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: [nameArray],
        datasets: [
            {
                stack: 'seen',
                label: 'Seen',
                backgroundColor: 'lightslategray',
                data: [seenArray]
            },
            {
                stack: 'seen',
                label: 'Caught',
                backgroundColor: 'red',
                data: [caughtArray]
            }

        ]
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
    }
});