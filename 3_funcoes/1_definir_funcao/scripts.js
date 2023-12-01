function imprimirNoConsole() {
  console.log("Olá Mundo!");
}

imprimirNoConsole(); //invocando a função

function imprimirUmNumero(num) {
  console.log(`O número é: ${num}`);
}

imprimirUmNumero(10);

const numeroAleatorio = function () {
  console.log(Math.random());
};

numeroAleatorio();
