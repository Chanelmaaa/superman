
var centerX = 0;
var centerY = 0;

function setup() {
  createCanvas(1024, 768);
  centerX = width / 2;
  centerY = height / 2;
}

function draw() {
  background(30,66,155);
  
  push();
  translate(mouseX-centerX, mouseY-centerY);
  scale(1)
  fill(255)
  strokeWeight(1);

  //face 
  strokeWeight(10);
  stroke(0);
  fill(255);
  ellipse(centerX,centerY,200,200);
//eyes  
fill(0);
ellipse(centerX-50,centerY-25,30,30);
ellipse(centerX+50,centerY-25,30,30);
//mouth
noStroke();
fill(0);
rect(centerX-25,centerY+40,50,30);
//dress
beginShape();

fill(210,0,0);
vertex(centerX-25,centerY+105);
vertex(centerX-100,centerY+200);
vertex(centerX-225,centerY+400);
vertex(centerX+225,centerY+400);
vertex(centerX+100,centerY+200);
vertex(centerX+25,centerY+105);
endShape();
}