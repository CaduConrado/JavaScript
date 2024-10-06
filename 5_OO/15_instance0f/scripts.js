class Mamifero {
  constructor(mama) {
    this.mama = mama;
  }
}

class Cachorro extends Mamifero {
  constructor(raca, mama) {
    super(mama, mama);
    this.raca = raca;
  }

  latir() {
    console.log("Auau");
  }
}

let doberman = new Cachorro("Doberman", true);
console.log(doberman);

console.log(new Cachorro() instanceof Mamifero);
