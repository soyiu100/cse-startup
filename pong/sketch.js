var lenPow, fspedPow, sspedPow, ptPow;
var ballX, ballY;
//change in ball direction
var bdx, bdy;
var barY;
var barLength;
var frames;
var gameOn;
var defaultSide;
var misses;
var hits;
var song;
var rand;
var powerOn;


function preload() {
  song = loadSound("files/meme.mp3");
  lenPow = createImg("files/long.jpg");
  sspedPow = createImg("files/slow.jpg");
  fspedPow = createImg("files/fast.jpg");
  ptPow = createImg("files/point.jpg");
  lenPow.hide();
  sspedPow.hide();
  fspedPow.hide();
  ptPow.hide();
  
}
function setup() {
  createCanvas(810, 540);
  frames = 0;
  barLength = 120;
  hits = 0;
  misses = 0;
  bdy = 0;
  barY = height/2 - barLength;
  ballY = height/2 - barLength/2;
  ballX = 30;
  bdx = 5;
  rand = random(0, 5);
  gameOn = false;
  defaultSide = true;
  powerOn = false;
  if (song.isPlaying()) {
    song.stop();
  }
}

function draw() {
  if (gameOn == true) {
    frames++;  
    moveBar();
    collisDetect();
  }
  moveBall();
  // powerCheck();
  background(255);
  fill(0);
  ellipse(ballX, ballY, 20, 20); 
  rect(20, barY, 15, barLength);
  rect(width - 30, barY, 15, barLength);
  fill(80);
  textSize(40);
  text("Misses: " + misses, 10, height - 50);
  fill(80);
  textSize(40);
  text("Hits: " + hits,10,50);

}

// function powerCheck() {
//   if (frames >= 100) {
//     if (rand <= 1) {
//       lenPow.position(random(width), random(height));
//       lenPow.show();
//       powerOn = true;
//     } else if (rand <= 2) {
//       sspedPow.position(random(width), random(height));
//       sspedPow.show();
//       powerOn = true;
//     } else if (rand <= 3) {
//       fspedPow.position(random(width), random(height));
//       fspedPow.show();
//       powerOn = true;
//     } else {
//       ptPow.position(random(width), random(height));
//       ptPow.show();
//       powerOn = true;
//     }
//   }
//   if (frames >= 200 && powerOn == false) {
//     frames = 0;
//     powerOn = false;
//     rand = random(0, 5);
//   }
//   if (frames >= 1000 && powerOn == true) {
//     frames = 0;
//     powerOn = false;
//     rand = random(0, 5);
//   }
// }

function moveBar() {
  if(keyIsDown(UP_ARROW) && barY >= 20)
    barY -= 10;
  if(keyIsDown(DOWN_ARROW) && barY <= height - (barLength + 20)) 
    barY += 10;
}

function moveBall() {
  if (gameOn == true && defaultSide == true) {
    ballX += bdx;
    ballY += bdy;
  }
  if (gameOn == true && defaultSide == false) {
    ballX -= bdx;
    ballY += bdy;

  }
  if(keyCode == ENTER) {
    gameOn = true;
  }
}

function collisDetect() {
  if (ballX >= width - 10 || ballX <= 10) {
    misses++;
    bdx++;
    defaultSide = !defaultSide;
    song.play();
  }
  if (ballY >= height || ballY <= 0) {
    bdy = -bdy;
  }
  if (defaultSide == true) {
    if (ballX >= width - 50 && (ballY >= barY && ballY <= barY + barLength)) {     
      defaultSide = false;
      bdy = random(0, 10);
      hits++;
    }
  } else {
    if (ballX <= 50 && (ballY >= barY && ballY <= barY + barLength)) {
      defaultSide = true;
      bdy = random(0, 10);
      hits++;
    }

  }

}