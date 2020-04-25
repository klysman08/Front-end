const arr = [1,2,3,4,5,6,7,8,9];

const newArr = arr.map(item => item * 2);
console.log(newArr);

const teste = () => ({nome : Klysman });
console.log(teste);

function soma ( a = 2, b = 2) {
    return a + b;
}
    
const soma2 = ( a = 2, b = 2 ) => a - b

console.log(soma(4));
console.log(soma(5));
console.log(soma2(7))