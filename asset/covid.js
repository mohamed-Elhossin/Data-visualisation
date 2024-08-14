
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