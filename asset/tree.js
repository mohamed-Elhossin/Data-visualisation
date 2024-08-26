
  // جلب البيانات من API
  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
      // معالجة البيانات لاستخراج عدد السكان لكل قارة
      const continentPopulation = {};
      data.forEach(country => {
        const continent = country.region || 'Unknown';
        const population = country.population || 0;

        if (continentPopulation[continent]) {
          continentPopulation[continent] += population;
        } else {
          continentPopulation[continent] = population;
        }
      });

      // إعداد البيانات للرسم
      const labels = Object.keys(continentPopulation);
      const populations = Object.values(continentPopulation);

      // رسم الرسم البياني الدائري المفرغ باستخدام Chart.js
      const ctx = document.getElementById('doughnutChart').getContext('2d');
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: labels,
          datasets: [{
            label: 'Population by Continent',
            data: populations,
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(201, 203, 207, 0.6)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(201, 203, 207, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            tooltip: {
              callbacks: {
                label: function(context) {
                  const label = context.label || '';
                  const value = context.raw || 0;
                  return `${label}: ${value.toLocaleString()}`;
                }
              }
            }
          }
        }
      });
    })
    .catch(error => console.error('Error fetching data:', error));