const pessoa = {
    cpf: "",
    rg: "",
    nome: "",
    setCpf: function(cpf){
        this.cpf = cpf;
    },
    getCpf: function(){
        return this.cpf;
    },
    setRg: function(rg){
        this.rg = rg;
    },
    getRg: function (){
        return this.rg;
    },
    setNome: function(nome){
        this.nome = nome;
    },
    getNome: function(){
        return this.nome;
    }

}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);

console.log(pessoa.hasOwnProperty('maos'));

let novaPessoa = Object.create(pessoa);

console.log(novaPessoa.cpf);

console.log(novaPessoa.hasOwnProperty('maos'));

console.log(Object.getPrototypeOf(novaPessoa) === pessoa);

