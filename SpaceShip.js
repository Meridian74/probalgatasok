class SpaceShip {
   constructor() {
      this.numberOfLife = 5;                          // number of lifes
      this.posX = SCREEN_WIDTH / 2 - 32;              // star pisition is in center
      this.posY = SCREEN_HEIGHT - 64 - 24;      
      this.movSpeed = 4;                              // spaceship's moving speed
      this.img = loadImage("pics/space-ship-01.png"); // spaceship's image
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