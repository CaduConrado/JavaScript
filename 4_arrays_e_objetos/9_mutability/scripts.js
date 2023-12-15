let pessoa = {
  nome: "Cadu",
};

let pessoa2 = pessoa;

let pessoa3 = {
  nome: "Cadu",
};

console.log(pessoa == pessoa2);
console.log(pessoa == pessoa3);
pessoa2.nome = "Carlos Eduardo";

console.log(pessoa.nome);
