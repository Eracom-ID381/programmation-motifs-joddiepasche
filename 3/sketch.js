function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {

    for (let x = 0; x < width; x = x + 10) {
        for (let y = 0; y < height; y = y + 10) {
            ellipse(x, y, width, height / 2);
        }
    }
}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}