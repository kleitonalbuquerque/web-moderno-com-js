function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    try {
      // con.log("temp");
      if (Math.random() < chanceErro) {
        reject("Ocorreu um erro!");
      } else {
        resolve(valor);
      }
    } catch (error) {
      reject(error);
    }
  });
}

funcionarOuNao("Testando...", 0.5)
  .then((v) => `Valor: ${v}`)
  .then(
    (v) => console.log(v),
    (err) => console.log(`Erro: ${err}`)
  )
  .catch((err) => console.log(`Erro: ${err}`));

//----------------------------------------------------//

function funcionarOuNao2(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    if (Math.random() < chanceErro) {
      reject("Ocorreu um erro!");
    } else {
      resolve(valor);
    }
  });
}

funcionarOuNao2("Testando...", 0.5)
  .then((v) => console.log(`Valor: ${v}`))
  .catch((err) => console.log(`Erro: ${err}`));
