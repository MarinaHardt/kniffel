import Button from "./button.js";

export default class Dice extends Button {
  constructor(x, y) {
    super(x, y, 60, 60);
    this.value = this.getRandomValue();
    this.enabled = true;
  }

  getRandomValue() {
    return floor(random(1, 7));
  }

  roll() {
    // Falls ein Würfel aktiviert ist (s.u.) wird er auch gewürfelt
    if (this.enabled) {
      this.value = this.getRandomValue();
      return this.value;
    }
  }

  display() {
    // Farbe bei Aktivierung/ Deaktivierung der Würfel
    if (this.enabled) {
      fill("#cd8b36");
      rect(this.x, this.y, 60, 60, 6);
      fill("#2c103e");
    } else {
      fill("#4d385a");
      rect(this.x, this.y, 60, 60, 6);
      fill("#2c103e");
    }
    noStroke();
    // Augenzahlen
    if (this.value == 1) {
      ellipse(this.x + 30, this.y + 30, 10);
    } else if (this.value == 2) {
      ellipse(this.x + 15, this.y + 15, 10);
      ellipse(this.x + 45, this.y + 45, 10);
    } else if (this.value == 3) {
      ellipse(this.x + 15, this.y + 15, 10);
      ellipse(this.x + 30, this.y + 30, 10);
      ellipse(this.x + 45, this.y + 45, 10);
    } else if (this.value == 4) {
      ellipse(this.x + 15, this.y + 15, 10);
      ellipse(this.x + 15, this.y + 45, 10);
      ellipse(this.x + 45, this.y + 45, 10);
      ellipse(this.x + 45, this.y + 15, 10);
    } else if (this.value == 5) {
      ellipse(this.x + 30, this.y + 30, 10);
      ellipse(this.x + 15, this.y + 15, 10);
      ellipse(this.x + 15, this.y + 45, 10);
      ellipse(this.x + 45, this.y + 45, 10);
      ellipse(this.x + 45, this.y + 15, 10);
    } else if (this.value == 6) {
      ellipse(this.x + 15, this.y + 15, 10);
      ellipse(this.x + 15, this.y + 30, 10);
      ellipse(this.x + 15, this.y + 45, 10);
      ellipse(this.x + 45, this.y + 45, 10);
      ellipse(this.x + 45, this.y + 30, 10);
      ellipse(this.x + 45, this.y + 15, 10);
    }
  }

  clicked() {
    // Bei Klick Würfel aktivieren/deaktivieren
    if (this.enabled) {
      this.enabled = false;
    } else {
      this.enabled = true;
    }
  }
}
