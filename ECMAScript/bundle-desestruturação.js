"use strict";

var usuario = {
  nome: 'Klysman',
  idade: 24,
  email: 'klysman@live.com',
  endereço: {
    cidade: "Belo Horizonte",
    estado: 'MG'
  }
};

function mostraNome(_ref) {
  var nome = _ref.nome,
      email = _ref.email;
  console.log(nome, email);
}

mostraNome(usuario);
console.log();
