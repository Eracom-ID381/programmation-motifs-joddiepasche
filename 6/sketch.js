function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {
    let x = 10;
    let y = 20
    fill(255);
    while (x < height) {
        ellipse(x, height / 2, 30, 10);
        ellipse(x, y, 30, 30);
        x = x + 10;
        y = y + 30;
    }
}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}