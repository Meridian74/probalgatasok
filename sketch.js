let SCREEN_W = 256;
let SCREEN_H = 256;
var x;
var y;
var i;

function setup() {
   createCanvas(SCREEN_W, SCREEN_H);
   background(0);
   loadPixels();
   let d = pixelDensity();
   let pixRows = SCREEN_W * d * 4;  // egy sor ennyi alpixelből áll valójában
   let pixRolls = SCREEN_H * d;     // egy oszlop ennyi sorból áll valójában
   for (i = 0; i < pixRolls; i++) {
      y = i * SCREEN_W * 4 * d;
      for (x = 0; x < pixRows; x += 4) {
         pixels[x + y + 0] = 0;           // R color level
         pixels[x + y + 1] = x / 4 / d;   // G color level
         pixels[x + y + 2] = i / d;       // B color level
         pixels[x + y + 3] = 255;         // Alpha level
      }
   }
   updatePixels();
}


function draw() {
   // background(0);

}