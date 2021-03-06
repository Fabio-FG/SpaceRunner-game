class Game {
  //This will have the properties of the whole game
  constructor() {
    // 0 - Draw the background, the character and obstacles (use sample bg at first)
    // 1 - Define the floor
    // 2 - Define the character and position on the X, Y axis (start with basic shapes)
    // 2.1 - Collision between character and floor (border like the ping pong)
    // 3 - Define character movement
    // 4 - Define obstacles and obstacle movement
    // 5 - ...

    this.bg = new Image();
    this.bg.src = "./images/bg-made.jpg"; // setting up the bg
    this.char = new Character();
    /*  this.stone = new Stone("./images/rock.png", null); */
    this.stoneArr = [new Stone("./images/debris.png", 5)]; //originally rock.png but changed to get double platforms
    //this.floorArr = [new Floor("")];
    this.gapBetweenPlatforms = 150;
    this.platformAppearingDistance = 350;
    this.isGameOver = false;
    this.score = 0;
    this.floorPosition = 0;
    this.stoneSpeed = 3;
  }

  incrementScore = () => {
    this.score = this.score + 1;
    scoreDisplay.textContent = this.score;
    if(this.score % 8 === 0) {
      //console.log(this.stoneSpeed);
      this.stoneSpeed += 1;
    }

    //stop the jump keys from adding score after game over
    if(this.isGameOver === true){
      this.score = this.score += 0;
      scoreDisplay.textContent = this.score;
    }
  };

  gameover = () => {
    //This is to stop the game once you lose
    this.isGameOver = true;
    //"hide or show the canvas"
    restartButton.style.display = "flex";

    //Show restart
    restartScreen.style.display = "flex";
    
    
  };

  //Methods

  spawnStones = () => {
    // obstacle.js
    //console.log("Adding stone");
    //gettting the space betweeen stones
    let lastIndex = this.stoneArr.length - 1;
    let lastStone = this.stoneArr[lastIndex];
   
      
    if (lastStone.x < this.platformAppearingDistance) {
      // changing the distance between platforms (less increases the distances)
      //let randomPosY = Math.random() * - canvas.height / 3
      let platform = new Stone("./images/debris.png", this.stoneSpeed);
     
      this.stoneArr.push(platform);
      //console.log("hrllo");  
    }
  };

  //Game loop

  gameLoop = () => {
    /*console.log(this.score);
    console.log(this.stoneSpeed);

    if (this.score % 5 === 0) {
      this.stoneSpeed += 5;
    }*/

    //console.log("The game is running!");
    // 1- Clear the canvas -------------------------------------
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2- movement and changes ---------------------------------
    this.char.charGravity();

    /* this.stone.stoneMove(); */
    this.stoneArr.forEach((eachObstacle) => {

      eachObstacle.stoneMove();
     
    });

    
    // 3- Drawing -----------------------------------------------

    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
    this.char.drawChar();
    //drawing the obstacles
    /* this.stone.drawStone(); */

    this.stoneArr.forEach((eachObstacle) => {
      eachObstacle.drawStone();
    });

    /*this.floorArr.forEach((eachPlatform) => {
  eachPlatform.drawFloor();
});*/

    //Collision detected for the platforms
    this.stoneArr.forEach((eachPlatform) => {
      if (this.char.charPlatformCollision(eachPlatform)) {
        this.gameover();
      }
    });

    //collision detected for the floor platform
    /*this.floorArr.forEach((eachPlatform) => {
            if( this.char.charPlatformCollision( eachPlatform)){
                this.gameover();
            }
        })*/

    //platform movement

    this.spawnStones();

    // 4- animation frame and game logic changes
    if (!this.isGameOver) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
