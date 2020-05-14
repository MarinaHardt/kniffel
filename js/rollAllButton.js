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
    // 0x gewürfelt
    if (this.counterClick[0] === 0) {
      fill("#cd8b36");
    }
    // bis 3x gewürfelt
    else if (this.counterClick[0] === 3 || this.enabled === false) {
      fill("#4d385a");
    }
    // 3x gewürfelt
    else {
      fill("#8b5a39");
    }
    rect(this.x, this.y, this.width, this.height, this.width / 15);

    fill("#2c103e");
    textSize(15);
    textAlign(CENTER, CENTER);
    text(
      this.title + this.countTimesRoll() + "/3",
      this.x + this.width / 2,
      this.y + this.height / 2
    );
  }
  // Anzeigen wie oft man gewürfelt hat
  countTimesRoll() {
    if (this.counterClick[0] <= 3) {
      return this.counterClick[0];
    } else if (this.counterClick[0] > 3) {
      return 3;
    }
  }

  clicked() {
    // zählt, wie oft auf den RollAllButton geclickt wurde = würfeln
    this.counterClick[0]++;
    // nach dem 3. Wurf ist der Button deaktiviert
    if (this.counterClick[0] > 3) {
      this.enabled = false;
    } else if (this.counterClick[0] <= 3) {
      this.enabled = true;
      // geht den Array der Würfel durch
      for (let index in this.dice) {
        this.dice[index].roll();
      }
    }
  }
}
