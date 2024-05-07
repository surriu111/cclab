let img;
let gridSize = 10;
let showText = true;

function preload() {
  sound1 = loadSound("assets/dreamsound.mp3");
}

function setup() {
  let fileInput = createFileInput(handleFile);
  fileInput.position(650, 100);

  let canvas = createCanvas(1000, 1000);
  // canvas.parent("p5-canvas-container");

  // background(220)

}

function draw() {
  textSize(30)
  if (showText) {
    fill(255);
    text("click the button and", 600, 450);
    text("upload one memory(img).", 600, 500);
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
      image(img, 0, 0, 700, 700);
    } else {
      for (let y = 0; y < img.height; y += gridSize) {
        for (let x = 0; x < img.width; x += gridSize) {
          let index = (x + y * img.width) * 4;
          let r = img.pixels[index + 0];
          let g = img.pixels[index + 1];
          let b = img.pixels[index + 2];

          fill(r, g, b);
          noStroke();
          rect(x + random(-mouseX, mouseX), y + random(-5, 5), gridSize, gridSize);
          // push the particle
        }
      }
    }
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

