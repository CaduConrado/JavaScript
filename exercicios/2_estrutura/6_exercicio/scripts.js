let idade = 18;
let cnh = true;

if (idade >= 18 && cnh != true) {
  console.log("Maior de idade mas não possui cnh.");
} else if (idade >= 18 && cnh == true) {
  console.log("Maior de idade e tem cnh.");
} else {
  console.log("Menor de idade e não tem cnh.");
}
