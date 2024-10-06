class ContaBancaria {
  constructor(saldoCC, saldoCP, juros) {
    (this.saldoCC = saldoCC), (this.saldoCP = saldoCP), (this.juros = juros);
  }

  saque(valor) {
    this.saldoCC -= valor;
  }

  deposito(valor) {
    this.saldoCC += valor;
  }

  transferenciaCP(valor) {
    this.saldoCC -= valor;
    this.saldoCP += valor;
  }

  transferenciaCC(valor) {
    this.saldoCP -= valor;
    this.saldoCC += valor;
  }

  jurosAniversirio() {
    let juros = (this.saldoCP * this.juros) / 100;
    this.saldoCP += juros;
  }
}

class ContaEspecial extends ContaBancaria {
  constructor(saldoCC, saldoCP, juros) {
    super(saldoCC, saldoCP, juros * 2);
  }
}

let contaSimples = new ContaBancaria(20000, 5000, 1);

console.log(contaSimples);

contaSimples.jurosAniversirio();

console.log(contaSimples);

let contaEspecial = new ContaEspecial(20000, 5000, 1);
console.log(contaEspecial);

contaEspecial.jurosAniversirio();

console.log(contaEspecial);
