import Button from "./button.js";

export default class Row extends Button {
  constructor(x, y, width, height, text, wurfel, value, counterClick) {
    super(x, y, width, height);
    this.text = text;
    this.wurfel = wurfel;
    this.value = value;
    this.enabled = true;
    this.counterClick = counterClick;
  }
  display() {
    let display;
    if (this.enabled) {
      fill("#cd8b36");
      display = this.countEyes();
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
    // Zähler für Augen
    let counter = 0;
    // Jeden Würfel durchgehen
    for (let index in this.wurfel) {
      // this.wurfel[index].value = Wert des Würfels, this.value = Wert der row
      if (this.wurfel[index].value === this.value) {
        counter++;
      }
    }
    // Result nimmt den Wert des jeweiligens Würfels & Rows
    let result = counter * this.value;
    return result;
  }

  clicked() {
    // Reihe wird ausgewählt
    if (this.enabled) {
      this.enabled = false;
      // Wert bleibt konstant und ändert sich nicht mehr
      this.fixedvalue = this.countEyes();
      // Clickzähler wird wieder auf 0 gesetzt
      this.counterClick[0] = 0;
      // Würfel werden wieder aktiviert
      for (let index in this.wurfel) {
        this.wurfel[index].enabled = true;
        for (let index in this.wurfel) {
          this.wurfel[index].roll();
        }
      }
    }
  }

  restart() {
    this.enabled = true;
    this.counterClick[0] = 0;
    for (let index in this.wurfel) {
      this.wurfel[index].enabled = true;
    }
  }
}
