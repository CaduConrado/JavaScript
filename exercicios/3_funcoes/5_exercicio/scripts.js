function permissaoDirigir(idade) {
  if (idade >= 18) {
    console.log("Você pode dirigir!");
  } else {
    console.log("Você não pode dirigir!");
  }
}

permissaoDirigir(18);
permissaoDirigir(23);
permissaoDirigir(17);
