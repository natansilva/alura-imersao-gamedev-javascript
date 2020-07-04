class Score {
    constructor(){
        this.numbersImage = loadImage('images/assets/numbers.png');
        this.placar = 0;

        this.numberMatrix = {
            0: { 'x':440, 'y':160, 'sx':100, 'sy':120 },
            1: { 'x':110, 'y':160, 'sx':100, 'sy':120 },
            2: { 'x':10, 'y':40, 'sx':100, 'sy':120 },
            3: { 'x':110, 'y':40, 'sx':100, 'sy':120 },
            4: { 'x':10, 'y':160, 'sx':100, 'sy':120 },
            5: { 'x':210, 'y':40, 'sx':100, 'sy':120 },
            6: { 'x':340, 'y':40, 'sx':100, 'sy':120 },
            7: { 'x':440, 'y':40, 'sx':100, 'sy':120 },
            8: { 'x':340, 'y':160, 'sx':100, 'sy':120 },
            9: { 'x':210, 'y':160, 'sx':100, 'sy':120 },
        }
    }

    restart() {
        this.placar = 0;
    }

    score(){
        return int(this.placar);
    }

    play(){
        const placar1 = typeof ('' + int(this.placar))[0] == "undefined" ? '0' : ('' + int(this.placar))[0];
        const placar2 = typeof ('' + int(this.placar))[1] == "undefined" ? '0' : ('' + int(this.placar))[1];
        const placar3 = typeof ('' + int(this.placar))[2] == "undefined" ? '0' : ('' + int(this.placar))[2];

        image(
            this.numbersImage, 100, 0, 50, 60,
            this.numberMatrix[int(placar1)].x, this.numberMatrix[int(placar1)].y,
            this.numberMatrix[int(placar1)].sx, this.numberMatrix[int(placar1)].sy);
        
        image(
            this.numbersImage, 50, 0, 50, 60,
            this.numberMatrix[placar2].x, this.numberMatrix[placar2].y,
            this.numberMatrix[placar2].sx, this.numberMatrix[placar2].sy);

        image(
            this.numbersImage, 0, 0, 50, 60,
            this.numberMatrix[placar3].x, this.numberMatrix[placar3].y,
            this.numberMatrix[placar3].sx, this.numberMatrix[placar3].sy);

        this.placar = this.placar + 0.1;
    }
}