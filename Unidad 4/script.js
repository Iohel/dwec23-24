/*
##########################
    ARRAYS Y FUNCIONES
##########################
*/
//tipos
/* let vacio = [];
let elemenots = [2,3,5,7,11];
let misc = [2,"test",true,]; */

//valores de los elemntos no necesitan ser constantes

/* let n = 1024;

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
 */
// Constructor de array

/* let aa = new Array(10,2,5,8,9,-7,"prueba",true);

aa = new Array(10,4);
aa[4] = 1
let bb = Array.of(10)
console.log(aa);  
console.log(bb.length);   */

//Push
/* aa.push("5",2)

console.log(aa);

console.clear();
a = [1,2,3];
delete a[2];
console.log(a);
let i = 2;
if(a[i]){
    console.log(a[i]);
}else{
    console.log("slot vacio");
} */

// como iterar arrays
/* let letras = [..."abcdefghijklmnopqrstuvwxyz"];
let aux = "";

for(let letra of letras){
    aux += letra;
} */
//console.log(aux);

/* aux = "";
let suma = 0;
for(let [index, letra] of letras.entries()){

    //suma += index;
    //aux += letra;

    /*if(index % 2 == 0){
        aux += letra;
    }

}
console.log(aux); */

/* let mayusculas = "";
let index = 0;
console.log(letras);
letras.forEach(letra => {
    index++;
    if(index % 2 == 0){
        mayusculas += letra.toUpperCase();
    }else{
        mayusculas += letra;
    }
});

console.log(mayusculas); */

//Expresiones regulares?

/* letra = "";
let vocales = "";
for(let i = 0; i < letras.length;i++){
    letra = letras[i];

    if(/[aeiou]/.test(letra)){
        vocales += letra;
    }
}
console.log(vocales);
console.clear(); */

/*
#################
    Arrays 2d
#################
 */

tabla = new Array(11);
for (let i = 0; i < tabla.length; i++) {
    tabla[i] = new Array(11);//10 filas 10 columnas;
}

for (let fila = 0; fila < tabla.length; fila++){
    let columna = tabla[fila];
    for(let col = 0; col < columna.length; col++){
        columna[col] = fila * col;
    }
}

console.log(tabla);
// Seccion Impar
let tablaimpar = tabla;
console.log("Numeros Impares en las tablas de multiplicar");
for (let fila = 0; fila < tabla.length; fila++){
    let columna = tabla[fila];
    let impares = [];
    console.log("Tabla del " + fila);
    for(let col = 0; col < columna.length; col++){
        if(columna[col] % 2 != 0){
            console.log(" "+fila+"*"+col+"="+columna[col]);
        }
    }
    
}

//Metodos array
//push() visto
//pop() elimina el ultimo elemento del array i lo devuelve
/* let paco = ["Joan", "Amparo", "Topo"];

let e = paco.pop();
console.log(e);
 */

//shift elimina el primer elemento y lo devuelve
//unshift agreag uno o mas elemenots al principio

// concat combina 2 o mas arrays y devuelve un nuevo array
//slice devuelve una copia superficial de una porcion del array .slice(0,1)

//splice() cambia el contenido de una array eliminando,reemplazando o agregando elementos .splice(start,delete number, replacement/adding)

//indexof() devuelve el primer indice en el que se encuentra un elemento dado (devuelve -1 si no se ha encontrado).

//join() une todos los elementos de una array en una cadena utilizando un separador especificado.

//sort() ordena elementos de una array  alfabeticamente si son cadenas i numericamentes si son numeros.
//parametros de sort().
//funcion que recibe dos valores a comparar.
//resultado debe ser
// devolver un valor positivo 1 si el primer valor es superior al segundo
// devolver un valor negativo -1 si el primer valor es inferior al segundo
// devolver un valor 0 si el primer valor es igual al segundo o equivalente en la ordernacion

// sort en numeros

/* let numeros = [10,5,8,3,1]
console.log(numeros.sort((a,b)=>{
    return a - b;
})); */

/* function(a,b){

    return a - b;

} */

//Sort string

/* let paco = ["Joan", "Amparo", "Topo"]; */

/* console.log(paco.sort((a,b)=>{

    return (a.toLowerCase() > b.toLowerCase()) ? 1 :
    (a.toLowerCase() < b.toLowerCase()) ? -1 : 0;

})); */

/* console.log(paco.sort((a,b)=>{
    return b.localeCompare(a);
})); */

//FUNCIONES

    
/* function diHola(){
    console.clear();
    console.log("Hola");

}
diHola();

function multiplica(c,d){

    let a = 2;
    let b = 2;

    return (a*b*c*d);
    //console.log(a*b*c*d);
}
console.log(multiplica(2,2));
 */



//OBJETOS OH GOD IS COMING
/* let unCliente = {

    nombre: "Peter",
    apellido: "Griffin",
    "direccion fiscal": "Avenida Dominguez 3 4",
    "`-´": "-_-",
    pago: {
        tipo : "Visa",
        tarjeta : 122459085,
        "fecha de caducidad" : "12/2000"
    },
    vencimiento: 30
    
}
unCliente["apellido"] = "Jackson";
unCliente.nombre = "Adam";
console.log(unCliente.pago.tarjeta);
console.log(unCliente);
 */

/* let estudianteModerno = {
    id: 2,
    nombre: "Pepo",
    diHola : function(){
        return "Hola";
    },
    notas : [10,1,2,7],
    media : function(notas){
        let suma = 0;
        for(let i = 0; i < notas.length; i++) {
            suma += notas[i];
            
        };
        return (suma/notas.length);
    }
}

console.clear();
console.log("El alumno: " + estudianteModerno.nombre + 
" ha sacado una mediana de nota de: " +
estudianteModerno.media(estudianteModerno.notas)); */

/* estudianteModerno.apellido = "Tonto";

estudianteModerno.diAdios = function(){
    return "Adios";
}

console.log(estudianteModerno.diAdios());


 */

//This

/* let factura = {
    description: "Test Receipt",
    precio: 100.0,
    iva: 21.0,
    subtotal: function(){
        return this.precio;
    },
    total: function(){
        return this.precio+(this.precio*this.iva)/100
    }
}
console.log(factura.total()); */

//CONSTRUCTORES

/* function Web(){

    this.url = "http://localhost";
    this.nombre = "localhost";
    
    this.showInformation = function(){
        return "url: "+ this.url + "\n"+ "Web: " + this.nombre;
    }
}
Web.prototype.visitas = 2;
Web.prototype.funcion = function(){
    return "hola";
};
let unaWeb = new Web();
unaWeb.url = "https;//fcbarcelona.cat";
unaWeb.nombre = "Mes que un club";

let segundaWeb = new Web();

console.log(unaWeb); */

/* let ciudades = [
    {
        municipio:"Zaragoza",
        provincia:"Zaragoza"
    },
    {
        municipio:"Avila",
        provincia:"Avila"
    },
    {
        municipio:"Madrid",
        provincia:"Madrid"
    },
    {
        municipio:"Barcelona",
        provincia:"Barcelona"
    },

];
console.log(ciudades);
ciudades.sort((a,b) => {
    return a.provincia.localeCompare(b.provincia);
});
console.log(ciudades); */

/* const miArray = ["A","B","C"];
miArray.push("D")
miArray[0] = "B";
console.log(miArray);


//Desestructuracion
const Numeros = [1,2,3];
const [a,b,c] = Numeros;
console.log(b+c); */


/* const persona = {
    nombre: "Andreu",
    edad: 33
}

const {nombre,edad} = persona; */
/* console.log(nombre,edad); */
/* const nombre = "Josep";
const edad = 30;

const persona = {
    nombre,
    edad
} */

//Template string
/* 
const nombre = "Bob";
const edad = 15;

const mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años`;
console.log(mensaje); */

//Operador Spread
/* 
const numeros = [1,2,3];
const nuevosNumeros = [...numeros,4, 5]
console.log(nuevosNumeros);
 */
//parametros por defecto

/* function saludar(nombre = "invitado") {
    console.log(`Hola ${nombre}.`);
}

saludar()
//Parametros rest
function sumar(...numeros){
    let resultado = 0;
    for(let numero of numeros){
        resultado += numero
    }    
    return resultado;
}

console.log(sumar(1,2,5,6,)); */

//Funciones flecha

/* function sumar(a,b){
    return a + b;
} */

/* const sumar = (...numeros) => {
    let resultado = 0;
    for(let numero of numeros){
        resultado += numero
    }    
    return resultado;
} */
//Metodos
//forEach() ejecuta una funcion proporcionada por nosotros una vez por cada elemento del array

/* const multiplica = (n) =>{
    return n*2
}

const numeros = [1,2,3,-1];
numeros.forEach((numero) => {
    console.log(multiplica(numero));
});


//map() crea un nuevo array con los resultados de aplicar una funcion a cada elemento del array.

const dobleNumero = numeros.map((numero) => {
    return numero*2;
})

console.log(dobleNumero);

//filter() crea un nuevo array con todos los elementos que cumplan una condicion determinada.

const numerosPares = numeros.filter((numero) => {

    return numero % 2 == 0;

});
console.log(numerosPares);

const numerosSuperiores = numeros.filter((numero) => {

    return numero >= 2;

});
console.log(numerosPares);

//reduce() aplica una funcion a un acumulador y a cada elemento del array para reducirlo a un unico valor.

const suma = numeros.reduce((acumulador,numero) => {

    return acumulador + numero;

},0);
console.log(suma);

//find() devuelve el primer elemento del array que cumpla una determinada condicion
const numeroEncontrado = numeros.find((numero) =>{
    return numero < 3;
});
console.log(numeroEncontrado);

//findindex() devuelve el indice del primer elemento del array que cumpla con una funcion de prueva o retornara -1 si no encuentra.

const indiceEncontrado = numeros.findIndex((numero)=>{

    return numero < 3;

});
console.log(indiceEncontrado);

//some() comprueba si al menos un elemento del array cumple una condicion determinada

const tieneNumeroPar = numeros.some((numero)=>{

    return numero % 2 == 0;

});
console.log(tieneNumeroPar);

// every(): comprueba si todos los numeros cumplen una condicion.

const todosSonPositivos = numeros.every((numero)=>{

    return numero > 0;

});
console.log(todosSonPositivos); */

//Class
class Persona{
    constructor(nombre){
        this.nombre = nombre;
    }

    saludar(){
        console.log(`Hola soy ${this.nombre}.`);
    }

}

const joel = new Persona("Joel");
joel.saludar();

//Herencia
class Empleado extends Persona{
    constructor(nombre,salario){
        super(nombre)
        this.salario = salario;
    }

    trabajar(){
        console.log(`${this.nombre} esta trabajnado con el siguiente salario: ${this.salario}`);
    }
}

const maria = new Empleado("Maria",300000);

maria.trabajar();

maria.saludar();

//simbolos
/*
Los simbolos son una nueva clase de datos, introducidos por ES6
Son valores unicos e inmutables.
Se pueden utilizar como identificadores de propiedades de objeto
*/

const id = Symbol("Id");

const persona = {
    nombre : "Joel",
    [id]: 1
}

console.log(persona[id]);

//Iteradores
/*
Son objetos que implementan el protocolo de iteracion en JavaScript
Permiten reccorer y acceder a los elementos de una seleccion 1 a 1
*/
const numeros = [1,2,3];
const iterador = numeros[Symbol.iterator]();


console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());

//SET 
//Permite almacenar valores unicos de cualquier tipo
//no permite duplicados y ofrece metodoes para agregar 
//eliminar y verificar la existencia de elementos.

const setNumeros = new Set();
setNumeros.add(1);
setNumeros.add(2);
setNumeros.add(2);
setNumeros.add(3);

console.log(setNumeros.has(2));
setNumeros.delete(2);
console.log(setNumeros.has(2));
console.log(setNumeros.size);
console.log(setNumeros);

const iteratorNumeros = setNumeros[Symbol.iterator]();
console.log(iteratorNumeros.next());
console.log(iteratorNumeros.next());
console.log(iteratorNumeros.next());

//MAP
//Permite almacenar PARES clave-valor donde cada clave es unica.
//Permite operaciones de busqueda ,insercion y eliminacion.

const mapaNombres = new Map();
mapaNombres.set("nombre","Ana")
mapaNombres.set("edad",33);
mapaNombres.set("profesion","desarollador");

console.log(mapaNombres.get("nombre"));
console.log(mapaNombres.has("edad"));
console.log(mapaNombres.delete("edad"));
console.log(mapaNombres.has("edad"));
console.log(mapaNombres.size);
console.log(mapaNombres);

