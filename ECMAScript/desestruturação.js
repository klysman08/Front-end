const usuario = {
    nome: 'Klysman',
    idade: 24,
    email: 'klysman@live.com',
    endereço: {
        cidade: "Belo Horizonte",
        estado: 'MG',
    },
};

function mostraNome ({nome, email}){
    console.log(nome, email);
}

mostraNome(usuario);

console.log()