// CCLab Mini Project - 9.R Particle World Template

let NUM_OF_PARTICLES = 100; // Decide the initial number of particles.

let particles = [];

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(400, 300);
  }
}

function draw() {
  background(255);

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();
  }
}

class Particle {
  // constructor function
  constructor(startX, startY, dia) {
    // properties: particle's characteristics
    this.x = startX;
    this.y = startY;
    this.dia = random(5, 100);
    this.r = 225
    this.g = 0
    this.b = random(0, 100)
    this.xSpd = random(-2, 2);
    this.ySpd = random(-2, 2);
    this.trans = 30


  }
  // methods (functions): particle's behaviors
  update() {

    this.x += this.xSpd;
    this.y += this.ySpd;
    this.distance = Math.sqrt((this.x - 400) ** 2 + (this.y - 300) ** 2);
    // if (this.x > width + 100 || this.x < -100) {
    //   this.x = 400
    // }
    // if (this.y > height + 100 || this.y < -100) {
    //   this.y = 300
    // }
    if (this.distance > 70) {
      this.x = 400
      this.y = 300
    }
    this.trans = this.trans + 0.1
    // if (frameCount > 120) {
    //   this.x = this.x - this.xSpd 
    //   this.y = this.y - this.ySpd * 2
    // }

    // if (this.x > 600 || this.x < 0) {
    //   this.x = 400
    // }
    // if (this.y > 500 || this.y < 100) {
    //   this.y = 300
    // }

  }
  display() {
    // particle's appearance
    // background(255, 1)
    push();
    translate(this.x, this.y);
    noStroke()
    fill(this.r, this.g, this.b, this.trans)
    // fill(random(colors)
    circle(0, 0, this.dia);

    pop();
  }
}
