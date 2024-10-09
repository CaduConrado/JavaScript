async function somar(a, b) {
  return a + b;
}

console.log(somar(4, 5));

somar(4, 5).then((value) => console.log(value));
