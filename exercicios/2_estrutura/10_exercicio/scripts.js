let num = 29;
let count = 0;
let ehprimo = true;
for (let i = 0; i <= num; i++) {
  if (num > 1) {
    if (num % i == 0) {
      count++;
    }
  }
}

if (count == 2) {
  console.log(count);
  console.log(ehprimo);
} else {
  console.log(count);
  console.log(!ehprimo);
}
