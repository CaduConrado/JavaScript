const validarData = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(validarData.test("01/01/2001"));

console.log(validarData.test("01/01/01"));
