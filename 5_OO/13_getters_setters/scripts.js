class Cachorro {
    constructor(raca, cor){
        this.raca = raca;
        this.cor = cor;
    }
    latir(){
        console.log("Au au");
    }

    get getCor(){
        return this.cor;
    }
    set setCor(cor){
        this.cor = cor;
    }
}

let doberman = new Cachorro("Doberman", "Not defined");

console.log(doberman);

doberman.setCor = "Preto"

console.log(doberman.getCor);

