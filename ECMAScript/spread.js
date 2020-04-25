// SPREAD

const arr1 = [0,1,2,4,5,6];
const arr2 = [7,8,9,];

const arr4 =[...arr1, ...arr2];

console.log(arr4);

const usuario1 = {
    nome = 'Klusman',
    idade = 24,
    empresa = 'krmdigital',
};


const usuario2 = { ...usuario1, nome: 'Klysman'};

console.log(usuario2);

console.log(`arrey ${arr1} e array2 ${arr2}`)

const nome = 'Klysman';
const idade = 25;

const usuario1 = {
    nome,
    idade,
    empresa: 'krmdigital',
};