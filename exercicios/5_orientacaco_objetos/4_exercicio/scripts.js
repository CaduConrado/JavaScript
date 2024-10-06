class Carro {
  constructor(marca, cor, tanqueGasolina, gasolina) {
    (this.marca = marca),
      (this.cor = cor),
      (this.tanqueGasolina = tanqueGasolina),
      (this.gasolina = gasolina);
  }

  get getMarca() {
    return this.marca;
  }
  get getCor() {
    return this.cor;
  }
  get getTanqueGasolina() {
    return this.tanqueGasolina;
  }
  get getGasolina() {
    return this.gasolina;
  }

  digir() {
    this.gasolina -= 2;
  }

  abastacer() {
    let count = 0;
    if (this.gasolina >= this.tanqueGasolina) {
      console.log("O tanque está cheio.");
    } else {
      count = this.tanqueGasolina - this.gasolina;
      this.gasolina += count;
      console.log("Carro abastecido");
    }
  }
}

let carro = new Carro("Porsche", "Preto", 50, 25);

console.log(
  `Marca: ${carro.getMarca}\nCor: ${carro.getCor}\nGasolina: ${carro.getGasolina}`
);

carro.digir();

console.log(
  `Marca: ${carro.getMarca}\nCor: ${carro.getCor}\nGasolina: ${carro.getGasolina}`
);

carro.abastacer();

console.log(
  `Marca: ${carro.getMarca}\nCor: ${carro.getCor}\nGasolina: ${carro.getGasolina}`
);
