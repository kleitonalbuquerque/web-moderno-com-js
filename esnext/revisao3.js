const { conforms } = require("lodash")

// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na Notação Literal
const nome = 'Maria'
const pessoa = {
  nome,
  ola() {
    return `Olá ${nome}`
  }
}
console.log(pessoa.nome, '\n', pessoa.ola())

// Class
class Animal {
  constructor(especie) {
    this.especie = especie
  }  
}
class Cachorro extends Animal {
  constructor(especie) {
   super(especie)
  }
  latir() {
    return `$Espécie ${this.especie}, au au!`
  }
}
const rex = new Cachorro('Cão').latir()
console.log(rex)
