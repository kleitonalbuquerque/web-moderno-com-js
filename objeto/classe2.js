class Avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome;
  }
}

class Pai extends Avo {
  constructor(sobrenome, profissao = "Professor") {
    super(sobrenome);
    this.profissao = profissao;
  }
}

class Filho extends Pai {
  constructor(nome) {
    super("Silva");
    this.nome = nome;
  }

  getNomeCompleto() {
    // console.log(`Meu nome é ${this.nome} ${this.sobrenome}`);
    return `Meu nome é ${this.nome} ${this.sobrenome}`;
  }
}

const filho = new Filho("João");
console.log(filho.getNomeCompleto());
console.log(filho);
