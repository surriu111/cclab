// let inputField;
// let userInput = '';
// let lineHeight = 15;
// let charCount = [5, 10, 15, 20, 25, 26, 26, 28, 29, 29, 29, 29, 29, 10, 16, 26, 30, 22, 24, 22, 15, 10, 8, 5, 3];
// let b = [0, -0.5, -2, -1.5, -2, -3.5, -3, -3.5, -5, -4.5, -6, -5.5, -15, -12, -7, -5, -6, -6.5, -5.5, -6, -6.5, -5, -3, -2, -2]
// let c = 0;
// let d = 0.01;

// let startTime;
// let endTime;
// let longPressDuration = 10000000;

// function updateText() {
//     userInput = inputField.value();
// }

// function setup() {

//     let canvas = createCanvas(800, 500);
//     canvas.parent("p5-canvas-container")

//     inputField = createInput();
//     inputField.position(600, 740);
//     inputField.input(updateText);

//     textSize(10);
//     textAlign(LEFT, TOP);
//     textFont("Kode Mono")
// }

// function draw() {
//     background(0, d);

//     translate(width / 2, height / 2);


//     let xPos = -300;
//     let yPos = -200;

//     let charIndex = 0;
//     let a = 0;
//     let c = 0;

//     for (let i = 0; i < userInput.length; i++) {

//         if (a >= charCount.length) {
//             break;
//         }

//         let character = userInput.charAt(i);


//         fill(255)
//         text(character, xPos, yPos);


//         let symmetricX = xPos + 200;


//         push();
//         scale(-1, 1);
//         text(character, symmetricX, yPos);
//         pop();

//         xPos += textWidth(character);
//         charIndex++;

//         if (charIndex >= charCount[a]) {
//             xPos = -300 - 10 * b[c];
//             yPos += lineHeight;


//             a++;
//             c++;
//             charIndex = 0;
//         }

//         if (mouseIsPressed) {
//             translate(mouseX, mouseY);
//             rotate(frameCount / 60);
//             if (!startTime) {
//                 startTime = millis();
//             }
//         } else {

//             if (startTime) {
//                 endTime = millis();
//                 let pressDuration = endTime - startTime;
//                 if (pressDuration >= longPressDuration) {
//                     clear()
//                     background(0)
//                     //   noLoop()
//                     translate(0, 0)
//                     fill(0, 10)
//                     circle(0, 0, 10)
//                 }
//             }

//         }

//         // background(0, d);
//     }


// }
// function mousePressed() {
//     if (d < 255) {
//         d += 1;
//     }
// }

// // function doubleClicked(){
// //  clear()
// //       // background(0)
// //       noLoop()
// //         translate(0,0)
// //     fill(255,10)
// //     circle(0,0,10)
// // }

let randomX = 0; // 初始化随机X坐标
let randomY = 0; // 初始化随机Y坐标
let fly = false;
let enterCount = 0;
let inputField;
let userInput = "";
let lineHeight = 15;
let charCount = [5, 10, 15, 20, 25, 26, 26, 28, 29, 25, 29, 29, 29, 10, 16, 26, 30, 22, 24, 22, 15, 10, 8, 5, 3];
let b = [0, -0.5, -2, -1.5, -2, -3.5, -3, -3.5, -5, -4.5, -6, -5.5, -15, -12, -7, -5, -6, -6.5, -5.5, -6, -6.5, -5, -3, -2, -2];
let startX = -220;
let bgOpacity = 0;
let maxRange = 50;
let maxSpeed = 10; // 最大速度
let bigger = 0

function setup() {
    let canvas = createCanvas(800, 500);
    canvas.parent("p5-canvas-container")

    inputField = createInput();
    inputField.position(600, 740)
    inputField.input(updateText);

    textAlign(LEFT, TOP);
    textFont("Kode Mono");

    textSize(20);
    textFont("Kode Mono");
    text("Tell me anything that you want to share", 100, 120);

    textSize(10);
}

function draw() {
    background(0, bgOpacity);

    push();
    translate(width / 2, height / 2);

    // 定义新的目标位置
    let newX = mouseX - 400;
    let newY = mouseY - 200;

    let dx = random(-maxSpeed, maxSpeed) * 0.1; // 减小速度增量
    let dy = random(-maxSpeed, maxSpeed) * 0.1;

    randomX = constrain(randomX + dx, newX - maxRange, newX + maxRange);
    randomY = constrain(randomY + dy, newY - maxRange, newY + maxRange);

    if (fly == true) {
        let sinValue = sin(frameCount * 0.1);
        translate(randomX + 20 * sinValue, randomY + 20 * sinValue);
        scale(sinValue * 0.3 + bigger, 0.3 + bigger);
    }

    let xPos = startX;
    let yPos = -200;

    let charIndex = 0;
    let a = 0;
    let c = 0;

    for (let i = 0; i < userInput.length; i++) {
        if (a >= charCount.length) {
            break;
        }

        let character = userInput.charAt(i);

        fill(255);
        text(character, xPos, yPos);

        let symmetricX = xPos + 30;

        push();
        scale(-1, 1);
        text(character, symmetricX, yPos);
        pop();

        xPos += textWidth(character);
        charIndex++;

        if (charIndex >= charCount[a]) {
            xPos = startX - 10 * b[c];
            yPos += lineHeight;

            a++;
            c++;
            charIndex = 0;
        }

        if (mouseIsPressed) {
            translate(mouseX + 100, mouseY);
            rotate(frameCount / 60);
        }
    }
    pop();
}

function keyPressed() {
    if (bgOpacity < 255) {
        bgOpacity += 0.09;
    }
    if (keyCode == ENTER) {
        fly = true;
        bgOpacity = 100;
        enterCount++;
    }
    if (keyCode == SHIFT) {
        bigger = 0.1 + bigger
    }
    if (bigger > 0.5) {
        bigger = bigger - 0.5
    }
}

function updateText() {
    userInput = inputField.value();
}
