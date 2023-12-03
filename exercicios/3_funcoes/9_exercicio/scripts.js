function potencia(base, exp) {
  result = Math.pow(base, exp); //ou base ** exp
  return `${base}, ${exp} = ${result}`;
}

console.log(potencia(3, 2));
