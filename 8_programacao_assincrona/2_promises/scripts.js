let promise = Promise.resolve(10 + 10);

console.log("...");

promise.then((value) => {
  console.log(`Resultado: ${value}`);
});
