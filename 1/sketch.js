function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {
    let x = 10;
    fill(20, random(0, 250), random(0, 250));
    for (let x = 10; x <= width - 10; x += 30) {
        for (let y = 10; y <= height - 20; y += 40) {
            ellipse(x, random(0, 20), random(0, 20), random(0, 2000));
        }
    }
}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}