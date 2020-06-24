let character;
let characterImage;
let characterEnemie;
let characterEnemieImage;
let scenario;
let scenarioImage;
// let audioGame;

function preload(){
  scenarioImage = loadImage('images/scenario/forest.png');
  // gameOver = loadImage()
  characterImage = loadImage('images/character/running.png');
  characterEnemieImage = loadImage('images/enemies/blue-enemies.png');
  // audioGame = loadSound('sons/trilha_jogo.mp3');
  frameRate(25);
}

function setup() {
  createCanvas(600, 400);
  scenario = new Scenario(scenarioImage, 2);
  character = new Character(characterImage, 135, 110, 220, 270, 100, height-110, 4, 4, 'row');
  characterEnemie = new Character(characterEnemieImage, 52, 52, 104, 104, width-52, height-52, 4, 7, 'column');
  // audioGame.loop();
}

function keyPressed(){
  if(key == 'ArrowUp'){
    character.jump();
  }
}

function draw() {
  scenario.show();
  scenario.animate();
  
  characterEnemie.show();
  characterEnemie.animate();
  characterEnemie.play(10);

  character.show();
  character.animate();
  character.play(0);
  if (character.isCollide(characterEnemie)) {
    noLoop();
  }
}