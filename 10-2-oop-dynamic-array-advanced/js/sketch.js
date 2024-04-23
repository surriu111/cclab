

let particles = [];

function setup() {
  let canvas = createCanvas(800, 450);
  canvas.parent("p5-canvas-container");
  background(220);

  // generate


}

function draw() {
  // background(220);

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.display()
    p.move()
  }

  // if (mouseIsPressed) {
  //   particles.push(new Particle(random(0, 500), height / 2, random(3, 5)));
  // }

  if (keyIsPressed) {
    particles.push(new Particle(random(0, width), height / 2, random(3, 5)));
  }
}

//

class Particle {
  constructor(x, y, rad) {
    this.x = x;
    this.y = y;
    this.rad = rad
    this.speedx = 0
    this.speedy = random(1, 3)

  }
  display() {
    push();
    noStroke()
    translate(this.x, this.y);
    push()
    fill(random(0, 100), random(0, 100), random(0, 100))
    pop()
    circle(0, 0, this.rad);
    pop();
  }
  move() {
    this.x += this.speedx
    this.y += this.speedy
  }
}