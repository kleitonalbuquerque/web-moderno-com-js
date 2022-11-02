function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, tempo);
  });
}

// esperarPor(2000)
//   .then(() => console.log("Executando promise 1..."))
//   .then(esperarPor)
//   .then(() => console.log("Executando promise 2..."))
//   .then(esperarPor)
//   .then(() => console.log("Executando promise 3..."));

function retornaValor() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), 5000);
  });
}

async function retornaValorRapido() {
  return 20;
}

// Async/Await
async function executar() {
  let valor = await retornaValorRapido();

  await esperarPor(1500);
  console.log(`Async/Await ${valor}...`);

  await esperarPor(1500);
  console.log(`Async/Await ${valor + 1}...`);

  await esperarPor(1500);
  console.log(`Async/Await ${valor + 2}...`);

  return valor + 3;
}

// executar().then(console.log);
// executar().then((v) => console.log(`L = ${v}. Fora BOZOOO!!!!`));

async function executarDeVerdade() {
  const valor = await executar();
  console.log(valor);
}

executarDeVerdade();
