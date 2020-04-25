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

    for (let x = 0; x < width; x = x + 50) {
        for (let y = 0; y < height; y = y + 50)
            triangle(x, x, 24, y, 45, y)
    }
}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}