// Exemplo de callback no browser
document.getElementsByTagName("body")[0].onclick = function (e) {
  let evento = e.target.value;
  console.log("O evento ocorreu! " + evento);
};
