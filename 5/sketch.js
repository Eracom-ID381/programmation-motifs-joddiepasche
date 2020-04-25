function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {
    let x = 10;
    let y = 20
    fill(200, 0, 220);

    for (let x = 0; x < width; x = x + 10) {
        for (let y = 0; y < height; y = y + 50)
            triangle(y, y, 1000, y, 25, y);
        triangle(x, 0, 200, x, 200, x);
    }
}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}