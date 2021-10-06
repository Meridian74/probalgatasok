var ALL_OF_STARS = 150;          // number of stars
var SCREEN_WIDTH = 600;          // width of the screenplay 
var SCREEN_HEIGHT = 860;         // height of the scrrenplay
var MAX_SPEED = 5;               // max speed of stars
var stars = Array(ALL_OF_STARS); // array of stars data
var spaceShip;


function setup() {
   createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
   frameRate(60);
   // initializing stars
   for (let i = 0; i < ALL_OF_STARS; i++) {
      stars[i] = new Star();
   }
   // create the player's spaceship
   spaceShip = new SpaceShip();
}


function draw() {
   background(0);
   // moving stars
   for (let i = 0; i < ALL_OF_STARS; i++) {
      stars[i].move();
      stars[i].display();
   }
   // drawing player's space ship
   spaceShip.display();
   // controll the game
   control();
}

function control () {
   if (keyIsDown(LEFT_ARROW)) {
      spaceShip.move(true);
   }
   if (keyIsDown(RIGHT_ARROW)) {
      spaceShip.move(false);
   }
}