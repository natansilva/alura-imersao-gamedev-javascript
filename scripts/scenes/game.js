class Game {
    constructor() {
        this.className = 'Game';
        this.ground = 30;
        this.actualEnemieCount = 0;
        this.gameOverImage = loadImage('images/assets/game-over.png');

        this.loadBackground();
        this.loadCharacter();
        this.loadScore();

        this.enemie = NaN;
    }

    loadBackground() {
        this.treeScenario = new TreeScenario();
        this.hillScenario = new HillScenario();

        this.scenarios = [
            this.treeScenario,
            this.hillScenario
        ];

        this.actualScenario = this.scenarios[0];
    }

    toogleScenario(score){
        if(score % 50 == 0){
            this.actualScenario = this.scenarios[0];
        }

        if(score % 100 == 0){
            this.actualScenario = this.scenarios[1];
        }

    }

    loadCharacter(){
        this.characterImage = loadImage('images/character/running.png');
        this.character = new Character(this.characterImage, 135, 110, 220, 270, 100, height-this.ground-110, 4, 4, 'row');
        
        this.blueCharacterEnemieImage = loadImage('images/enemies/blue-enemies.png');
        this.blueCharacterEnemie = new Character(this.blueCharacterEnemieImage, 52, 52, 104, 104, width, height-this.ground-52, 4, 7, 'column');

        this.flightBlueCharacterEnemieImage = loadImage('images/enemies/flight-blue-enemies.png');
        this.flightBlueCharacterEnemie = new Character(this.flightBlueCharacterEnemieImage, 100, 75, 200, 150, width, height*2/3-this.ground-52, 5, 3, 'row');

        this.trollCharacterEnemieImage = loadImage('images/enemies/troll.png');
        this.trollCharacterEnemieImage = new Character(this.trollCharacterEnemieImage, 200, 230, 400, 400, width, height-this.ground-200, 5, 5, 'row');

        this.enemies = [
            this.blueCharacterEnemie,
            this.flightBlueCharacterEnemie,
            this.trollCharacterEnemieImage
        ];
    }

    loadScore(){
        this.score = new Score();
    }

    restart() {
        this.blueCharacterEnemie.restart();
        this.flightBlueCharacterEnemie.restart();
        this.character.restart();
        this.score.restart();
        this.trollCharacterEnemieImage.restart();
        this.actualEnemie = Math.floor(Math.random() * this.enemies.length);
    }

    pressButton(key){
        if(key == 'ArrowUp'){
            this.character.jump();
          }
        
          if(key == 'Enter'){
            this.restart();
            loop();
          }
    }

    play() {
        this.enemie = this.enemies[this.actualEnemieCount];

        if (this.enemie.characterPositionX + this.enemie.characterWidth <= 0) {
            this.actualEnemieCount = Math.floor(Math.random() * this.enemies.length);
            this.enemie.restart();
        
        }

        this.toogleScenario(this.score.score());
        this.actualScenario.show();
        
        this.character.show();
        this.character.animate();
        this.character.play(0);

        this.enemie.show();
        this.enemie.animate();
        this.enemie.play(Math.floor(Math.random() * 10) + 5);

        this.score.play();
        
        if (this.character.isCollide(this.enemie)) {
            image(this.gameOverImage, width/2-205, height/2-37);
            noLoop();
        }
    }
}