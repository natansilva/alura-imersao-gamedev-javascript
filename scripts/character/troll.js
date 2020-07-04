class Troll extends Character{
    constructor(ground){
        const image = loadImage('images/enemies/troll.png');
        const characterWidth = 480;
        const characterHeight = 300;
        const spriteWidth = 1600;
        const spriteHeight = 1000;
        const characterPositionX = width;
        const characterPositionY = height-ground-250;
        const spriteColumns = 2;
        const spriteRows = 5;
        const spriteDirection = 'row';
        const collidePoly = [
            createVector(180, 100),
            createVector(180, 150),
            createVector(130, 150),
            createVector(100, 180),
            createVector(100, characterHeight-30),
            createVector(characterWidth-140, characterHeight-30),
            createVector(characterWidth-140, 160),
            createVector(characterWidth-160, 140),
            createVector(characterWidth-190, 100),
        ];

        super(
            image, characterWidth, characterHeight, spriteWidth, spriteHeight, characterPositionX, characterPositionY, spriteColumns, spriteRows, spriteDirection, collidePoly
        );
    }

}