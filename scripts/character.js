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

        this.maxJumps = 2;
        this.nJumps = 0;

        this.frameX = 0;
        this.frameY = 0;
        
        this.jumpHeight = 150;
        this.gravity = 6;
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

        if (this.characterPositionY <= this.characterOriginalPositionY - this.jumpHeight * this.nJumps) {
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
        this.nJumps = 0;

        if (this.gravity < 0) {
            this.gravity = this.gravity * -1;
        }
    }

    jump(){
        if(this.nJumps < this.maxJumps){
            this.nJumps++;

            if (this.gravity > 0) {
                this.gravity = this.gravity * -1;
            }
        }
    }

    isCollide(collideObject){
        const precision = 0.65;

        const x1 = this.characterPositionX + (this.characterWidth*(1-precision))/2;
        const y1 = this.characterPositionY + (this.characterHeight*(1-precision)/2);
        const sx1 = this.characterWidth*precision;
        const sy1 = this.characterHeight*precision;

        const x2 = collideObject.characterPositionX + (collideObject.characterWidth*(1-precision))/2;
        const y2 = collideObject.characterPositionY + (collideObject.characterHeight*(1-precision)/2)
        const sx2 = collideObject.characterWidth*precision;
        const sy2 = collideObject.characterHeight*precision;

        const isCollide = collideRectRect(x1, y1, sx1, sy1, x2, y2, sx2, sy2);
        
        return isCollide;
    }
}