function testeTamanho(string) {
  if (string.length > 10) {
    console.log("Texto muito longo.");
  } else {
    console.log("Texto dentro do limite");
  }
}

testeTamanho("12345678910");
testeTamanho("1234567");
