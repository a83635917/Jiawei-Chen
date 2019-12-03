function setup() {
	createCanvas(640, 360);
	textSize(100);
	textFont('Comic Sans MS');
	textAlign(CENTER, CENTER);
	fill('plum');
}
function draw() {
	background(220);

	translate(width/2, height/2);
	var r = frameCount / 1000 * PI;
	shearX(r);

	text('Hello', 0, 0);
}
