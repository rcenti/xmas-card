let backgroundImage;
let maiBig;
let maiSmall;
let font;
let star;
let treeDecor;
let clicked = false;
let textData;
let currentText = 0;

function preload() {
    font = loadFont('assets/CrimsonText-Regular.ttf');
    backgroundImage = loadImage('assets/pixilart-drawing.png');
    maiBig = loadImage('assets/portrait.png');
    maiSmall = loadImage('assets/pixil-frame-0 (1).png');
    star = loadImage('assets/pixil-frame-0.png');
    treeDecor = loadImage('assets/treedecor.png');
    textData = loadStrings('assets/christmas card.txt');
}

function setup() {
    imageMode(CENTER);
    createCanvas(600,600);
    textFont(font);
    textAlign(CENTER, CENTER);
}

function draw() {
    background(255);
    rect(0, 500, 600, 100)
    welcomeScreen();
    fill(242, 230, 220);
    text()
    
    //image(backgroundImage, width/2, height/2, 600, 600);

}

function welcomeScreen() {
    textSize(20);
    textAlign(CENTER, CENTER);
    fill(0);
    
    if (!clicked) {
        text("Click to start", width / 2, width - 60);
    } else {
        rectangleClicked();
        text("it was the night before christmas.", width / 2, width - 60);
    }
}






function rectangleClicked() {
    const rw = 600;
    const rh = 100;
    const rx = 0;
    const ry = height-rh;
  
// Check if mouse is inside the rectangle
    if (
        mouseX >= rx - rw/2 && mouseX <= rx + rw/2 &&
        mouseY >= ry - rh/2 && mouseY <= ry + rh/2
    ) {
        clicked = true;   // change state
    }
}
 

function mousePressed() {
    rectangleClicked();

}
