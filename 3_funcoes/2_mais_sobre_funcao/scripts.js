function multiplicarTresNumeros(x, y, z) {
  return x * y * z;
}

console.log(multiplicarTresNumeros(2, 3, 4));

const mult = multiplicarTresNumeros(5, 4, 3);

console.log(mult);

function podeDirigir(idade, cnh) {
  if (idade >= 18 && cnh == true) {
    console.log("Pode dirigir!");
  } else {
    console.log("Não pode dirigir!");
  }
}

podeDirigir(18, true);
podeDirigir(17, false);
podeDirigir(30, 0);
podeDirigir(20, 1);
