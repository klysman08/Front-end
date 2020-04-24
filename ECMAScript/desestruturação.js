const usuario = {
    nome: 'Klysman',
    idade: 24,
    email: 'klysman@live.com',
    endereço: {
        cidade: "Belo Horizonte",
        estado: 'MG',
    },
};

function mostraNome ({nome, idade}){
    console.log(nome, idade);
}

mostraNome(usuario);