import Button from "./button.js";

export default class Sum extends Button {
  constructor(x, y, width, height, text, row1, row2, row3, row4, row5, row6) {
    super(x, y, width, height);
    this.text = text;
    this.row1 = row1;
    this.row2 = row2;
    this.row3 = row3;
    this.row4 = row4;
    this.row5 = row5;
    this.row6 = row6;
  }
  display() {
    fill("#4d385a");
    rect(this.x, this.y, this.width, this.height, this.width / 15);

    noStroke();
    fill("#cd8b36");
    textSize(15);
    textAlign(LEFT, CENTER);
    text(this.text + this.sumAll(), this.x + 15, this.y + this.height / 2);
  }

  sumAll() {
    let gesamt = 0;
    return gesamt;
  }
}
