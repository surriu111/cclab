let balls = [];
let valuex = 0, valuey = 0;
let img, img2;
let musicPlayed = false;
let pg;
let sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9, sound10, sound11;
let sound20;

function preload() {
  img = loadImage('images/heijin.png');
  img1 = loadImage('images/bird.png');
  // img2 = loadImage('images/cliff.png');

  sound3 = loadSound("assets/NYU Shanghai Qiantan Campus 16.m4a");
  sound4 = loadSound("assets/y1887.wav");
  sound5 = loadSound("assets/NYU Shanghai Qiantan Campus 17.m4a");
  sound6 = loadSound("assets/NYU Shanghai Qiantan Campus 18.m4a");
  sound7 = loadSound("assets/NYU Shanghai Qiantan Campus 19.m4a");
  sound8 = loadSound("assets/NYU Shanghai Qiantan Campus 20.m4a");
  sound9 = loadSound("assets/NYU Shanghai Qiantan Campus 21.m4a");
  sound10 = loadSound("assets/NYU Shanghai Qiantan Campus 22.m4a");
  sound11 = loadSound("assets/NYU Shanghai Qiantan Campus 23.m4a");
  sound12 = loadSound("assets/NYU Shanghai Qiantan Campus 25.m4a");
  sound13 = loadSound("assets/NYU Shanghai Qiantan Campus 26.m4a");
  sound14 = loadSound("assets/NYU Shanghai Qiantan Campus 27.m4a");
  sound15 = loadSound("assets/NYU Shanghai Qiantan Campus 28.m4a");
  sound16 = loadSound("assets/NYU Shanghai Qiantan Campus 29.m4a");
  sound17 = loadSound("assets/NYU Shanghai Qiantan Campus 30.m4a");
  sound18 = loadSound("assets/NYU Shanghai Qiantan Campus 31.m4a");
  sound19 = loadSound("assets/NYU Shanghai Qiantan Campus 32.m4a");
  sound20 = loadSound("assets/NYU Shanghai Qiantan Campus 33.m4a");
  sound21 = loadSound("assets/NYU Shanghai Qiantan Campus 34.m4a");
  sound22 = loadSound("assets/NYU Shanghai Qiantan Campus 35.m4a");
  sound23 = loadSound("assets/NYU Shanghai Qiantan Campus 36.m4a");
  sound24 = loadSound("assets/NYU Shanghai Qiantan Campus 37.m4a");
  sound25 = loadSound("assets/NYU Shanghai Qiantan Campus 38.m4a");
  sound26 = loadSound("assets/NYU Shanghai Qiantan Campus 39.m4a");
  sound27 = loadSound("assets/NYU Shanghai Qiantan Campus 40.m4a");
  sound28 = loadSound("assets/NYU Shanghai Qiantan Campus 41.m4a");
  sound29 = loadSound("assets/NYU Shanghai Qiantan Campus 42.m4a");
  sound30 = loadSound("assets/NYU Shanghai Qiantan Campus 43.m4a");
  soundbird = loadSound("assets/bird.mp3");
}

function setup() {

  let canvas = createCanvas(700, 700);
  canvas.parent("p5-canvas-container");
  sound4.setVolume(0.3)
  sound5.setVolume(1.1)

  pg = createGraphics(1000, 1000);

  sound4.play()


}

function draw() {
  image(img, 0, 0, 700, 700);

  if (mouseIsPressed) {
    push();
    translate(mouseX, mouseY);
    // scale(0.2)
    imageMode(CENTER);
    image(img1, 0, 0);
    pop();

    if (!musicPlayed) {
      soundbird.play()
      musicPlayed = true;
    }
  }

  // update and display the balls
  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];
    b.move();
    //b.zigzag();
    // b.reappear()
    b.display();
    b.disappear();
  }

  // push()
  // translate(mouseX, mouseY);
  // imageMode("CENTER");
  // pop()

  // image(img2, 0, 0);
}

function keyPressed() {
  //
  for (let i = 0; i < 10; i++) {
    let x = random(500, 600);
    let y = random(90, 110);
    let dia = random(10, 30);
    balls.push(new Ball(x, y, dia));
  }

  if (key == "a") {
    sound3.play();
  }
  if (key == "s") {
    sound5.play();
  }
  if (key == "d") {
    sound6.play();
  }
  if (key == "f") {
    sound7.play();
  }
  if (key == "g") {
    sound8.play();
  }
  if (key == "h") {
    sound9.play();
  }
  if (key == "j") {
    sound10.play();
  }
  if (key == "k") {
    sound11.play();
  }
  if (key == "l") {
    sound12.play();
  }
  if (key == "y") {
    sound13.play();
  }
  if (key == "u") {
    sound14.play();
  }
  if (key == "i") {
    sound16.play();
  }
  if (key == "o") {
    sound17.play();
  }
  if (key == "p") {
    sound18.play();
  }
  if (key == "q") {
    sound19.play();
  }
  if (key == "w") {
    sound20.play();
  }
  if (key == "e") {
    sound21.play();
  }
  if (key == "r") {
    sound22.play();
  }
  if (key == "t") {
    sound23.play();

  }
  if (key == "z") {
    sound24.play();
  }
  if (key == "x") {
    sound25.play();
  }
  if (key == "c") {
    sound26.play();
  }
  if (key == "v") {
    sound27.play();
  }
  if (key == "b") {
    sound28.play();
  }
  if (key == "n") {
    sound29.play();
  }
  if (key == "m") {
    sound30.play();
  }
}


class Ball {
  constructor(startX, startY, startDia) {

    this.x = startX;
    this.y = startY;
    this.xSpd = 0; //random(-3, 3);
    this.ySpd = random(1, 10);
    this.dia = startDia;
    //

    this.trans = 150
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  zigzag() {
    this.x += random(-1, 1);
  }
  reappear() {
    if (this.y > height) {
      this.y = 0

    }
  }
  display() {
    push();
    noStroke();
    fill(205, 189, 129, this.trans);
    circle(this.x, this.y, this.dia);
    pop();
  }
  disappear() {
    this.trans = this.trans - 1
  }
}

// function waterfall() {

// }

