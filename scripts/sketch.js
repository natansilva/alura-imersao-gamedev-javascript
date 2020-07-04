let actualScene;
let game;
let start;
// let audioGame;

function preload(){}

function setup() {
  frameRate(30);
  createCanvas(1400, 800);

  game = new Game();
  start = new Start();

  actualScene = start;

  scenes = {
    'game': game,
    'start': start,
  }
  // audioGame.loop();
}

function keyPressed(){
  if (key == ' '){
    if (actualScene.className == 'Game'){
      actualScene = start;
      actualScene.restart();
      loop();
    } else {
      actualScene = game;
      actualScene.restart();
      loop();
    }
  }

  actualScene.pressButton(key);
}


function draw() {
  actualScene.play();
}