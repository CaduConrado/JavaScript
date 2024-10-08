const validaDominio = /[?www.]\w+\.com.br|com/;

console.log(validaDominio.test("www.caduconrado.com.br"));
console.log(validaDominio.test("caducorado.com.br"));
console.log(validaDominio.test("caduconrado"));
