var x = 0;

function setup() {
	// setup
	createCanvas(500, 500);
}

function draw() {
	// loop
	background(0);
	ellipse(200 * cos(x) + 250, 200 * sin(x) + 250, 100, 100);
	x += 0.05;
}