const arr = [1,2,3,4,5,6,7,8,9];

const newArr = arr.map(item => item * 2);
console.log(newArr);

const teste = () => ({nome : Klysman });
console.log(teste);

function soma ( a = 2, b = 5) {
    return a + b;
}
    
const soma2 = ( a = 3, b = 6 ) => a + b

console.log(soma(4));
console.log(soma());
console.log(soma2())