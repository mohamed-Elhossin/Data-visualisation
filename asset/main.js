let nextChartsLinks = document.querySelectorAll(".nextChartsLinks");
let charts = document.querySelectorAll(".charts");
let menu_item = document.querySelectorAll("#visuals-menu .menu-item");

function updateChartsVisibility() {

    let allNoSelected = Array.from(nextChartsLinks).every(link => {
        return !link.classList.contains('selected');
    });
    console.log(allNoSelected);

    if (allNoSelected) {
        charts.forEach(chart => {
            chart.classList.add('none');
        });
    }
}

for (let index = 0; index < nextChartsLinks.length; index++) {
    nextChartsLinks[index].addEventListener("click", function (e) {

        // إزالة كلاس 'none' من العنصر المقابل له في charts
        charts[index].classList.remove("none");

        // إزالة كلاس 'selected' من جميع العناصر في menu_item
        document.querySelectorAll('.menu-item.selected').forEach(item => {
            item.classList.remove('selected');
        });
        document.querySelector('#defaultCanvas0').classList.add('none'); 

        // إزالة كلاس 'selected' من جميع العناصر في nextChartsLinks
        for (let i = 0; i < nextChartsLinks.length; i++) {
            nextChartsLinks[i].classList.remove("selected");
        }

        // إضافة كلاس 'none' إلى جميع العناصر الأخرى في charts
        for (let i = 0; i < charts.length; i++) {
            if (i !== index) {
                charts[i].classList.add("none");
            }
        }
        // إضافة حدث click لكل عنصر في menu_item

        // إضافة كلاس 'selected' إلى العنصر الذي تم النقر عليه
        nextChartsLinks[index].classList.add("selected");

        // تحديث حالة الرؤية للعناصر في charts بناءً على الكلاسات 'selected' الحالية
        updateChartsVisibility();
    });
}




document.addEventListener("click", function (e) {
    if (e.target.classList.contains("menu-item") && e.target.parentElement.id == 'visuals-menu') {
        updateChartsVisibility();
        document.querySelector('#defaultCanvas0').classList.remove('none'); 

    }
})

// استدعاء أولي للتأكد من تحديث حالة الرؤية للعناصر في charts
updateChartsVisibility();



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
            borderColor: 'rgba(0, 0, 0, 1)',
            borderWidth: 1,
            fill: true
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

// +++++++++++++
// Mock API Data for Daily Temperature over 4 Months
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
            borderColor: 'rgba(55, 99, 132, 1)',
            borderWidth: 0.2,
            fill: true
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

// Mock API Data for COVID-19 Cases over 180 Days
const apiData4 = {
    cases: Array.from({ length: 180 }, () => Math.floor(Math.random() * 7000) + 200),
    Mdays: Array.from({ length: 180 }, (_, i) => `Day ${i + 1}`)
};

const cases = apiData4.cases;
const Mdays = apiData4.Mdays;

anychart.onDocumentReady(function () {
    // create data set on our data
    const data = [];
    for (let i = 0; i < Mdays.length; i++) {
        data.push([Mdays[i], cases[i]]);
    }

    // create a chart
    const chart = anychart.line();

    // create a line series and set the data
    const series = chart.line(data);
    series.name('Daily COVID-19 Cases');
    series.stroke('2 #568973'); // line color and thickness

    // set the chart title
    chart.title('COVID-19 Daily Cases Over 180 Days');

    // set the container id
    chart.container('container');

    // initiate drawing the chart
    chart.draw();
});



// Pie Chart
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