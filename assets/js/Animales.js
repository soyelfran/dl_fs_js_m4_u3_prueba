import Animal from "./Animal.js";
let animalAudio = document.getElementById("player");
export class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonidos) {
    super(nombre, edad, img, comentarios, sonidos);
  }
  Rugir() {
    animalAudio.setAttribute("src", `./assets/sounds/${this.getSonidos()}`);
    animalAudio.play();
  }
}
export class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonidos) {
    super(nombre, edad, img, comentarios, sonidos);
  }
  Aullar() {
    animalAudio.setAttribute("src", `./assets/sounds/${this.getSonidos()}`);
    animalAudio.play();
  }
}
export class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonidos) {
    super(nombre, edad, img, comentarios, sonidos);
  }
  Gruñir() {
    animalAudio.setAttribute("src", `./assets/sounds/${this.getSonidos()}`);
    animalAudio.play();
  }
}
export class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonidos) {
    super(nombre, edad, img, comentarios, sonidos);
  }
  Sisear() {
    animalAudio.setAttribute("src", `./assets/sounds/${this.getSonidos()}`);
    animalAudio.play();
  }
}
export class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonidos) {
    super(nombre, edad, img, comentarios, sonidos);
  }
  Chillar() {
    animalAudio.setAttribute("src", `./assets/sounds/${this.getSonidos()}`);
    animalAudio.play();
  }
}
