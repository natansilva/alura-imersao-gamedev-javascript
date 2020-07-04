class Character{
    constructor(image, characterWidth, characterHeight, spriteWidth, spriteHeight,
        characterPositionX, characterPositionY, spriteColumns, spriteRows, spriteDirection, characterPoly=[]){
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
        this.characterPoly = characterPoly;


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
        this.collidePoly = this.characterPoly.map((a) => createVector(a.x + this.characterPositionX, a.y + this.characterPositionY));

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
        // noFill();
        // stroke(237, 34, 93);
        // beginShape();
        // this.collidePoly.forEach((a) => vertex(a.x, a.y));
        // endShape(CLOSE);

        // beginShape();
        // collideObject.collidePoly.forEach((a) => vertex(a.x, a.y));
        // endShape(CLOSE);

        return collidePolyPoly(this.collidePoly, collideObject.collidePoly);
    }
}