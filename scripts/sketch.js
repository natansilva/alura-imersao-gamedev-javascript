let character;
let characterImage;
let scenario;
let scenarioImage;
// let audioGame;

function preload(){
  scenarioImage = loadImage('images/scenario/forest.png');
  characterImage = loadImage('images/character/running.png');
  // audioGame = loadSound('sons/trilha_jogo.mp3');
  frameRate(30);
}

function setup() {
  createCanvas(1299, 400);
  scenario = new Scenario(scenarioImage, 2);
  character = new Character(characterImage);
  // audioGame.loop();
}

function draw() {
  scenario.show();
  scenario.animate();
  character.show();
  character.animate();
}