function lembrarSoma(x) {
  return function (y) {
    return x + y;
  };
}

let soma1 = lembrarSoma(2);

console.log(soma1(5));

let soma2 = lembrarSoma(5);
console.log(soma2(7));

function contador(i) {
  let cont = i;

  let somarContador = () => {
    console.log(cont);
    cont++;
  };
  return somarContador; //retornar pra salvar
}

let meucontador = contador(1);

meucontador();
meucontador();
meucontador();
