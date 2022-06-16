function Pessoa(nome) {
  this.falar = function () {
    console.log(`Meu nome é ${nome}`);
  };
}

const p2 = new Pessoa("Bia");
p2.falar();
