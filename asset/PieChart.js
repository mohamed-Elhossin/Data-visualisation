

 
document.addEventListener('DOMContentLoaded', async () => {
    const ctx = document.getElementById('populationChart').getContext('2d');

    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();

    const countries = data
        .sort((a, b) => b.population - a.population)
        .slice(0, 10)
        .map(country => country.name.common);
    const populations = data
        .sort((a, b) => b.population - a.population)
        .slice(0, 10)
        .map(country => country.population);

    const populationChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: countries,
            datasets: [{
                label: 'Population',
                data: populations,
          
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(199, 199, 199, 0.2)',
                    'rgba(83, 102, 255, 0.2)',
                    'rgba(255, 102, 64, 0.2)',
                    'rgba(192, 75, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(199, 199, 199, 1)',
                    'rgba(83, 102, 255, 1)',
                    'rgba(255, 102, 64, 1)',
                    'rgba(192, 75, 192, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += context.raw.toLocaleString();
                            return label;
                        }
                    }
                }
            }
        }
    });
});