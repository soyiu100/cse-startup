var multiplier = 30;
var pupXPos = 6.75*multiplier; 
var pupYPos = 7.75*multiplier;
var keySwitch = 0;
var mouseSwitch = 0;

function setup() {
  createCanvas(14*multiplier, 17.5*multiplier);
  frameRate(9);
}

function head() {
  //feelers
  stroke(92, 255, 90);
  line(3*multiplier, 2*multiplier, 5*multiplier, 2*multiplier);
  line(8*multiplier, 2*multiplier, 10*multiplier, 2*multiplier);
  line(3*multiplier, 2*multiplier, 3*multiplier, 6*multiplier);
  line(10*multiplier, 2*multiplier, 10*multiplier, 6*multiplier);
  line(5*multiplier, 2*multiplier, 5*multiplier, 3*multiplier);
  line(8*multiplier, 2*multiplier, 8*multiplier, 3*multiplier);
  noStroke();
  //feeler tips
  ellipse(3*multiplier, 6*multiplier, .2*multiplier, .2*multiplier);
  ellipse(10*multiplier, 6*multiplier, .2*multiplier, .2*multiplier);
  //triangle bumps on head
  fill(50, 49, 41);
  triangle(5*multiplier, 3*multiplier, 4*multiplier, 4*multiplier, 6*multiplier, 4*multiplier);
  triangle(8*multiplier, 3*multiplier, 7*multiplier, 4*multiplier, 9*multiplier, 4*multiplier);
  // the rect. bump on head
  fill(94, 94, 94);
  rect(5.5*multiplier, 3*multiplier, 2*multiplier, multiplier);

  //side bumps
  fill(248, 129, 146);
  ellipse(4*multiplier, 8*multiplier, multiplier, 2*multiplier);
  ellipse(9*multiplier, 8*multiplier, multiplier, 2*multiplier);
}

function realHead()  {
  if (keySwitch == 1) {
    fill(248, 129, 146);
  } else if (keySwitch == 0) {
    fill(94, 94, 94);
  }
    rect(4*multiplier, 4*multiplier, 5*multiplier, 7*multiplier);
}

function body() {
  fill(0, 0, 255);
  //body
  rect(4*multiplier, 10*multiplier, 5*multiplier, multiplier);
  triangle(4*multiplier, 10*multiplier, 4*multiplier, 11*multiplier, 3*multiplier, 11*multiplier);
  triangle(9*multiplier, 10*multiplier, 9*multiplier, 11*multiplier, 10*multiplier, 11*multiplier);
  rect(10*multiplier, 10*multiplier, multiplier, multiplier);
  rect(2*multiplier, 10*multiplier, multiplier, multiplier);
  triangle(2*multiplier, 10*multiplier, 2*multiplier, 11*multiplier, 1.5*multiplier, 11*multiplier);
  triangle(11*multiplier, 10*multiplier, 11*multiplier, 11*multiplier, 11.5*multiplier, 11*multiplier);
}

function legs() {
  fill(94, 94, 94);
  //the side legs
  triangle(4*multiplier, 12*multiplier, 4*multiplier, 11*multiplier, 2*multiplier, 12*multiplier);
  triangle(9*multiplier, 12*multiplier, 9*multiplier, 11*multiplier, 11*multiplier, 12*multiplier);
  triangle(2*multiplier, 12*multiplier, 2*multiplier, 15*multiplier, multiplier, 15*multiplier);
  triangle(11*multiplier, 12*multiplier, 11*multiplier, 15*multiplier, 12*multiplier, 15*multiplier);
  
  //front legs
  triangle(7*multiplier, 12*multiplier, 7*multiplier, 11*multiplier, 8*multiplier, 12*multiplier);
  triangle(6*multiplier, 12*multiplier, 6*multiplier, 11*multiplier, 5*multiplier, 12*multiplier);
  triangle(6*multiplier, 12*multiplier, 5*multiplier, 13*multiplier, 5*multiplier, 12*multiplier);
  triangle(7*multiplier, 12*multiplier, 8*multiplier, 13*multiplier, 8*multiplier, 12*multiplier);
  stroke(255);
  line(5*multiplier, 13*multiplier, 5*multiplier, 16*multiplier);
  line(8*multiplier, 13*multiplier, 8*multiplier, 16*multiplier);
  noStroke();
  //side feet
  rect(.1*multiplier, 15*multiplier, 1.9*multiplier, multiplier);
  rect(11*multiplier, 15*multiplier, 1.9*multiplier, multiplier);
  
  //front feet
  rect(7.5*multiplier, 15*multiplier, multiplier, multiplier);
  rect(4.5*multiplier, 15*multiplier, multiplier, multiplier);
}

function eye() {
  if (mouseSwitch == 0) {
    if (pupXPos <= 3 * multiplier || pupYPos <= 4 * multiplier) { 
    pupXPos = 6.75*multiplier;
    pupYPos = 7.75*multiplier;
    }
    if (pupYPos >= 6 * multiplier || pupXPos >= 6 * multiplier) {
      pupXPos = 6.75*multiplier;
      pupYPos = 7.75*multiplier;
    }
    //eye
    for (var i = 255.; i > 0; i--) {
      noStroke();
      var redValIncr = ((255-175.)/255.);
      var greenValIncr = ((255-172.)/255.);
      var blueValIncr = ((0 - 83.)/255.);
      fill(175 + redValIncr*i, 172 + greenValIncr*i, 0 - blueValIncr*i);
      ellipse(6.5*multiplier, 7.5*multiplier, (3*multiplier)*i/255., (3*multiplier)*i/255.);
    }
    var randomizer = random(0,8);
    var moveChan = random(0, 15);
    if (moveChan <= 2) {
      if (randomizer > 7) {
        for (var i = 0; i < 50; i++) {
          pupXPos -= .1;
          pupYPos -= .1;        
        }
      } else if (randomizer > 6) {
        for (var i = 0; i < 50; i++) {
          pupXPos -= .1;
        }
      } else if (randomizer > 5) {
        for (var i = 0; i < 50; i++) {
          pupXPos -= .1;
          pupYPos += .1;
        }
      } else if (randomizer > 4) {
        for (var i = 0; i < 50; i++) {
          pupYPos += .1;
        }
      } else if (randomizer > 3) {
        for (var i = 0; i < 50; i++) {
          pupXPos += .1;
          pupYPos += .1; 
        }
      } else if (randomizer > 2) {
        for (var i = 0; i < 50; i++) {
          pupXPos += .1;
        }
      } else if (randomizer > 1) {
        for (var i = 0; i < 50; i++) {
          pupXPos += .1;
          pupYPos -= .1;      
        }
      } else {
        for (var i = 0; i < 50; i++) {
          pupYPos -= .1;
        }     
      }
    }
    fill(255, 0, 0);
    ellipse(pupXPos, pupYPos, 2*multiplier, 2*multiplier);
    for (var i = 255; i > 0; i--) {
      noStroke();
      fill(255 - i, 255 - i, 255 - i);
      ellipse(pupXPos, pupYPos, i*multiplier/255, i*multiplier/255);
    }
  } else {
    if (keySwitch == 0) {
      fill(80, 80, 80);
      ellipse(6.5*multiplier, 7.5*multiplier, (3*multiplier), (3*multiplier));      
    } else {
      fill(208, 129, 153);
      ellipse(6.5*multiplier, 7.5*multiplier, (3*multiplier), (3*multiplier));        
    }
  }
}

function keyPressed() {
  if (keyCode == ENTER) {
    if (keySwitch == 0) {
      keySwitch = 1;      
    } else {
      keySwitch = 0;
    }
  }
}

function mouseReleased() {
  if (mouseSwitch == 1) {
    mouseSwitch = 0;
  } else {
    mouseSwitch = 1;
  }
}

function moon(x, y, w, h) {
  var rand = random(0, 2);
  if (rand > 1) {
    fill(255);
  } else {
    fill(255, 255, 0);
  }
  arc(x, y, w, h, PI*2, 0, PIE);
}

function hill(x, y, w, h) {
  fill(113, 206, 120);
  arc(x, y, w, h, PI*2, 0, PIE);
}

function cloud(x, y, w, h) {
  fill(255);
  arc(x, y, w, h, PI, 0, PIE);
  arc(x + 50, y, w, h + 20, PI, 0, PIE);
  arc(x + 100, y, w, h - 5, PI, 0, PIE);

}



function draw() {
  background(104, 196, 235);
  moon(2*multiplier, 7*multiplier, 2*multiplier, 2*multiplier);
  hill(5*multiplier, 16*multiplier, 2*multiplier, 10*multiplier);
  hill(2*multiplier, 16*multiplier, 6*multiplier, 10*multiplier);
  hill(10*multiplier, 16*multiplier, 10*multiplier, 10*multiplier);
  hill(10*multiplier, 16*multiplier, 4*multiplier, 10*multiplier);
  moon(6.5*multiplier, 16*multiplier, 10*multiplier, 2*multiplier);
  cloud(7*multiplier, 5*multiplier, 2*multiplier, 2*multiplier);
  cloud(10*multiplier, 3*multiplier, 2*multiplier, 2*multiplier);
  
  push();
  //translate(mouseX - 170, mouseY - 170);
  realHead();
  push();
  head();
  push();
  body();
  push();
  eye();
  push();
  legs();
  push();

}