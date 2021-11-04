class Character {
  constructor() {
    this.charImage = new Image();
    this.charImage.src = "./images/deadpool.png";
    this.width = 80;
    this.height = 80;
    this.x = canvas.width / 5;
    this.y = canvas.height / 2;
    this.charSpeed = 200;
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
      this.y += 2;
      this.isOnFloor = false;
    } else {
      // console.log(this.y);
      this.y += 0;
      this.isOnFloor = true;
    }
  };

  charJump ()  {
    console.log("this", this);
    this.y -= this.charSpeed;
  };

  charPlatformCollision (enemy) {
    //singlePlatform.x
    //singlePlatform.y
    // check if char is colling with a platform
    /*if (
      this.x < singlePlatform.x + singlePlatform.width &&
      this.x + this.width > singlePlatform.x &&
      this.y < singlePlatform.y + singlePlatform.height &&
      this.height + this.y > singlePlatform.y
    ) {
      console.log("Collision detected");
      return true;
    } else {
      return false;
    }*/

    //char
    let charLeft = this.x;
    let charRight = this.x + this.width;
    let charTop = this.y;
    let charBottom = this.y + this.height;

    //enemy obstacle
    let enemyLeft = enemy.x;
    let enemyRight = enemy.x + enemy.width;
    let enemyTop = enemy.y;
    let enemyBottom = enemy.y + enemy.height;

    //crossing
    let crossLeft = enemyLeft <= charRight && enemyLeft >= charLeft;
    let crossRight = enemyRight >= charLeft && enemyRight <= charRight;
    let crossBottom = enemyBottom >= charTop && enemyBottom <= charBottom;
    let crossTop = enemyTop <= charBottom && enemyTop >= charTop;

    if((crossLeft || crossRight) && (crossTop || crossBottom)){
      debugger;
      console.log("collision detected");
      return true;
    }else {
      return false;
    }


  
  };

  // game ends when colliding with "floor"
  // create boolean for the game to end and trigger, also check on request animationFrame

  charMovementRight = () => {
    this.x = this.x + 32;
  };

  charMovementLeft = () => {
    this.x = this.x - 32;
  };

  
}
