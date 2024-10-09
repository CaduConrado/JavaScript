function verificarNumero(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 == 0) {
      resolve(console.log(`Perfeito, o numero ${num} é par.`));
    } else {
      reject(new Error("O numero não é par."));
    }
  });
}

verificarNumero(3);

verificarNumero(4);
