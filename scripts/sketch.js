var cities = [];
var distance_array = [];

var order          = [];
var totalCities    = 5;
var c_width        = 800;
var c_height       = 600;
var loop_t         = 3; // first 3 cities are optimized


function setup() {
  createCanvas(c_width, c_height);
  var xpoint;
  var ypoint;
  var v;

  for (var i = 0; i < totalCities; i++) {
    xpoint = Math.floor(random() * c_width);
    ypoint = Math.floor(random() * c_height / 2);
    v = createVector(xpoint, ypoint);
    cities[i] = v;
  }

  /* problem cities for this algorithm

  cities[0] = createVector(633, 257);
  cities[1] = createVector(523, 145);
  cities[2] = createVector(101, 73);
  cities[3] = createVector(546, 28);
  cities[4] = createVector(405, 263);
  */

  compute_distance_table();
  initial_route();
}

function draw() {
  var n;
  // Grow route code

  if(loop_t < totalCities) {
     add_city_to_tour(loop_t);
     loop_t = loop_t + 1;
  }

  clear();
  stroke(128);
  strokeWeight(4);

  fill(255);
  beginShape();

  for (var i = 0; i < order.length; i++) {
    n = order[i];
    vertex(cities[n].x, cities[n].y);
    ellipse(cities[n].x, cities[n].y, 16, 16);
  }
  color(255, 0, 0);
  n = order[0];
  vertex(cities[n].x, cities[n].y);

  endShape();

  // draw the starting and ending points
  stroke(0,255,0);
  n = order[0];
  ellipse(cities[n].x, cities[n].y, 16, 16);
  stroke(255,0,0);
  n = order[order.length-1];
  ellipse(cities[n].x, cities[n].y, 16, 16);
}
