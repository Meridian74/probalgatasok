class Star {
   constructor() {
      this.x = random(SCREEN_WIDTH);      // Y coord
      this.y = random(SCREEN_HEIGHT);     // X coord
      this.speed = random(MAX_SPEED) + 3; // stepping speed
      this.color = 50 + MAX_SPEED * 40;   // bright
   }
   
   move() {
      this.y = this.y + this.speed / 2;
      if (this.y > SCREEN_HEIGHT) {
         this.y = 0;
         this.x = random(SCREEN_WIDTH);
         this.speed = random(MAX_SPEED) + 2;
         this.color = 40 + MAX_SPEED * 32;
      }
   }

   display() {
      stroke(this.color);
      strokeWeight(1.5);
      point(this.x, this.y);
      point(this.x, this.y - this.speed / 8);
   }
}