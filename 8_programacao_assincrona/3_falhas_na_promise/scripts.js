let promise = Promise.resolve(new Error("Erro tenso."));

console.log("...");

promise
  .then((value) => {
    console.log(value);
  })
  .catch((reason) => {
    console.log(`Erro: ${reason}`);
  });
