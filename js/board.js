import Button from "./button.js";

export default class Row extends Button {
  constructor(x, y, width, height, text, wurfel, value, counterClick, state) {
    super(x, y, width, height);
    this.text = text;
    this.wurfel = wurfel;
    this.value = value;
    this.enabled = true;
    this.counterClick = counterClick;
    this.state = state;
  }
  display() {
    let display;
    if (this.enabled) {
      fill("#cd8b36");
      display = this.countEyes();
    } else if (this.state[0] === 0) {
      fill("#cd8b36");
      this.enabled = true;
      display = 0;
    } else {
      fill("#4d385a");
      display = this.fixedvalue;
    } 
    rect(this.x, this.y, this.width, this.height, this.width / 35);

    noStroke();
    fill("#2c103e");
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
      this.counterClick[0] = 0;
      for (let index in this.wurfel) {
        this.wurfel[index].enabled = true;
      }
    }
  }
}
