const validaEmail = /\w+@\w+\.\w+/;

console.log(validaEmail.test("cadu@gmail.com"));
console.log(validaEmail.test("cadu"));
console.log(validaEmail.test("cadu@com"));
