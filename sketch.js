function draw() {
	background("red");
	strokeWeight(2);
	fill("black");

	
	var x = mouseX;
	var y = mouseY;
	line(x, y, 0, 0);


	ellipse(x, y,50);
}
