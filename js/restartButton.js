import Button from "./button.js";

export default class restartButton extends Button {
  constructor(x, y, width, height, title, state) {
    super(x, y, width, height);
    this.title = title;
    this.state = state;
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
    }
  }
}
