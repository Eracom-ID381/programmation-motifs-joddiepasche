function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {
    let x = 10;
    fill(0);
    for (let x = 50; x <= width - 50; x += 20) {
        for (let y = 50; y <= height - 50; y += 20) {
            ellipse(x, random(0, 20), random(0, 20), random(0, 2000));
        }
    }
}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}