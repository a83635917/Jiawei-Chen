
var diaml=0;

var slideNumber = 0;
var totalSlides = 3;

var nextBtnX = 700;
var nextBtnY = 500;
var nextBtnSize = 50;

var prevBtnX = 100;
var prevBtnY = 500;
var prevBtnSize = 50;



function setup() {
    createCanvas(800, 600);
}

function draw() {
 
        background("#120106");
        textFont("Arial");
        fill(255);
        textSize(30);
        text("Click the Lights", 450,150);
        
  //christmas tree 
        
        //truck tree	
        fill("#7c501a"); 
        strokeWeight(1);
        noStroke();
	    rect(280, 390, 50, 50);	
       
         //TREE
        fill("#034B1A");
        noStroke();  
	    triangle(315, 200, 150, 400, 480, 400); //third
  	    triangle(315, 150, 180, 330, 450, 330); //second
  	    triangle(315, 100, 220, 250, 410, 250); //first 
     
        
        //lights
        strokeWeight(1);
        noStroke(); 	
        fill ("#43FCFA") //blue
        ellipse(310, 320, diaml,diaml);
        fill("#FF0000") //red
        ellipse(405, 350, diaml,diaml);	
        fill("#FF6F00") // orange
        ellipse(325, 190, diaml,diaml);
        fill("#00FF00") //green
        ellipse(265, 245, diaml,diaml);
        fill("#FC43BE") //pink
        ellipse(235, 360, diaml,diaml);
        fill("#F1C40F")//mustard
        ellipse(365, 260, diaml,diaml);
        fill("#FFFF00") //yellow
        noStroke(); 
           
        push();
        translate(width * 0.8, height * 0.5); 
        star(-323, -200, 10, 20, 5);
        pop();
               
}

   /* drawing buttons */
    
    // next btn
    if (slideNumber < totalSlides - 1) {
        fill(1);
        noStroke();
        ellipse(nextBtnX, nextBtnY, nextBtnSize);
        fill(300);
        textSize(20);
        textAlign(CENTER, CENTER);
        text("Next", nextBtnX, nextBtnY);
    }
    
    
    // prev btn
    if (slideNumber > 0) {
       fill(1);
        noStroke();
        ellipse(prevBtnX, prevBtnY, prevBtnSize);
        fill(300);
        textSize(20);
        textAlign(LEFT, TOP);
        text("Back", prevBtnX - 22, prevBtnY - 10);  
    }
   



function star(x, y, radius1, radius2, npoints) {
        
    var angle = TWO_PI / npoints;
    var halfAngle = angle/2.0; 
        beginShape();
            
    for (var a = 1; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
        vertex(sx, sy);
        sx = x + cos(a+halfAngle) * radius1;
        sy = y + sin(a+halfAngle) * radius1;
        vertex(sx, sy);
    }

  endShape(CLOSE);

}

function mousePressed() {
    
    // next btn
    var d = dist(mouseX, mouseY, nextBtnX, nextBtnY);
    if (d < nextBtnSize/2 && slideNumber < totalSlides - 1) {
        slideNumber++;    
    }
    
    // prev btn
    if (mouseX > prevBtnX &&
       mouseX < prevBtnX + prevBtnY &&
       mouseY > prevBtnY &&
       mouseY < prevBtnY + prevBtnX &&
       slideNumber > 0) {
        slideNumber--;    
    }
    // lights
     if(diaml>25){
                diaml=0;
            }else{
                diaml=diaml+5;
            }

}