let balls = [];

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  // background(0);

  for (let i = 0; i < 100; i++) {
    let x = 100
    let y = 100
    let dia = random(1, 6);
    balls.push(new Ball(x, y, dia));
  }

}

function draw() {
  //background(255, 10);
  background(255, this.trans);
  // if (mouseIsPressed) {

  for (let i = 0; i < balls.length; i++) {
    let b = balls[i]; // get each ball
    b.move();
    b.zigzag();
    b.reappear()
    b.display();
  }
}
// }


class Ball {
  constructor(startX, startY, startDia) {
    this.x = startX;
    this.y = startY;
    this.xSpd = random(-1, 1);
    this.ySpd = random(-1, 1);
    this.dia = startDia;
    this.r = 225
    this.g = 0
    this.b = random(0, 50);
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
    this.trans = this.trans - 1
  }
  zigzag() {
    this.x += random(-0.2, 0.2);
  }
  reappear() {
    if (120 > frameCount > 60) {
      this.xSpd = random(-3, 0);
      this.ySpd = this.ySpd(-3, 0)
    }
    if (frameCount > 120) {
      this.ySpd = random(1, 0)
      this.xSpd = (-0.1, 0.1)

    }
  }
  display() {
    push();
    noStroke();
    //fill(this.r, this.g, this.b);
    fill(this.r, this.g, this.b);
    circle(this.x, this.y, this.dia);
    pop();
  }
}