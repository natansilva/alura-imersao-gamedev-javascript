class LifeBar {
    constructor(){
        this.lifeBarImage = loadImage('images/assets/heart-animated.png');
    }

    play(totalLife, actualLife) {
        const y = 17 * (totalLife - actualLife);
        console.log(y);
        image(this.lifeBarImage, 10, 10, 41, 41, 0 + y, 0, 17, 17);
    }
}