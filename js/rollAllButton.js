import Button from "./button.js";

export default class RollAllButton extends Button {
  constructor(x, y, width, height, title, dice) {
    super(x, y, width, height);
    this.title = title;
    this.dice = dice;
    this.enabled = true;
  }
  display() {
    if (this.enabled) {
      fill("pink");
    } else {
      fill("#f56c87");
    }
    rect(this.x, this.y, this.width, this.height, this.width / 15);

    fill("white");
    textSize(15);
    textAlign(CENTER, CENTER);
    text(this.title, this.x + this.width / 2, this.y + this.height / 2);
  }

  clicked() {
    // Falls gedrückt würfelt er die Würfel
    // Bei Klick Würfel aktivieren/deaktivieren
    if (this.enabled) {
      this.enabled = false;
      for (let index in this.dice) {
        this.dice[index].roll();
      }
    } else {
      this.enabled = true;
    }
  }
}
