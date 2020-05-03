import Button from "./button.js";

export default class restartButton extends Button {
  constructor(x, y, width, height, title, state) {
    super(x, y, width, height);
    this.title = title;
    this.state = 1;
  }
  display() {
    fill("#f56c87");
    rect(this.x, this.y, this.width, this.height, this.width / 15);

    fill("white");
    textSize(15);
    textAlign(CENTER, CENTER);
    text(this.title, this.x + this.width / 2, this.y + this.height / 2);
  }

  clicked() {
    this.state = 0;
  }
}
