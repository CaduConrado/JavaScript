function Cachorro (nome, raca, cor){
    this.nome = nome;
    this.raca = raca;
    this.cor = cor;
}

Cachorro.prototype.latir = function(){
    console.log("Au au");
}

let cachorro = new Cachorro("Cleitim", "wtf", "wtf");

console.log(cachorro.nome);
cachorro.latir();