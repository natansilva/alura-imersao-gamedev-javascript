let actualScene;
let game;
let start;
// let audioGame;

function preload(){}

function setup() {
  frameRate(60);
  createCanvas(928, 571);

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
    } else {
      actualScene = game;
      actualScene.restart();
    }
  }

  actualScene.pressButton(key);
}


function draw() {
  actualScene.play();
}