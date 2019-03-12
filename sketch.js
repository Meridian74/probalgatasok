var ALL_OF_STARS = 150;          // csillagok száma
var SCREEN_WIDTH = 600;          // képernyő szélessége
var SCREEN_HEIGHT = 896;         // képernyő magassága
var MAX_SPEED = 5;               // csillagok maximális sebessége
var stars = Array(ALL_OF_STARS); // csillagok adattömbje
var spaceShip;


function setup() {
   createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
   frameRate(60);
   // csillagok kezdő adatfeltöltése
   for (let i = 0; i < ALL_OF_STARS; i++) {
      stars[i] = new Star();
   }
   // űrhajó létrehozása
   spaceShip = new SpaceShip();
}


function draw() {
   background(0);
   // csillagok mozgatása és kirajzolása
   for (let i = 0; i < ALL_OF_STARS; i++) {
      stars[i].move();
      stars[i].display();
   }
   // űrhajó kirajozolása
   spaceShip.display();
   // irányítás
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