let num = 1;
let num1 = 5;
let num2 = 3;
let num3 = 9;

function imprimeNumeros(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

imprimeNumeros(num, num1, num2, num3);

imprimeNumeros(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
