class Gollem extends Character{
    constructor(ground){
        const image = loadImage('images/enemies/golem.png')
        const characterWidth = 180;
        const characterHeight = 120;
        const spriteWidth = 720;
        const spriteHeight = 480;
        const characterPositionX = width;
        const characterPositionY = height-ground-110;
        const spriteColumns = 18;
        const spriteRows = 1;
        const spriteDirection = 'row';
        const collidePoly = [
            createVector(60, 15),
            createVector(60, 45),
            createVector(30, 45),
            createVector(30, characterHeight),
            createVector(characterWidth-50, characterHeight),
            createVector(characterWidth-50, 40),
            createVector(characterWidth-70, 15),
        ];

        super(
            image, characterWidth, characterHeight, spriteWidth, spriteHeight, characterPositionX, characterPositionY, spriteColumns, spriteRows, spriteDirection, collidePoly
        );
    }

}