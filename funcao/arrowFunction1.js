let dobro = function(a) {
  return 2 * a
}

dobro = (a) => {
  return 2 * a
}

dobro = a => 2 * a // return implícito
console.log(dobro(4))
console.log(dobro(Math.PI.toFixed(2)))

let ola = function() {
  return 'Olá'
}

ola = () => 'Olá'
console.log(ola())