export class Animal {
  constructor(type, legs) {
    this.type = type;
    this.legs = legs;
  }

  makenoise(sound = "loud Noise") {
    console.log(sound);
  }

  get metaData() {
    return `Type: ${this.type}, Legs: ${this.legs}`;
  }

  static return10() {
    return 10;
  }
}

export class Cat extends Animal {
  constructor(type, legs, tail) {
    super(type, legs);
    this.tail = tail;
  }

  makenoise(sound = "Meow") {
    console.log(sound);
  }
}
