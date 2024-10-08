function saudacao(nome) {
  if (typeof nome != "string") {
    throw new Error("o parametro nome deve ser do tipo string.");
  } else {
    console.log(`Saudações, Sr(a) ${nome}`);
  }
}

saudacao("Carlos Eduardo");
saudacao(5);
