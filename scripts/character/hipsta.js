class Hipsta extends Character{
    constructor(ground){
        const image = loadImage('images/character/hipsta.png');
        const spriteHeight = 270;
        const spriteWidth = 220;
        const characterHeight = 135;
        const characterWidth = 110;
        const characterPositionX = 50;
        const characterPositionY = height-ground-characterHeight;
        const spriteColumns = 4;
        const spriteRows = 4;
        const spriteDirection = 'row';
        const collidePoly = [
            createVector(0, 0),
            createVector(0, characterHeight - 25),
            createVector(30, characterHeight-10),
            createVector(characterWidth - 30, characterHeight-10),
            createVector(characterWidth, characterHeight - 50),
            createVector(characterWidth, 25),
            createVector(characterWidth - 30, 0),
        ];

        super(
            image, characterWidth, characterHeight, spriteWidth, spriteHeight, characterPositionX, characterPositionY, spriteColumns, spriteRows, spriteDirection, collidePoly
        );
    }

}