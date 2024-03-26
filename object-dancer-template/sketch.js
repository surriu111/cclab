/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new YourNameDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class YourNameDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.dia1 = 15
    this.dia2 = 10
    this.dia3 = 10
    this.dia4 = 10
    this.dia5 = 10
    this.dia6 = 10
    this.dia7 = 10





    // add properties for your dancer here:
    //..
    //..
    //..
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour

    this.dia1 = 10 * sin(frameCount / 30)
    this.dia2 = 10 * sin(frameCount / 30 + 10)
    this.dia3 = 10 * sin(frameCount / 30 + 20)
    this.dia4 = 14 * sin(frameCount / 30 + 30)
    this.dia5 = 10 * sin(frameCount / 30 + 40)
    this.dia6 = 10 * sin(frameCount / 30 + 50)
    this.dia7 = 10 * sin(frameCount / 30 + 60)

    this.legx1 = -100 + 30 * sin(frameCount / 30)
    this.legy1 = 0 - 30 * sin(frameCount / 30)
    this.legx2 = -50 + 30 * sin(frameCount / 30 + 30)
    this.legy2 = 50 + 10 * sin(frameCount / 30 + 30)
    this.legx3 = -70 - 40 * sin(frameCount / 30)
    this.legy3 = 120 - 20 * sin(frameCount / 30)

    this.legx4 = -100 + 10 * sin(frameCount / 30 + 30) + 20
    this.legy4 = 0 + 10 * sin(frameCount / 30 + 30) + 20
    this.legx5 = -100 + 30 * sin(frameCount / 30 + 60) + 20
    this.legy5 = 70 + 30 * sin(frameCount / 30 + 60) + 20
    this.legx6 = -70 + 20 * sin(frameCount / 30 + 90) - 20
    this.legy6 = 120 + 20 * sin(frameCount / 30 + 90) - 20

    this.legx7 = -100 + 30 * sin(frameCount / 30 + 30) + 50
    this.legy7 = 0 - 10 * sin(frameCount / 30 + 30)
    this.legx8 = -20 + 30 * sin(frameCount / 30 + 60)
    this.legy8 = 70 + 30 * sin(frameCount / 30 + 60)
    this.legx9 = -40 - 30 * sin(frameCount / 30)
    this.legy9 = 100 - 10 * sin(frameCount / 30)

    this.legx10 = 0 + 30 * sin(frameCount / 30)
    this.legy10 = 0 + 30 * sin(frameCount / 30) + 50
    this.legx11 = 0 + -30 * sin(frameCount / 30 + 30)
    this.legy11 = 70 + 30 * sin(frameCount / 30 + 30)
    this.legx12 = 0 + 30 * sin(frameCount / 30)
    this.legy12 = 100 - 10 * sin(frameCount / 30)

    this.legx13 = -(-100 + 30 * sin(frameCount / 30 + 30) + 20)
    this.legy13 = 0 + 10 * sin(frameCount / 30 + 30) + 20
    this.legx14 = -(-100 + 30 * sin(frameCount / 30 + 60) + 20)
    this.legy14 = 70 + 30 * sin(frameCount / 30 + 60) + 20
    this.legx15 = -(-70 + 20 * sin(frameCount / 30 + 90) - 100)
    this.legy15 = 120 + 20 * sin(frameCount / 30 + 90) - 20


    this.legx16 = -(-100 + 30 * sin(frameCount / 30 + 30) + 50)
    this.legy16 = 0 + 10 * sin(frameCount / 30 + 30) + 50
    this.legx17 = - (-20 + 30 * sin(frameCount / 30 + 60)) + 30
    this.legy17 = 70 + 30 * sin(frameCount / 30 + 60)
    this.legx18 = - (-40 + 30 * sin(frameCount / 30)) + 40
    this.legy18 = 100 + 10 * sin(frameCount / 30)

    this.legx19 = -(-100 + 50 * sin(frameCount / 30 + 30) + 20) - 50
    this.legy19 = 0 + 10 * sin(frameCount / 30 + 30) + 20
    this.legx20 = -(-20 + 30 * sin(frameCount / 30 + 60))
    this.legy20 = 70 + 30 * sin(frameCount / 30 + 60)
    this.legx21 = - (-40 + 30 * sin(frameCount / 30)) - 10
    this.legy21 = 100 + 10 * sin(frameCount / 30) + 20

    this.x1 = this.x1 + 1
    this.y1 = this.y1 + 1
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.

    push();
    translate(this.x, this.y);




    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    //body
    noStroke()
    translate(this.x1, this.y1)
    push()
    //leg

    strokeWeight(8);
    stroke('#dfafb9');
    noFill();
    bezier(-20, -55, this.legx1, this.legy1, this.legx2, this.legy2, this.legx3, this.legy3);
    stroke(' #b3808b');
    bezier(-17, -50, this.legx4, this.legy4, this.legx5, this.legy5, this.legx6, this.legy6);
    stroke(' #9d626f');
    bezier(-10, -45, this.legx7, this.legy7, this.legx8, this.legy8, this.legx9, this.legy9);
    stroke('#81565f');
    bezier(0, -42, this.legx10, this.legy10, this.legx11, this.legy11, this.legx12, this.legy12);
    stroke('#dfafb9');
    bezier(20, -55, this.legx13, this.legy13, this.legx14, this.legy14, this.legx15, this.legy15);
    stroke(' #b3808b');
    bezier(17, -50, this.legx16, this.legy16, this.legx17, this.legy17, this.legx18, this.legy18);
    stroke(' #9d626f');
    bezier(10, -45, this.legx19, this.legy19, this.legx20, this.legy20, this.legx21, this.legy21);
    //mouth
    noStroke()
    fill('#dfccaf')
    circle(0, -42, this.dia4)
    circle(-20, -55, this.dia1)
    circle(20, -55, this.dia7)
    circle(-10, -45, this.dia3)
    circle(10, -45, this.dia5)
    circle(-17, -50, this.dia2)
    circle(17, -50, this.dia6)
    //face
    fill('#bb8b96')
    ellipse(0, -70, 50, 55)
    fill(0)
    circle(-10, -60, 5)
    circle(10, -60, 5)
    //smile
    strokeWeight(1);
    stroke(0);
    noFill();
    bezier(-8, -50, 0, -47, -1, -47, 8, -50);
    pop()


    //leg



    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/