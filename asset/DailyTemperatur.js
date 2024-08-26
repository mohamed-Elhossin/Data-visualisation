

const apiData3 = {
    temperatures: Array.from({ length: 120 }, () => Math.floor(Math.random() * 35) + 15), // Temperatures between 15 and 50
    days: Array.from({ length:120 }, (_, i) => `Day ${i + 1}`)
};

const temperatures = apiData3.temperatures;
const days = apiData3.days;

const ctx3 = document.getElementById('number3').getContext('2d');
const number3 = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: days,
        datasets: [{
            label: 'Daily Temperature',
            data: temperatures,
            borderColor: '#f0f',
            borderWidth: 1,
            fill: false
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});