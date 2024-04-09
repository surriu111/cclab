
let balls = []

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);

  balls.push(new ball(200, 300, 10))
}

function draw() {
  for (let i = 0; i < balls.length; i++) {
    let b = balls[i]

  }
}

class ball {
  constructor(initX, initY, d) {
    this.x = initX
    this.y = initY
    this.dia = d
  }

  display() {
    push()
    translate(this.x, this.y)
    fill(0)
    circle(0, 0, this.dia)
    cirlce(10, 10, 10)
    pop()

  }
}