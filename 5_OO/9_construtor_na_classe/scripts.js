class Carro {
    constructor(motor, portas, cor, nome){
        this.motor = motor;
        this.portas = portas;
        this.cor = cor;
        this.nome = nome;
    }
}

let lamborghini = new Carro("3.0", "2", "roxo", "SVJ");

console.log(lamborghini);