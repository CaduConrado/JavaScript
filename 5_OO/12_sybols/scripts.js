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

let retrovisor = Symbol();

Carro.prototype[retrovisor] = 2;
Carro.prototype.nome = "Not Defined";

let lamborghini = new Carro("3.0", "2", "roxo", "SVJ");

console.log(lamborghini);
lamborghini.ligar();

console.log(lamborghini.nome);

//acessando symbol
console.log(Carro.prototype[retrovisor]);
console.log(lamborghini[retrovisor]);

