let pessoa = {
  nome: "Cadu",
  idade: 23,
  profissao: "Developer",
};

console.log(pessoa.profissao);

delete pessoa.profissao;
console.log(pessoa.profissao);

console.log(pessoa);

pessoa.profissao = "Software Engineer";
console.log(pessoa);
