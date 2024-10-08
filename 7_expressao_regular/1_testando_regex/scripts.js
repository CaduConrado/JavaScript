const reg1 = new RegExp(".com");

console.log(reg1.test("cadu@gmail.com"));
console.log(reg1.test("cadu@gmail"));

const reg2 = /gmail/;

console.log(reg2.test("caducngo@gmail.com"));
console.log(reg2.test("cadu.com"));

console.log(/@gmail.com/.test("caducngo@gmail.com"));
