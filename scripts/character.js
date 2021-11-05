class Character {
  constructor() {
    this.charImage = new Image();
    this.charImage.src = "./images/atlas.png";
    this.width = 80;
    this.height = 80;
    this.x = canvas.width / 5;
    this.y = canvas.height / 2;
    this.charSpeed = 205;
    this.isOnFloor = true;
  }

  //Methods

  drawChar () {
    
    ctx.drawImage(this.charImage, this.x, this.y, this.width, this.height);
  };

  charGravity () {
    const playerTop = this.y; 
    if (playerTop < 345) {
      //controls the gravity and where he stops from falling
      this.y += 2.5;
      this.isOnFloor = false;
    } else {
      // console.log(this.y);
      this.y += 0;
      this.isOnFloor = true;
    }
  };

  charJump ()  {
    //console.log("this", this);
    this.y -= this.charSpeed;
  };

  charPlatformCollision = (singlePipe) =>  {
    
      if (this.x < singlePipe.x + singlePipe.width &&
          this.x + this.width > singlePipe.x &&
          this.y < singlePipe.y + singlePipe.height &&
          this.height + this.y > singlePipe.y){
              console.log("collision happening");
              return true;
          } else {
              return false;
          }
      
      //cause the game to end
      // create boolean for the game to end, and trigger. Also check on requestAnimationFrame

  }


  


  // game ends when colliding with "floor"
  // create boolean for the game to end and trigger, also check on request animationFrame

  charMovementRight = () => {
    this.x = this.x + 32;
  };

  charMovementLeft = () => {
    this.x = this.x - 32;
  };

  
}
