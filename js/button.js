/* Baue eine Button Klasse. Die Datei soll dice.js heißen. 
Als Parameter soll sie x, y, width und  height erwarten

Die Methode display soll den Button als einfaches Rechteck zeichnen.

Die Methode hitTest erwartet x und y als Parameter und gibt true zurück, 
wenn die Übergabe-Werte innerhalb des Buttons liegen. Ansonsten gibt sie false zurück.

Die Methode clicked gibt einen String in console.log aus.

Die Methode mouseClicked nimmt keine Parameter, soll aber this.clicked() aufrufen, 
wenn die Maus innerhalb des Buttons geklickt wurde.

Teste deinen Button in dem du einen erzeugst und anzeigst.

Nach einem erfolgreichen Test kannst du deinen Code zum testen des Buttons entfernen. */

export default class Button {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  display() {
    fill("pink");
    rect(this.x, this.y, this.width, this.height);
  }

  hitTest(x, y) {
    if (
      x > this.x &&
      x < this.x + this.width &&
      y > this.y &&
      y < this.y + this.height
    ) {
      return true;
    } else {
      return false;
    }
  }

  clicked() {
    console.log("🐹🍩");
  }

  mouseClicked() {
    if (this.hitTest(mouseX, mouseY)) {
      this.clicked();
    }
  }
}
