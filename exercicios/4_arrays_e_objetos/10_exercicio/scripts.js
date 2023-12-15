let calculadora = {
    somar: (num1, num2) => {
        console.log(num1 + num2);
    },
    subtrair: (num1, num2) => {
        console.log(num1 - num2);
    },
    multiplicar: (num1, num2) => {
        console.log(num1 * num2);
    },
    dividir: (num1, num2) => {
        console.log(num1 / num2);
    }
}

calculadora.somar(2, 2);
calculadora.subtrair(4, 2);
calculadora.multiplicar(5, 2);
calculadora.dividir(100, 20);