
 
const apiData2 = {
    temperature: 49, 
    humidity: 20    
};

const temp = apiData2.temperature; 
const humidity = apiData2.humidity; 

const ctx2 = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Temperature', 'Humidity'],
        datasets: [{
            label: 'Weather Data',
            data: [temp, humidity],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});