let sound1;
let sound2;

let x = 250;
let y = 200;
let w = 150;
let h = 110;

let r = 255;
let g = 255;
let b = 255;

function preload() {
  sound1 = loadSound("assets/beat.mp3");
  sound2 = loadSound("assets/kick.mp3");
}

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);
}

function draw() {
  background(220);

  if (mouseX > x - w / 2 && mouseX < x + w / 2
    && mouseY > y - h / 2 && mouseY < y + h / 2) {
    // in
    r = 255;
    g = 255;
    b = 0; // yellow
    if (mouseIsPressed) {
      r = 255;
      g = 0;
      b = 0; // red
      if (sound1.isPlaying() == false) {
        sound1.play();
      }
    }
  } else {
    // out
    r = 255;
    g = 255;
    b = 255;
  }

  // display the rect
  push();
  rectMode(CENTER);
  fill(r, g, b);
  rect(x, y, w, h);
  pop();


}