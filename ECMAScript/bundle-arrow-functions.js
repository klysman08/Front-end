"use strict";

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);

var teste = function teste() {
  return {
    nome: Klysman
  };
};

console.log(teste);

function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return a + b;
}

var soma2 = function soma2() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return a - b;
};

console.log(soma(4));
console.log(soma(5));
console.log(soma2(7));
