let sound1;
let sound2;
let waters = [];
let rs, gs, bs
let circleX, circleY;
let circleSize = 20;
let t = 0;
let backimg;
let amp;


function preload() {
  sound1 = loadSound("assets/Renmin Road Tunnel 7.m4a");
  sound2 = loadSound("assets/Renmin Road Tunnel 6.m4a");
  sound3 = loadSound("assets/Renmin Road Tunnel 5.m4a");
  sound4 = loadSound("assets/Renmin Road Tunnel 4.m4a");
  sound5 = loadSound("assets/Renmin Road Tunnel 3.m4a");
  sound6 = loadSound("assets/Renmin Road Tunnel 2.m4a");
  sound7 = loadSound("assets/Renmin Road Tunnel 1.m4a");
  soundback = loadSound("assets/1318.wav");
  backimg = loadImage("images/background.jpg");
}

function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent("p5-canvas-container");

  circleX = random(width);
  circleY = random(height);

  // soundback.setVolume(0.5)
}

function draw() {
  // background(0);
  sound1.setVolume(0.5)
  sound2.setVolume(0.5)
  sound3.setVolume(0.5)
  sound4.setVolume(0.5)
  sound5.setVolume(0.5)
  sound6.setVolume(0.5)
  sound7.setVolume(0.5)
  // soundback.play()
  t = t + 0.05;

  let amp = 70;
  let sinValue = sin(t) * amp;
  image(backimg, 0, 0, 500, 500)
  blendMode(BLEND)
  fill(255, 100);
  noStroke()
  ellipse(circleX, circleY, 0.7 * sinValue);

  let d = dist(mouseX, mouseY, circleX, circleY);
  if (d < circleSize * 2) {
    circleX = random(width);
    circleY = random(height);
    let randomIndex = int(random(1, 8));
    playSound(randomIndex);
  }
  let x = mouseX;
  let y = mouseY;
  if (waters.length < 500) {
    waters.push(new water(x, y, random(70, 100)));
  }


  for (let i = 0; i < waters.length; i++) {
    let shui = waters[i];
    shui.display();
    shui.update();
  }
}

class water {
  constructor(x, y, dia) {
    this.dia = dia;
    this.x = x;
    this.y = y;
    this.trans = 100
  }
  update() {
    this.dia += 1

    if (this.trans > 0) {
      this.trans--
    }
    else {
      waters.splice(0, 1);
    }
  }
  display() {
    strokeWeight(1);
    if (this.trans <= 100) {
      this.g--
    }
    stroke(255, this.trans)
    noFill();
    circle(this.x, this.y, this.dia);
  }


}


function playSound(index) {
  switch (index) {
    case 1:
      sound1.play();
      break;
    case 2:
      sound2.play();
      break;
    case 3:
      sound3.play();
      break;
    case 4:
      sound4.play();
      break;
    case 5:
      sound5.play();
      break;
    case 6:
      sound6.play();
      break;
    case 7:
      sound7.play();
      break;
  }
}