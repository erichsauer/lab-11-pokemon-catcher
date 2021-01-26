const caughtSoFar = document.getElementById('caught-so-far');

caughtSoFar.textContent = 10;

var ctx = document.getElementById('myChart').getContext('2d');
var stackedBar = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Pokemon1', 'pok2', 'pok3'],
        datasets: [
            {
                stack: 'seen',
                label: 'Seen',
                backgroundColor: 'lightslategray',
                data: [3, 10, 5]
            },
            {
                stack: 'seen',
                label: 'Caught',
                backgroundColor: 'red',
                data: [0, 5, 5]
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