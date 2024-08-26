 
document.addEventListener('DOMContentLoaded', async () => {
    const ctx = document.getElementById('areaChart').getContext('2d');

    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();

    const countries = data
        .sort((a, b) => b.area - a.area)
        .slice(0, 10)
        .map(country => country.name.common);
    const areas = data
        .sort((a, b) => b.area - a.area)
        .slice(0, 10)
        .map(country => country.area);
    const areaChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: countries,
            datasets: [{
                label: 'Area (sq km)',
                data: areas,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Area (sq km)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Countries'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += context.raw.toLocaleString() + ' sq km';
                            return label;
                        }
                    }
                }
            }
        }
    });
});
