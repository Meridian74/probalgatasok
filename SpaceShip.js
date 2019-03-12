class SpaceShip {
   constructor() {
      this.numberOfLife = 5;                          // életek száma
      this.posX = SCREEN_WIDTH / 2 - 32;              // kezdő pozició középen
      this.posY = SCREEN_HEIGHT - 64 - 24;      
      this.movSpeed = 4;                              // űrhajó mozgatási sebessége
      this.img = loadImage("pics/space-ship-01.png"); // űrhajó rajza
   }

   move(direction) {
      if (direction) {
         this.posX = this.posX - this.movSpeed;
         if (this.posX < 10 ) {
            this.posX = 10;
         }
      } 
      else {
         this.posX = this.posX + this.movSpeed;
         if (this.posX > SCREEN_WIDTH - 10 - 64) {
            this.posX = SCREEN_WIDTH - 10 - 64;
         }
      }
   }

   display() {
      image(this.img, this.posX, this.posY);
   }

}