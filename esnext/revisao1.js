// let e const
{
  var a = 2 // escopo global
  let b = 3 // escopo de bloco
  console.log(b)
}
console.log(a)

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { nome, idade: i } = { nome: 'Ana', idade: 9 }
console.log(nome, i)