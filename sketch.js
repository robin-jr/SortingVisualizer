var algorithm = "QuickSort";
var speed = 50;
var size_of = 500;

let values = [];

var w = Math.floor(3000 / size_of);

function setup() {
	document.getElementById("main-header").innerHTML = algorithm;
	createCanvas(windowWidth - 190, 500);
	begin();
	frameRate(60);
}
function begin() {
	values = new Array(Math.floor(width / w));
	console.log(w);
	for (let i = 0; i < values.length; i++) {
		values[i] = Math.floor(random(height));
	}
}

function draw() {
	background(0);

	for (let i = 0; i < values.length; i++) {
		stroke(0);
		fill(255);

		rect(i * w, height - values[i], w, values[i]);
	}
}
