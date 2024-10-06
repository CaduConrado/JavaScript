class ContaBancaria {
  constructor(numeroConta, saldo) {
    (this.numeroConta = numeroConta), (this.saldo = saldo);
  }

  depositar(valor) {
    this.saldo += valor;
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
    } else {
      console.log("Saldo insuficiente!");
    }
  }

  consultarSaldo() {
    return this.saldo;
  }
}
