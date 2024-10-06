class Endereco {
  constructor(rua, bairro, cidade, estado) {
    (this.rua = rua),
      (this.bairro = bairro),
      (this.cidade = cidade),
      (this.estado = estado);
  }

  set setRua(rua) {
    this.rua = rua;
  }

  set setBairro(bairro) {
    this.bairro = bairro;
  }

  set setCidade(cidade) {
    this.cidade = cidade;
  }

  set setEstado(estado) {
    this.estado = estado;
  }

  get getRua() {
    return this.rua;
  }

  get getBairro() {
    return this.bairro;
  }

  get getCidade() {
    return this.cidade;
  }

  get getEstado() {
    return this.estado;
  }
}

let endereco = new Endereco("Rua Teste", "Bairro Teste", "Cidade Teste", "TE");

console.log(
  `Rua: ${endereco.getRua}\nBairro: ${endereco.getBairro}\nCidade: ${endereco.getCidade}\nEstado:${endereco.getEstado}`
);

endereco.setBairro("Bairro Teste2");
console.log(
  `Rua: ${endereco.getRua}\nBairro: ${endereco.getBairro}\nCidade: ${endereco.getCidade}\nEstado:${endereco.getEstado}`
);
