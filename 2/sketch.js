function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {

    let x = 0;
    while (x < width) {
        fill(255);
        ellipse(x, height / 2, 10, 10);
        x = x + 10;
    }
}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}