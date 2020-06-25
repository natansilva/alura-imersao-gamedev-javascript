const ground=65;

let character;
let characterImage;
let characterEnemie;
let characterEnemieImage;
let backgroundScenarioImage00;
let backgroundScenarioImage01;
let backgroundScenarioImage02;
let backgroundScenarioImage03;
let backgroundScenarioImage04;
let backgroundScenarioImage05;
let backgroundScenarioImage06;
let backgroundScenarioImage07;
let backgroundScenarioImage08;
let backgroundScenarioImage09;
let backgroundScenario00;
let backgroundScenario01;
let backgroundScenario02;
let backgroundScenario03;
let backgroundScenario04;
let backgroundScenario05;
let backgroundScenario06;
let backgroundScenario07;
let backgroundScenario08;
let backgroundScenario09;
let score;
// let audioGame;

function preload(){
  backgroundScenarioImage00 = loadImage('images/scenario/Layer_0000_9.png');
  backgroundScenarioImage01 = loadImage('images/scenario/Layer_0001_8.png');
  backgroundScenarioImage02 = loadImage('images/scenario/Layer_0002_7.png');
  backgroundScenarioImage03 = loadImage('images/scenario/Layer_0003_6.png');
  backgroundScenarioImage04 = loadImage('images/scenario/Layer_0004_Lights.png');
  backgroundScenarioImage05 = loadImage('images/scenario/Layer_0005_5.png');
  backgroundScenarioImage06 = loadImage('images/scenario/Layer_0006_4.png');
  backgroundScenarioImage07 = loadImage('images/scenario/Layer_0007_Lights.png');
  backgroundScenarioImage08 = loadImage('images/scenario/Layer_0008_3.png');
  backgroundScenarioImage09 = loadImage('images/scenario/Layer_0009_2.png');
  backgroundScenarioImage10 = loadImage('images/scenario/Layer_0010_1.png');

  characterImage = loadImage('images/character/running.png');
  characterEnemieImage = loadImage('images/enemies/blue-enemies.png');
  gameOverImage = loadImage('images/assets/game-over.png');
  // audioGame = loadSound('sons/trilha_jogo.mp3');
  frameRate(25);
}

function setup() {
  createCanvas(928, 571);
  backgroundScenario00 = new Scenario(backgroundScenarioImage00);
  backgroundScenario01 = new Scenario(backgroundScenarioImage01);
  backgroundScenario02 = new Scenario(backgroundScenarioImage02);
  backgroundScenario03 = new Scenario(backgroundScenarioImage03);
  backgroundScenario04 = new Scenario(backgroundScenarioImage04);
  backgroundScenario05 = new Scenario(backgroundScenarioImage05);
  backgroundScenario06 = new Scenario(backgroundScenarioImage06);
  backgroundScenario07 = new Scenario(backgroundScenarioImage07);
  backgroundScenario08 = new Scenario(backgroundScenarioImage08);
  backgroundScenario09 = new Scenario(backgroundScenarioImage09);

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
    loop();
  }
}

function draw() {
  backgroundScenario09.show();
  backgroundScenario09.animate(0.5);
  backgroundScenario08.show();
  backgroundScenario08.animate(1);
  backgroundScenario07.show();
  backgroundScenario07.animate(1);
  backgroundScenario06.show();
  backgroundScenario05.show();
  backgroundScenario05.animate(2);
  backgroundScenario04.show();
  backgroundScenario04.animate(3);
  backgroundScenario03.show();
  backgroundScenario03.animate(3);
  backgroundScenario02.show();
  backgroundScenario02.animate(3);
  backgroundScenario01.show();
  backgroundScenario00.show();
  
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