import Button from "./button.js";

export default class restartButton extends Button {
  constructor(
    x,
    y,
    width,
    height,
    title,
    state,
    row1,
    row2,
    row3,
    row4,
    row5,
    row6,
    dice
  ) {
    super(x, y, width, height);
    this.title = title;
    this.state = state;
    this.row1 = row1;
    this.row2 = row2;
    this.row3 = row3;
    this.row4 = row4;
    this.row5 = row5;
    this.row6 = row6;
    this.dice = dice;
  }
  display() {
    fill("#8b5a39");
    rect(this.x, this.y, this.width, this.height, this.width / 15);

    fill("#2c103e");
    textSize(15);
    textAlign(CENTER, CENTER);
    text(this.title, this.x + this.width / 2, this.y + this.height / 2);
  }

  clicked() {
    if (this.state[0] === 1) {
      this.state[0] = 0;
      this.row1.restart();
      this.row2.restart();
      this.row3.restart();
      this.row4.restart();
      this.row5.restart();
      this.row6.restart();
      for (let index in this.dice) {
        this.dice[index].roll();
      }
    }
  }
}
