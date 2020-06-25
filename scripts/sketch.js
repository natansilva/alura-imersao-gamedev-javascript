let character;
let characterImage;
let characterEnemie;
let characterEnemieImage;
let ground;
let hillScenario;
let score;
let scoreCount=0;
let treeScenario;
// let audioGame;

function preload(){
  characterImage = loadImage('images/character/running.png');
  characterEnemieImage = loadImage('images/enemies/blue-enemies.png');
  gameOverImage = loadImage('images/assets/game-over.png');
  // audioGame = loadSound('sons/trilha_jogo.mp3');
  frameRate(25);
}

function setup() {
  createCanvas(928, 571);
  hillScenario = new HillScenario();
  // treeScenario = new TreeScenario();

  ground = hillScenario.ground;

  character = new Character(characterImage, 135, 110, 220, 270, 100, height-ground-110, 4, 4, 'row');
  characterEnemie = new Character(characterEnemieImage, 52, 52, 104, 104, width-52, height-ground-52, 4, 7, 'column');
  // audioGame.loop();

  score = new Score();
}

function keyPressed(){
  if(key == 'ArrowUp'){
    character.jump();
  }

  if(key == 'Enter'){
    characterEnemie.restart();
    character.restart();
    score.restart();
    loop();
  }
}

function draw() {
  treeScenario.show();
  hillScenario.show();
  
  characterEnemie.show();
  characterEnemie.animate();
  characterEnemie.play(10);

  character.show();
  character.animate();
  character.play(0);
  score.play();
  
  if (character.isCollide(characterEnemie)) {
    image(gameOverImage, width/2-205, height/2-37);
    noLoop();
  }
}