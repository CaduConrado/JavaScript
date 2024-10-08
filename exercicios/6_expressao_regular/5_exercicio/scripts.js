const validaNomeUser = /^(?=.{3,16}$)[a-z-0-9-_]/;

console.log(validaNomeUser.test("cadu_123"));

console.log(validaNomeUser.test("aa"));
