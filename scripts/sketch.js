const ground = 30;

let character;
let characterImage;
let blueCharacterEnemie;
let blueCharacterEnemieImage;
let flightBlueCharacterEnemie;
let flightBlueCharacterEnemieImage;
let trollCharacterEnemie;
let trollCharacterEnemieImage;
let hillScenario;
let score;
let scoreCount=0;
let treeScenario;
// let audioGame;

function preload(){
  characterImage = loadImage('images/character/running.png');
  blueCharacterEnemieImage = loadImage('images/enemies/blue-enemies.png');
  flightBlueCharacterEnemieImage = loadImage('images/enemies/flight-blue-enemies.png');
  trollCharacterEnemieImage = loadImage('images/enemies/troll.png');
  gameOverImage = loadImage('images/assets/game-over.png');
  // audioGame = loadSound('sons/trilha_jogo.mp3');
  frameRate(60);
}

function setup() {
  createCanvas(928, 571);
  treeScenario = new TreeScenario();
  hillScenario = new HillScenario();
  hillScenario.toogle();

  character = new Character(characterImage, 135, 110, 220, 270, 100, height-ground-110, 4, 4, 'row');
  blueCharacterEnemie = new Character(blueCharacterEnemieImage, 52, 52, 104, 104, width-52, height-ground-52, 4, 7, 'column');
  flightBlueCharacterEnemie = new Character(flightBlueCharacterEnemieImage, 100, 75, 200, 150, width+100-52, height/3-ground-52, 5, 3, 'row')
  flightBlueCharacterEnemie2 = new Character(flightBlueCharacterEnemieImage, 100, 75, 200, 150, width+500-52, height/3-ground-52, 5, 3, 'row')
  trollCharacterEnemieImage = new Character(trollCharacterEnemieImage, 200, 230, 400, 400, width, height-ground-200, 5, 5, 'row');
  // audioGame.loop();

  score = new Score();
}

function keyPressed(){
  if(key == 'ArrowUp'){
    character.jump();
  }

  if(key == 'Enter'){
    blueCharacterEnemie.restart();
    character.restart();
    score.restart();
    trollCharacterEnemieImage.restart();
    loop();
  }
}

function draw() {
  treeScenario.show();
  hillScenario.show();
  
  blueCharacterEnemie.show();
  blueCharacterEnemie.animate();
  blueCharacterEnemie.play(5);

  flightBlueCharacterEnemie.show();
  flightBlueCharacterEnemie.animate();
  flightBlueCharacterEnemie.play(5);

  flightBlueCharacterEnemie2.show();
  flightBlueCharacterEnemie2.animate();
  flightBlueCharacterEnemie2.play(5);

  trollCharacterEnemieImage.show();
  trollCharacterEnemieImage.animate();
  trollCharacterEnemieImage.play(5);

  character.show();
  character.animate();
  character.play(0);

  score.play();

  if(score.score() % 500 == 0){
    hillScenario.toogle();
    treeScenario.toogle();
  }
  
  if (character.isCollide(blueCharacterEnemie)) {
    image(gameOverImage, width/2-205, height/2-37);
    noLoop();
  }

  if (character.isCollide(trollCharacterEnemieImage)) {
    image(gameOverImage, width/2-205, height/2-37);
    noLoop();
  }
}