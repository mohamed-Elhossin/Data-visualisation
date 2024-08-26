
 
const apiData4 = {
    cases: Array.from({ length: 180 }, () => Math.floor(Math.random() * 7000) + 200),
    Mdays: Array.from({ length: 180 }, (_, i) => `Day ${i + 1}`)
};

const cases = apiData4.cases;
const Mdays = apiData4.Mdays;

anychart.onDocumentReady(function () {
 
    const data = [];
    for (let i = 0; i < Mdays.length; i++) {
        data.push([Mdays[i], cases[i]]);
    }

  
    const chart = anychart.line();

 
    const series = chart.line(data);
    series.name('Daily COVID-19 Cases');
    series.stroke('2 #568973');  

    
    chart.title('COVID-19 Daily Cases Over 180 Days');

 
    chart.container('container');

     
    chart.draw();
});