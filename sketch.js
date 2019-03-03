let SCREEN_W = 640;
let SCREEN_H = 400;
var x;
var y;
var i;

function setup() {
   createCanvas(SCREEN_W, SCREEN_H);
   background(0);
   loadPixels();
   let d = pixelDensity();
   let pixRows = SCREEN_W * 4 * d;  // egy sor ennyi alpixelből áll valójában
   let pixRolls = SCREEN_H * d;     // egy oszlop ennyi sorból áll valójában
   for (i = 0; i < pixRolls; i++) {
      y = i * SCREEN_W * 4 * d;
      for (x = 0; x < pixRows; x += 4) {
         pixels[x + y + 0] = 200;
         pixels[x + y + 1] = random(255);
         pixels[x + y + 2] = random(100,200);
         pixels[x + y + 3] = 255;
      }
   }
   updatePixels();
}


function draw() {
   // background(0);

}