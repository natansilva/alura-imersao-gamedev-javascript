class Game {
    constructor() {
        this.className = 'Game';
        this.ground = 25;
        this.actualEnemieCount = 0;
        this.gameOverImage = loadImage('images/assets/game-over.png');

        this.loadBackground();
        this.loadCharacter();
        this.loadScore();
    }

    loadBackground() {
        this.treeScenario = new TreeScenario();
        this.hillScenario = new HillScenario();

        this.scenarios = [
            this.hillScenario,
            this.treeScenario,
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
        this.characterImage = loadImage('images/character/hipsta.png');
        this.character = new Character(this.characterImage, 110, 135, 220, 270, 0, height-this.ground-135, 4, 4, 'row');
        
        this.golemCharacterEnemieImage = loadImage('images/enemies/golem.png');
        this.golemCharacterEnemie = new Character(this.golemCharacterEnemieImage, 180, 120, 720, 480, width, height-this.ground-110, 18, 1, 'row');

        this.trollCharacterEnemieImage = loadImage('images/enemies/troll.png');
        this.trollCharacterEnemie = new Character(this.trollCharacterEnemieImage, 320, 200, 1600, 1000, width, height-this.ground-170, 2, 5, 'row');

        this.enemies = [
            this.golemCharacterEnemie,
            this.trollCharacterEnemie,
        ];
    }

    loadScore(){
        this.score = new Score();
    }

    restart() {
        this.character.restart();
        this.score.restart();
        this.actualEnemie = Math.floor(Math.random() * this.enemies.length);
        this.enemies.forEach((enemie) => enemie.restart());
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