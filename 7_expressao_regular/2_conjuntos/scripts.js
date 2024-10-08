const reg1 = /[1234]/;

console.log(reg1.test(4));
console.log(reg1.test(9));

const reg2 = /[0-9]/; //vai aceitar qualquer numero

console.log(reg2.test(1391519247));
