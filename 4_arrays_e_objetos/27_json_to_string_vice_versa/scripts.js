let pessoa = {
  "nome": "Cadu",
  "idade": 23,
  "profissao": "Software Developer",
  "hobbies": ["video game", "Academia"]
};

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

let pessoaJson = JSON.parse(pessoaTexto);

console.log(pessoaJson);

