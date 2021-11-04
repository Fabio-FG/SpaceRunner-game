class Floor {
    constructor( srcImage, yPos){
        this.image = new Image();
        this.image.src = srcImage;
        this.width = 250;
        this.height = 50;
        this.x = canvas.width;
        this.y = 540;
    }



    drawFloor = () => {
        ctx.drawImage (this.image, this.x , this.y, this.width, this.height);
    }
    
    
    floorMove = () => {
        this.x -= 2;
    }

}