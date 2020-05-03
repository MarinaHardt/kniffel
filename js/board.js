import Button from "./button.js";

export default class Row extends Button {
  constructor(x, y, width, height, text, wurfel, value) {
    super(x, y, width, height);
    this.text = text;
    this.wurfel = wurfel;
    this.value = value;
    this.enabled = true;
  }
  display() {
    let display;
    if (this.enabled) {
      fill("grey");
      display = this.countEyes();
    } else {
      fill("lightgrey");
      display = this.fixedvalue;
    }
    rect(this.x, this.y, this.width, this.height, this.width / 15);

    noStroke();
    fill("white");
    textSize(15);
    textAlign(LEFT, CENTER);
    text(this.text + display, this.x + 15, this.y + this.height / 2);
  }

  countEyes() {
    let counter = 0;
    // Jeden Würfel durchgehen
    for (let index in this.wurfel) {
      // this.wurfel[index].value = Wert des Würfels, this.value = Wert der row
      if (this.wurfel[index].value === this.value) {
        counter++;
      }
    }
    let result = counter * this.value;
    return result;
  }

  clicked() {
    if (this.enabled) {
      this.enabled = false;
      this.fixedvalue = this.countEyes();
    }
  }
}
