let img;
let gridSize = 15;
let showText = true;
let particles = []

function preload() {
  sound1 = loadSound("assets/dreamsound.mp3");
}

function setup() {
  let fileInput = createFileInput(handleFile);
  fileInput.position(650, 100);

  let canvas = createCanvas(1000, 1000);
  canvas.parent("p5-canvas-container");

  // background(220)

}

function draw() {
  textSize(30)
  if (showText) {
    fill(255);
    textAlign(CENTER)
    text("click the button and", 500, 550);
    text("upload one memory(img).", 500, 500);

  }

  if (img) {
    showText = false;
    img.loadPixels();

    if (mouseIsPressed) {
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
    } else {
      for (let y = 0; y < img.height; y += gridSize) {
        for (let x = 0; x < img.width; x += gridSize) {
          let index = (x + y * img.width) * 4;
          let r = img.pixels[index + 0];
          let g = img.pixels[index + 1];
          let b = img.pixels[index + 2];
          particles.push(new particle(x, y, 10));
          // fill(r, g, b);
          // noStroke();
          // rect(x + random(-mouseX, mouseX), y + random(-5, 5), gridSize, gridSize);
          // push the particle



        }


      }
      for (let i = 0; i < 10000; i++) {
        // let x = map(mouseX, 0, 100, 0, 50);
        // let y = map(mouseY, 0, 100, 0, 50);
        let p = particles[i];
        p.update();
        p.display();
      }
    }
  }
}

class particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    // this.r = r;
    // this.g = g;
    // this.b = b

  }
  update() {
    this.dia = random(10, 20)
    this.x += map(mouseX, 0, 1000, 0, 50);
    this.y += map(mouseY, 0, 1000, 0, 50);
  }
  display() {
    // fill(this.r, this.g, this.b)
    circle(this.x, this.y, this.dia);
  }
}

function handleFile(file) {
  if (file.type === 'image') {
    img = loadImage(file.data, function () {
      resizeCanvas(img.width, img.height);
    });
  } else {
    console.error('Uploaded file is not an image!');
  }
}

