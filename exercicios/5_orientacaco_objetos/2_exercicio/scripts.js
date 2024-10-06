class Produto {
  constructor(id, nome, preco, qtd) {
    (this.id = id), (this.nome = nome), (this.preco = preco), (this.qtd = qtd);
  }
}

class Carrinho {
  constructor(itens = [], qtdTotal, valorTotal) {
    (this.itens = itens),
      (this.qtdTotal = qtdTotal),
      (this.valorTotal = valorTotal);
  }

  removeProduto(id) {
    for (let produtoCarrinho in this.itens) {
      if (this.itens[produtoCarrinho].id == id) {
        if (this.itens[produtoCarrinho].qtd > 1) {
          this.itens[produtoCarrinho].qtd--;
        } else if (this.itens[produtoCarrinho].qtd == 1) {
          this.itens.splice(produtoCarrinho, 1);
        }
        this.qtdTotal--;
        this.valorTotal -= this.itens[produtoCarrinho].preco;
      }
    }
  }

  addProduto(produto) {
    let count = 0;
    for (let produtoCarrinho in this.itens) {
      if (this.itens[produtoCarrinho].id == produto.id) {
        this.itens[produtoCarrinho].qtd =
          this.itens[produtoCarrinho].qtd + produto.qtd;

        count = 1;
      }
    }
    if (count == 0) {
      this.itens.push(produto);
    }

    this.qtdTotal += produto.qtd;
    this.valorTotal += produto.qtd * produto.preco;
  }
}

let produto = new Produto(1, "Camisa Goiás", 300, 1);

let carrinho = new Carrinho([], 0, 0);
let produto2 = new Produto(2, "Camisa Real Madrid", 450, 2);

carrinho.addProduto({
  id: produto.id,
  nome: produto.nome,
  preco: produto.preco,
  qtd: produto.qtd,
});
carrinho.addProduto({
  id: produto2.id,
  nome: produto2.nome,
  preco: produto2.preco,
  qtd: produto2.qtd,
});
carrinho.addProduto({
  id: produto2.id,
  nome: produto2.nome,
  preco: produto2.preco,
  qtd: produto2.qtd,
});
console.log(carrinho);
console.log(produto2);

carrinho.removeProduto(produto2.id);

console.log(carrinho);
