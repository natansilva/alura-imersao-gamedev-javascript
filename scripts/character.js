class Character{
    constructor(image, characterWidth, characterHeight, spriteWidth, spriteHeight,
        characterPositionX, characterPositionY, spriteColumns, spriteRows, spriteDirection){
        this.image = image;
        this.spriteHeight = spriteHeight;
        this.spriteWidth = spriteWidth;
        this.spriteCharacterPositionX = 0;
        this.spriteCharacterPositionY = 0;
        this.characterHeight = characterHeight;
        this.characterWidth = characterWidth;
        this.characterPositionX = characterPositionX;
        this.characterOriginalPositionX = characterPositionX;
        this.characterPositionY = characterPositionY;
        this.characterOriginalPositionY = characterPositionY;
        this.spriteColumns = spriteColumns;
        this.spriteRows = spriteRows;
        this.spriteDirection = spriteDirection;

        this.maxJumps = 1;
        this.nJumps = 0;

        this.frameX = 0;
        this.frameY = 0;
        
        this.jumpHeight = 150;
        this.gravity = 20;
    }

    show(){
        image(
            this.image, this.characterPositionX, this.characterPositionY,
            this.characterWidth, this.characterHeight,
            this.spriteCharacterPositionX, this.spriteCharacterPositionY,
            this.spriteWidth, this.spriteHeight);
    }

    animate(){
        if(this.spriteDirection == 'row'){
            this.spriteCharacterPositionX=this.frameX * this.spriteWidth;
            this.spriteCharacterPositionY=this.frameY * this.spriteHeight;
        }

        if(this.spriteDirection == 'column'){
            this.spriteCharacterPositionX=this.frameY * this.spriteWidth;
            this.spriteCharacterPositionY=this.frameX * this.spriteHeight;
        }

        this.frameX++;

        if (this.frameX == this.spriteRows) {
            this.frameY++;
            this.frameX = 0;
        }

        if (this.frameY == this.spriteColumns){
            this.frameY = 0;
        }
    }

    play(velocity){
        this.characterPositionX = this.characterPositionX - velocity;
        this.characterPositionY = this.characterPositionY + this.gravity;

        if(this.characterPositionX + this.characterWidth <= 0){
            this.characterPositionX = this.characterOriginalPositionX;
        }

        if (this.characterPositionY <= this.characterOriginalPositionY - this.jumpHeight) {
            this.gravity = this.gravity * -1;
        }

        if(this.characterPositionY >= this.characterOriginalPositionY){
            this.characterPositionY = this.characterOriginalPositionY;
            this.nJumps = 0;
        }
    }

    restart(){
        this.characterPositionX = this.characterOriginalPositionX;
        this.characterPositionY = this.characterOriginalPositionY;
    }

    jump(){
        this.nJumps++;

        if(this.nJumps <= this.maxJumps){
            this.gravity = this.gravity * -1;
        }
    }

    isCollide(collideObject){
        const precision = 0.7;
        const isCollide = collideRectRect(
            this.characterPositionX, this.characterPositionY, this.characterWidth*precision, this.characterHeight*precision,
            collideObject.characterPositionX, collideObject.characterPositionY, collideObject.characterWidth, collideObject.characterHeight);
        
        return isCollide;
    }
}