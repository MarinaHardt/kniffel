let sketch = new p5();
let width = windowWidth;
let height = windowHeight;

function setup() {
  sketch.createCanvas(windowWidth, windowHeight);
  sketch.frameRate(30);
}

function windowResized() {
  sketch.resizeCanvas(windowWidth, windowHeight);
}

window.setup = setup;
window.addEventListener("resize", windowResized);
