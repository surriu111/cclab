let cam;
let img;

function setup() {
  let canvas = createCanvas(640, 480);
  canvas.parent("p5-canvas-container");
  background(220);

  cam = createCapture(VIDEO);
  cam.hide();
  img = createImage(640, 480); // blank image
}

function draw() {
  background(220);

  //image(cam, 0, 0);
  cam.loadPixels();
  img.loadPixels();
  // now we can access the cam.pixels and img.pixels arrays!
  for (let y = 0; y < cam.height; y++) {
    for (let x = 0; x < cam.width; x++) {
      // each pixel's index
      let index = (x + y * cam.width) * 4;

      // get color data from each pixel
      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];
      let a = cam.pixels[index + 3];

      let avg = (r + g + b) / 3;

      // manipulate and apply it to the image "img"
      img.pixels[index + 0] = avg + random(-10, 10);
      img.pixels[index + 1] = avg + random(-10, 10);
      img.pixels[index + 2] = avg + random(-10, 10);
      img.pixels[index + 3] = 255;

    }
  }
  img.updatePixels();

  image(img, 0, 0);
}