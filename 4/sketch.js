function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {
    for (let x = 0; x < width; x = x + 10) {
        for (let y = 0; y < width; y = y + 10) {
            triangle(1000, random(0, 1000), 10, 0, 0, 0);
            triangle(300, random(0, 1000), 1800, 1800, 1800, 1800);
        }
    }
}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}