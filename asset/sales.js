
// API About sales line charts
const apiData = {
    sales: [10, 65, 20, 20, 30, 35, 15,80,60,46,32,47],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};

const sales = apiData.sales;
const months = apiData.months;

const ctx = document.getElementById('FirstChart').getContext('2d');
const FirstChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: months,
        datasets: [{
            label: 'Monthly Sales',
            data: sales,
            borderColor: '#f00',
            borderWidth: 1,
            fill: false
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
