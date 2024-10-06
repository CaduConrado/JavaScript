class Livro {
  constructor(titulo, autor, disponivel) {
    (this.titulo = titulo),
      (this.autor = autor),
      (this.disponivel = disponivel);
  }

  emprestar() {
    if (this.disponivel) {
      this.disponivel = false;
    } else {
      console.log("O livro não está disponível para empréstimo.");
    }
  }

  devolver() {
    if (!this.disponivel) {
      this.disponivel = true;
      console.log("O livro já está disponível.");
    }
  }

  consultarDisponibilidade() {
    return this.disponivel ? "Disponível" : "Indisponível";
  }
}
