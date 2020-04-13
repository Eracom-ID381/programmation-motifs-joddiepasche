function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {

    let x = 0;
    while (x < width) {
        fill(80, random(0, 220), 250);
        ellipse(500, 500, random(30, 1000), random(30, 1000));
        x = x + 10;
    }
}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}