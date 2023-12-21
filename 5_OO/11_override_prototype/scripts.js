class Carro {
    constructor(motor, portas, cor, nome){
        this.motor = motor;
        this.portas = portas;
        this.cor = cor;
        this.nome = nome;
    }

    ligar(){
        console.log("Vrummm");
    }
}

Carro.prototype.retrovisor = 2;
Carro.prototype.nome = "Not Defined";

let lamborghini = new Carro("3.0", "2", "roxo", "SVJ");

console.log(lamborghini);
console.log(lamborghini.retrovisor);
lamborghini.ligar();

console.log(Carro.prototype.nome);
console.log(lamborghini.nome);