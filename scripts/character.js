class Character{
    constructor(image){
        this.image = image;
        this.factor = 0.5;
        this.originalHeight = 220;
        this.originalWidth = 270;
        this.height = this.originalHeight * this.factor;
        this.width = this.originalWidth * this.factor;

        this.positionX=0;
        this.positionX2=this.originalHeight;
        this.positionY=0;
        this.positionY2=this.originalWidth

        this.frameX = 0;
        this.frameY = 0;
    }

    show(){
        image(this.image, 0,
            height-this.height, this.width, this.height,
            this.positionX, this.positionY, this.originalHeight, this.originalWidth);
    }

    animate(){
        this.positionX=this.frameX * this.originalHeight;
        this.positionY=this.frameY * this.originalWidth;

        this.frameX++;

        if (this.frameX == 4) {
            this.frameY++;
            this.frameX = 0;
        }
        if (this.frameY == 4){
            this.frameY = 0;
        }
    }

}