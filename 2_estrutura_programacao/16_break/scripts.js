let nome = "Cadu";
for (let i = 0; i < 10; i = i + 1) {
  if (i == 3) {
    nome = "Lucas";
  }

  if (i == 5 && nome == "Lucas") {
    console.log("O nome é Lucas, pode parar.");
    break;
  }

  console.log(i);
}
