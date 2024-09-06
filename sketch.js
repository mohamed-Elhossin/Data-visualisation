
// Global variable to store the gallery object. The gallery object is
// a container for all the visualisations.


let chartweather = require('./asset/weather');
let covid = require('./asset/covid');
let DailyTemperatur = require('./asset/DailyTemperatur');
// let PieChart = require('./asset/PieChart');
// let sales = require('./asset/sales');
let tree = require('./asset/tree');
let weather = require('./asset/weather');


var gallery;

function setup() {
  // Create a canvas to fill the content div from index.html.
  canvasContainer = select('#app');
  var c = createCanvas(1024, 576);
  c.parent('app');

  // Create a new gallery object.
  gallery = new Gallery();

  // Add the visualisation objects here.
  gallery.addVisual(new TechDiversityRace());
  gallery.addVisual(new TechDiversityGender());
  gallery.addVisual(new PayGapByJob2017());
  gallery.addVisual(new PayGapTimeSeries());
  gallery.addVisual(new ClimateChange());
}
gallery.addVisual(new chartweather());
gallery.addVisual(new covid());
gallery.addVisual(new DailyTemperatur());
gallery.addVisual(new PieChart());
gallery.addVisual( new sales());
gallery.addVisual(new tree());
gallery.addVisual(new weather());


function draw() {
  background(255);
  if (gallery.selectedVisual != null) {
    gallery.selectedVisual.draw();
  }
}
