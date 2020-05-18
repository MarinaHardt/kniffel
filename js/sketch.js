import Dice from "./dice.js";
import RollAllButton from "./rollAllButton.js";
import Row from "./board.js";
import Sum from "./sum.js";
import restartButton from "./restartButton.js";

let kniffel;
function preload() {
  kniffel = loadImage("assets/kniffel.png");
}

let state = [0];
let counterClick = [1];

// For-Schleife für die Erstellung der Würfel
let dice = [];
for (let i = 0; i < 5; i++) {
  let d = new Dice(50, 70 + i * 70);
  dice.push(d);
}

let row1 = new Row(150, 70, 110, 30, "Einser: ", dice, 1, counterClick);
let row2 = new Row(150, 110, 110, 30, "Zweier: ", dice, 2, counterClick);
let row3 = new Row(150, 150, 110, 30, "Dreier: ", dice, 3, counterClick);
let row4 = new Row(150, 190, 110, 30, "Vierer: ", dice, 4, counterClick);
let row5 = new Row(150, 230, 110, 30, "Fünfer: ", dice, 5, counterClick);
let row6 = new Row(150, 270, 110, 30, "Sechser: ", dice, 6, counterClick);
let sum = new Sum(
  150,
  340,
  110,
  30,
  "Gesamt: ",
  row1,
  row2,
  row3,
  row4,
  row5,
  row6
);
let rollAll = new RollAllButton(
  150,
  380,
  110,
  30,
  "Würfeln: ",
  dice,
  counterClick
);
let restart = new restartButton(
  500,
  275,
  110,
  30,
  "Neustart",
  state,
  row1,
  row2,
  row3,
  row4,
  row5,
  row6,
  sum,
  dice
);

function mouseClicked() {
  restart.mouseClicked();

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
}

function startScreen() {
  if (mouseIsPressed) {
    state[0] = 1;
  }

  background("#2c103e");
  imageMode(CENTER);
  image(kniffel, windowWidth / 2, 200, 700, 238);
  noStroke();
  fill("#cd8b36");
  textAlign(CENTER, CENTER);
  textSize(15);
  text("K  L  I  C  K", windowWidth / 2, 400);
}

function newGame() {
  restart.display();

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

  image(kniffel, 550, 175, 500, 170);
}

function draw() {
  background("#2c103e");

  if (state[0] === 0) {
    startScreen();
  }

  if (state[0] === 1) {
    newGame();
  }
}

window.preload = preload;
window.mouseClicked = mouseClicked;
window.startScreen = startScreen;
window.newGame = newGame;
window.draw = draw;
