import Dice from "./dice.js";
import RollAllButton from "./rollAllButton.js";
import Row from "./board.js";
import Sum from "./sum.js";
import restartButton from "./restartButton.js";

let state = [0];
let counterClick = [0];

// For-Schleife für die Erstellung der Würfel
let dice = [];
for (let i = 0; i < 5; i++) {
  let d = new Dice(50, 70 + i * 70);
  dice.push(d);
}

let rollAll = new RollAllButton(
  150,
  380,
  110,
  30,
  "Roll All",
  dice,
  counterClick
);

let row1 = new Row(150, 70, 110, 30, "Einser: ", dice, 1, counterClick, state);
let row2 = new Row(150, 110, 110, 30, "Zweier: ", dice, 2, counterClick, state);
let row3 = new Row(150, 150, 110, 30, "Dreier: ", dice, 3, counterClick, state);
let row4 = new Row(150, 190, 110, 30, "Vierer: ", dice, 4, counterClick, state);
let row5 = new Row(150, 230, 110, 30, "Fünfer: ", dice, 5, counterClick, state);
let row6 = new Row(
  150,
  270,
  110,
  30,
  "Sechser: ",
  dice,
  6,
  counterClick,
  state
);
let sum = new Sum(150, 340, 110, 30, "Gesamt: ", dice, 6);
let restart = new restartButton(280, 70, 110, 30, "Neustart", state);

function startScreen() {
  if (mouseIsPressed) {
    state[0] = 1;
  }

  background("#2c103e");

  noStroke();
  fill("#cd8b36");

  //image(kniffel, 100, 100, 100, 100);

  textAlign(CENTER, CENTER);
  textSize(15);
  text("C L I C K  A N Y W H E R E", windowWidth / 2, 100);
}

function mouseClicked() {
  for (let index in dice) {
    dice[index].mouseClicked();
  }
  rollAll.mouseClicked();

  row1.mouseClicked();
  row2.mouseClicked();
  row3.mouseClicked();
  row4.mouseClicked();
  row5.mouseClicked();
  row6.mouseClicked();

  restart.mouseClicked();
}

function draw() {
  background("#2c103e");

  if (state[0] === 0) {
    startScreen();
  }

  if (state[0] === 1) {
    row1.display();
    row2.display();
    row3.display();
    row4.display();
    row5.display();
    row6.display();

    for (let index in dice) {
      dice[index].display();
    }
    rollAll.display();
    sum.display();
    restart.display();
  }
}

window.startScreen = startScreen;
window.mouseClicked = mouseClicked;
window.draw = draw;
