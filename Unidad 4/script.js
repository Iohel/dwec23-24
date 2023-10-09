/*
##############
    ARRAYS
##############
*/
//tipos
let vacio = [];
let elemenots = [2,3,5,7,11];
let misc = [2,"test",true,];

//valores de los elemntos no necesitan ser constantes

let n = 1024;

let tabla = [n,n + 1,n + 2,n +3,"a"];

console.log(tabla);
console.log(misc);
console.log(vacio);

let contador = [1,,3,4,]
console.log(contador.length);

//Operador Spread
let a = [1, 2, 3];
let b = [0, ...a, 4]

console.log(b);
console.log(b.length);

let copia = [...a, ...b, ...misc]

copia[0] = 9;

console.log(copia[0]);
console.log(misc[0]);

let digitos = [..."0123456789ABCDEFGHIJKLMOPQRSTUVWXYZ"];
console.log(digitos);

// Constructor de array

let aa = new Array(10,2,5,8,9,-7,"prueba",true);

aa = new Array(10,4);
aa[4] = 1
let bb = Array.of(10)
console.log(aa);  
console.log(bb.length);  

//Push
aa.push("5",2)

console.log(aa);
