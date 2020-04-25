// REST
const arr = [0,2,3,4,5,6];

const [a,b, ...c] = arr;
console.log(a);
console.log(b);
console.log(c);

const usuario = {
    nome: 'klysman',
    idade: 24,
    empresa: 'Krmdigital'
};

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);

function soma(a,b, ...params) {
    return params;
}

console.log(soma(1,4,5,6,7,7));
