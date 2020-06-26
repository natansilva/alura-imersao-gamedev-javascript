class Start {
    constructor(){
        this.className = 'Start';
        this.initialSceneImage = loadImage('images/scenario/initialScenario.png');
        this.startButtonImage = loadImage('images/assets/start-button.png');
        this.yButton = width/2-279;
        this.changeButtonCount = 0;
    }

    play() {
        image(this.initialSceneImage, 0, 0, width, height);
        image(this.startButtonImage, this.yButton, height*2/3);
        this._text();

        if (int(this.changeButtonCount) % 2 == 0) {
            this.yButton = width/2-279;
        } else {
            this.yButton = width;
        }

        this.changeButtonCount = this.changeButtonCount + 0.03;
    }

    pressButton(key){ }

    _text() {
        textAlign(CENTER);
        textSize(50);
        text('As aventuras de', width/2, height/6);
        textSize(150);
        text('Hipsta', width/2, height*4/9);
    }
}