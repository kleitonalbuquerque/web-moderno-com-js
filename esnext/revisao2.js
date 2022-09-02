// Arrow Function
const soma = (a, b) => a + b // return implícito
console.log(soma(2, 3))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexixo2 = lexico1.bind({})
lexico1()
lexixo2()

// Parametro Default
function log(texto = 'Node') {
  console.log(texto)
}

log()
log('Sou mais forte')

// Operador Rest
function total(...numeros) {
  let total = 0
  numeros.forEach(n => total += n)
  return total
}

console.log(total(2, 3, 4, 5))
