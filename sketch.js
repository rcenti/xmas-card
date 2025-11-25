let backgroundImage;
let maiBig;
let maiSmall;
let font;
let star;
let clicked = false;

function preload() {
    font = loadFont('assets/CrimsonText-Regular.ttf');
    backgroundImage = loadImage('assets/pixilart-drawing.png');
    maiBig = loadImage('assets/portrait.png');
    maiSmall = loadImage('assets/pixil-frame-0 (1).png');
    star = loadImage('assets/pixil-frame-0.png');
}

function setup() {
    imageMode(CENTER);
    createCanvas(600,600);
    textFont(font);
    textAlign(CENTER, CENTER);
    

}

function draw() {
    background(255);
    rectMode(CENTER);
    rect(width /2 , 580, 600, // fix this code );
    welcomeScreen();

    fill(242, 230, 220);
    
    //image(backgroundImage, width/2, height/2, 600, 600);

}

function welcomeScreen() {
    textSize(32);
    fill(0);
    
    if (!clicked) {
        text("Click to start", width / 2, height / 2);
    } else {
        text("it was the night before christmas.", width / 2, height / 2);
    }
}






function rectangleClicked() {
    const rw = 500;
    const rh = 100;
    const rx = width / 2;
    const ry = height - rh;
  
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
