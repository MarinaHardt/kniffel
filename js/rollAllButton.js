import Button from "./button.js";

export default class RollAllButton extends Button {
  constructor(x, y, width, height, title, dice, counterClick) {
    super(x, y, width, height);
    this.title = title;
    this.dice = dice;
    this.enabled = true;
    this.counterClick = counterClick;
  }
  display() {
    if (this.counterClick[0] === 0) {
      fill("#cd8b36");
    } else if (this.counterClick[0] === 3 || this.enabled === false) {
      fill("#4d385a");
    } else {
      fill("#8b5a39");
    }
    rect(this.x, this.y, this.width, this.height, this.width / 15);

    fill("#2c103e");
    textSize(15);
    textAlign(CENTER, CENTER);
    text(this.title, this.x + this.width / 2, this.y + this.height / 2);
  }

  clicked() {
    this.counterClick[0]++;
    // Falls gedrückt würfelt er die Würfel
    // Bei Klick Würfel aktivieren/deaktivieren
    if (this.counterClick[0] === 4) {
      this.enabled = false;
    } else if (this.counterClick[0] <= 3) {
      this.enabled = true;
      for (let index in this.dice) {
        this.dice[index].roll();
      }
    }
  }
}
