function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {
    let x = 10;

    for (let x = 0; x < width; x = x + 10) {
        stroke(255, 204, 0);
        triangle(x, 0, 200, x, 200, x);
        stroke(255, 0, 200);
        triangle(x, 150, 200, x, 200, x);
        stroke(0, 255, 200);
        triangle(x, 300, 200, x, 200, x);
        stroke(0, 155, 250);
        triangle(x, 450, 200, x, 200, x);

        stroke(255, 150, 100);
        triangle(x + 200, 750, width, x + 300, width, x + 700);
        stroke(200, 155, 250);
        triangle(x + 200, 750, width, x, width, x);
    }
}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}