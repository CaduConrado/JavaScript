class Conta {
  constructor(saldo) {
    this.saldo = saldo;
  }

  deposito(valor) {
    this.saldo += valor;
  }

  saque(valor) {
    this.saldo -= valor;
  }
}

let conta = new Conta(1000000);

console.log(`R$${conta.saldo}`);

conta.deposito(500000);

console.log(`R$${conta.saldo}`);

conta.saque(10000);

console.log(`R$${conta.saldo}`);
