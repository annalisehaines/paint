function setup() {
  //drawing board
  createCanvas(600, 625);
  background(220);
  textSize(20);
  text('DIRECTIONS:', 10, 450);
  textSize(17);
  text('1. Click on white canvas, hold down, and drag cursor to draw.', 10, 475);
  text('2. Click on color button to change the color of the brush.', 10, 500);
  text('3. To change the size of the brush hold down on one of the letter keys', 10,525)
  text('directed on the right side of the canvas that coordinates with the size',10, 550);
  text('you want.', 10, 575);
  text('4. To clear canvas, hit the clear button beside the color buttons',10, 600);
  text('= u', 475, 235);
  text('= i', 470, 275);
  text('= o', 465, 310);
  text('= p', 465, 335);
  rect(0, 0, 400, 375);
}

function draw() {
  //buttons running on bottom 
  strokeWeight(1)
  fill('red')
  ellipse(25, 400, 30, 30);
  fill('blue');
  ellipse(75, 400, 30, 30);
  fill('green');
  ellipse(125, 400, 30, 30);
  fill('yellow');
  ellipse(175, 400, 30, 30);
  fill(255);
  rect(250, 385, 75, 30);
  fill(0);
  text('CLEAR', 260, 405);

  //clear the screen
  if (mouseX > 250 && mouseX < 325 && mouseY > 385 && mouseY < 415 && mouseIsPressed) {
    fill(255);
    rect(250, 385, 75, 30);
  }

  //line width examples
  strokeWeight(35)
  line(421, 235, 448, 235);
  strokeWeight(23)
  line(418, 272, 448, 272);
  strokeWeight(14)
  line(417, 305, 450, 305);
  strokeWeight(8)
  line(415, 330, 452, 330);
  strokeWeight(1);

  //click buttons to change color of drawing
  if (mouseX > 10 && mouseX < 40 && mouseY < 385 && mouseY > 415 && mouseIsPressed) {
    stroke('red')
  }
  if (mouseX > 60 && mouseX < 90 && mouseY < 385 && mouseY > 415 && mouseIsPressed) {
    stroke('blue')
  }
  if (mouseX > 110 && mouseX < 140 && mouseY < 385 && mouseY > 415 && mouseIsPressed) {
    stroke('green')
  }
  if (mouseX > 160 && mouseX < 190 && mouseY < 385 && mouseY > 415 && mouseIsPressed) {
    stroke('yellow')
  }

  //press keys to change the width of brush
  if (keyIsPressed) {
    if (key == 'u') {
      strokeWeight(35);
    } else if (key == 'i') {
      strokeWeight(23);
    } else if (key == "o") {
      strokeWeight(14);
    } else if (key == 'p') {
      strokeWeight(8);
    }
  }

  //drawing
  if (mouseX < 400 && mouseX > 0 && mouseY < 375 && mouseY > 0 && mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}