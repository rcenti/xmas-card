let backgroundImage;
let maiBig;
let maiSmall;
let font;
let star;

function preload() {
    font = loadFont('assets/CoromorantGaramond-Italic-VariableFont_wght.ttf');
    backgroundImage = loadImage('assets/pixilart-drawing.png');
    maiBig = loadImage('assets/portrait.png');
    maiSmall = loadImage('assets/pixil-frame-0 (1).png');
    star = loadImage('assets/pixil-frame-0.png');
}

function setup() {
    imageMode(CENTER);
    createCanvas(600,600);
    textFont(font);

}

function draw() {
    background(backgroundImage);
}