function criarCachorro (nome, raca, cor){
    let cachorro = Object.create({});
    cachorro.nome = nome;
    cachorro.raca = raca;
    cachorro.cor = cor;
    return cachorro;
}

let cachorro = criarCachorro("Cleitim", "wtf", "wtf");

console.log(cachorro.nome);