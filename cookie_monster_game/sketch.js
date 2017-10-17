var monster_img;
var cookie_img;
var cake_img;
var pie_img;
var star_img;
var cookie_speed;
var cake_speed;
var pie_speed;
var points;
var monster_x, monster_y;
var cookie_x, cookie_y;
var pie_x, pie_y;
var cake_x, cake_y;
var star_x, star_y;
var misses;
var star;
var song;
var t = 0, td = 0, st = 0;

function preload() {
  monster_img = loadImage("assets/cookie_monster.png");
  cookie_img = loadImage("assets/cookie.png");
  cake_img = loadImage("assets/cake.png");
  pie_img = loadImage("assets/pie.png");
  star_img = loadImage("assets/star.png");
  song = loadSound("assets/star.mp3");
}

function setup() {
  createCanvas(720, 400);
    monster_x = 150
    monster_y = height-150;
    cookie_x = 725;
    cookie_y = -5000;
    cookie_y = suitableSpot();
    pie_x = 775;
    pie_y = -5000;
    pie_y = suitableSpot();
    cake_x = 825;
    cake_y = -5000;
    cake_y = suitableSpot();
    // star_x = width + 50;
    // star_y =  0;
    star_x = -5000;
    star_y = -5000;
    points = 0;
    misses = 0;
    star = false;
  cookie_speed = 4;
  cake_speed = 5;
  pie_speed = 6;
  button = createButton('Restart');
  button.position(width, height);
  button.mousePressed(function() {
    if(star)
      song.stop();
    monster_x = 150
    monster_y = height-150;
    cookie_x = 725;
    cookie_y = -5000;
    cookie_y = suitableSpot();
    pie_x = 775;
    pie_y = -5000;
    pie_y = suitableSpot();
    cake_x = 825;
    cake_y = -5000;
    cake_y = suitableSpot();
    star_x = -5000;
    star_y = -5000;
    td = 0;
    st = 0;
    monster_speed = 2;
    points = 0;
    misses = 0;
    cookie_speed = 4;
    star = false;
    // song.stop();
  });  
}

function draw() {
  t++;
  td++;
  background(200);
  if (misses < 3) {

    displayPoints();
    displayMisses();
    
    if(star) {
      colorMode(HSB);
      tint((t * 10) % 256, 100, 100);
    }
    
    image(monster_img, monster_x, monster_y);
    
    colorMode(RGB);
    noTint();
    image(cookie_img, cookie_x, cookie_y);
    image(cake_img, cake_x, cake_y);
    image(pie_img, pie_x, pie_y);
    image(star_img, star_x, star_y);
    
    moveStar();
    moveCookie();
    moveMonster();
    movePie();
    moveCake();
    checkForChomp();
  } else {
    // if(star)
    //   song.stop();
    fill(255, 0, 0);
    textSize(100);
    text("GAME OVER", 0, height/2);
    fill(255, 0, 0);
    textSize(70);
    text("Total Points: " + points, 0, 3*height/4);
  }
}

// function checkMisses() {
//   if (misses > 2) {
    
//   }
// }

function displayPoints() {
  fill(160);
  textSize(150);
  text(points,10,370);
}

function displayMisses() {
  fill(160, 0, 0);
  textSize(25);
  text("misses: " + misses,width - 110,25);
}

function movePie() {
  if(pie_x < 0) {
    pie_x = 725;
    pie_y = -5000;
    pie_y = suitableSpot();
    // misses++;
  }
  else 
    pie_x -= pie_speed;
}

function moveStar() {
  if(!star) {
    star_x -= 10;
    star_y = (350/2) * sin(t * .1) + 350/ 2;
  }
  if(td > 300  && star_x < 0 && !star) {
    star_x = width + 50;
    td = 0;
  }
  print(td);
  if(star ) {
    st++;
    if(st > 600) {
      star = false;
      td = 0;
      monster_speed = 2;
      song.stop();
    }
  }
}

function moveCake() {
  if(cake_x < 0) {
    cake_x = 725;
    cake_y = -5000;
    cake_y = suitableSpot();
    // misses++;
  }
  else 
    cake_x -= cake_speed;
}

function moveCookie() {
  if(cookie_x < 0) {
    cookie_x = 725;
    cookie_y = -5000;
    cookie_y = suitableSpot();
    misses++;
  }
  else 
    cookie_x -= cookie_speed;
}

function suitableSpot() {
  var y = random(350);
  while(Math.abs(y - cookie_y) < 100 || Math.abs(y - pie_y) < 100 || Math.abs(y - cake_y) < 100) {
    y = random(350);
  }
  return y;
}

// function checkCollision() {
  
  
  
  
  
//   return // Speed of the object it is colliding with.
// }

function moveMonster() {
  if(keyIsDown(UP_ARROW) && monster_y > 0)
    monster_y -= monster_speed;
  if(keyIsDown(DOWN_ARROW) && monster_y < height-100)
    monster_y += monster_speed;
  if(keyIsDown(LEFT_ARROW) && monster_x > 0)
    monster_x -= monster_speed;
  if(keyIsDown(RIGHT_ARROW) && monster_x < width-150)
    monster_x += monster_speed;
}

var monster_speed = 2;

function checkForChomp() {
  var d = dist(cookie_x, cookie_y, monster_x, monster_y);
  if (d < 100) {
    points += 1;
    cookie_speed += .2;
    cookie_x = 725;
    cookie_y = random(350);
  }
  d = dist(pie_x, pie_y, monster_x, monster_y);
  if (d < 100) {
    if(!star)
      misses += 1;
    else
      points += 1;
    pie_x = 725;
    pie_y = random(350);
  }
  d = dist(cake_x,cake_y, monster_x, monster_y);
  if (d < 100) {
    if(!star)
      misses += 1;
    else
      points += 1;
    cake_x = 725;
    cake_y = random(350);
  } 
  d = dist(star_x,star_y, monster_x, monster_y);
  if (d < 100) {
    // misses += 1;
    // star_x = 725;
    // star_y = random(350);
    song.play();
    monster_speed = 5;
    star = true;
    star_x = -5000;
    
  }
  
}
