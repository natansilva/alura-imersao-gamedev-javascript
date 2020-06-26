class Score {
    constructor(){
        this.numbersImage = loadImage('images/assets/numbers.png');
        this.placar1 = 0;
        this.placar2 = 0;
        this.placar3 = 0;

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
        this.placar1 = 0;
        this.placar2 = 0;
        this.placar3 = 0;
    }

    score(){
        return int(this.placar1 + this.placar2*10 + this.placar3*100);
    }

    play(){
        if (int(this.placar1) == 10) {
            this.placar1 = 0;
            this.placar2++;
        }

        if (this.placar2 == 10) {
            this.placar2 = 0;
            this.placar3++;
        }

        if (this.placar3 == 10) {
            this.placar1 = 0;
            this.placar2 = 0;
            this.placar3 = 0;
        }

        image(
            this.numbersImage, 100, 0, 50, 60,
            this.numberMatrix[int(this.placar1)].x, this.numberMatrix[int(this.placar1)].y,
            this.numberMatrix[int(this.placar1)].sx, this.numberMatrix[int(this.placar1)].sy);
        
        image(
            this.numbersImage, 50, 0, 50, 60,
            this.numberMatrix[this.placar2].x, this.numberMatrix[this.placar2].y,
            this.numberMatrix[this.placar2].sx, this.numberMatrix[this.placar2].sy);

        image(
            this.numbersImage, 0, 0, 50, 60,
            this.numberMatrix[this.placar3].x, this.numberMatrix[this.placar3].y,
            this.numberMatrix[this.placar3].sx, this.numberMatrix[this.placar3].sy);

        this.placar1 = this.placar1 + 0.1;
    }
}