let cam;

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);

  cam = createCapture(VIDEO)
  cam.hide();
}

function draw() {
  background(220)
  image(cam, 0, 0)
  cam.get(x, y)
}