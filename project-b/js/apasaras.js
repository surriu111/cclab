let img;
let showText = true;
let particles = []

function preload() {
  sound1 = loadSound("assets/dreamsound.mp3");
}

function setup() {
  let fileInput = createFileInput(handleFile);
  fileInput.position(690, 100);

  let canvas = createCanvas(1000, 1000);
  canvas.parent("p5-canvas-container");

  // background(220)

}

function draw() {
  textSize(30)
  if (showText) {
    fill(255);
    textAlign(CENTER)
    text("upload one memory(img).", width / 2, height / 2);
    text("click the button and", width / 2, height / 2 + 50);


  }

  if (img) {
    showText = false;
    img.loadPixels();

    if (mouseIsPressed) {
      drawImage();
    } else {
      drawParticles();
    }
  }
}

function drawImage() {
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let index = (x + y * img.width) * 4;
      let r = img.pixels[index + 0];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      if (r > g && r > b) {
        img.pixels[index + 1] = 0;
        img.pixels[index + 2] = 0;
      } else {
        let gray = (r + g + b) / 3;
        img.pixels[index + 0] = gray;
        img.pixels[index + 1] = gray;
        img.pixels[index + 2] = gray;
      }
    }
  }
  img.updatePixels();
  background(0);
  image(img, 0, 0);
}

function drawParticles() {
  //background(255);
  let gridSize = 20;
  for (let y = 0; y < img.height; y += gridSize) {
    for (let x = 0; x < img.width; x += gridSize) {
      let index = (x + y * img.width) * 4;
      let r = img.pixels[index + 0];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];

      particles.push(new particle(x, y, 10, r, g, b));

      // fill(r, g, b);
      // noStroke();
      // rect(x + random(-mouseX, mouseX), y + random(-5, 5), gridSize, gridSize);
    }
  }
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();
  }

  while (particles.length > 2000) {
    particles.splice(0, 1); // (index, howMany);
  }
}

class particle {
  constructor(x, y, dia, r, g, b) {
    this.x = x;
    this.y = y;
    this.dia = dia;
    this.r = r;
    this.g = g;
    this.b = b
  }
  update() {
    this.dia = random(10, 20)
    this.x += map(mouseX, 0, 1000, -25, 25);
    this.y += map(mouseY, 0, 1000, -25, 25);
  }
  display() {
    noStroke();
    fill(this.r, this.g, this.b)
    circle(this.x, this.y, this.dia);
  }
}

function handleFile(file) {
  if (file.type === 'image') {
    img = loadImage(file.data, function () {
      img.resize(800, 800);
      resizeCanvas(img.width, img.height);
    });
  } else {
    console.error('Uploaded file is not an image!');
  }
}

