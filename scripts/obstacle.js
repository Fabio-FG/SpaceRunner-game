class Stone {
  constructor(srcImage, speedX) {
    this.image = new Image();
    this.image.src = srcImage;
    this.width = 50;
    this.height = 45;
    this.x = canvas.width;
    this.y = 380;
    this.speedX = speedX;
  }

  //methods

  //new Pipe ("./images/stone.png");

  drawStone = () => {
    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  };

  stoneMove = () => {
    this.x -= this.speedX;
    //if score reaches a certain amount the speed of the stones will increase.
  };
}
