/* saluda();
//Javacript unidad 2
//Conexiements basics.
tres
tristes
tigres

function saluda(){
    console.log("Bobble Head Perry the Platypus");
} */

// var LET cons
/* let names = "Trax";
var edad = 123;
const pin = 3.14;
patata();
function patata(){
    var names = "Trax";
    var edad = 123;

    console.log(names);
    console.log(edad);
} */

//integer
let uno = 1;
let dos = 2;
console.log(uno+dos);

//String ""\''?

let nombre = "Loan";
let surname = 'Basler';
let nombrecompleto = "People of this country, hear my voice, from now on you shall be ruled by the god of the new world.";

let textoencomillas = "test 'poeple'";
console.log(textoencomillas);

//NUMBERS

let edad = 24;
let masedad = -12
let años = "24";
console.log(typeof edad);
console.log(typeof años);
console.log(edad-masedad);

let precio = 21.99;
console.log(typeof precio);
let oferta = 17.98;
console.log(precio-oferta);

let aprovados = Infinity;
let suspendindos = -Infinity;
console.log(aprovados);
console.log(typeof aprovados);
console.log(aprovados-aprovados);

//null
let valor = null;
console.log(valor);
console.log(typeof valor);

//undefined

let defined
console.log(defined);
console.log( typeof defined);

//NaN

let infinity = "26"/2;
console.log(infinity);

//typeoff, delete
//ejemplos anteriores
console.log(typeof edad);
delete edad;
console.log(typeof edad);

//objeto
let persona ={
    nombre: "xxx",
    edad: 2
}

console.log(persona.edad);

delete persona.edad;
console.log(persona.edad);

//boolean

let pepe = true;
let aass = false; 
//false
// null;
// empty string;
// undefined;
// 0;
// NaN;

let algo;
if (!algo) {
    console.log("hola");    
}else{
    console.log("adios");
}

// + - * /
//Operadores aritmeticos
// 3+3=6
// 3-3=0
// 3*3=9
// 3/3=1
// 3%3=?

//++a 3+1
//--a 3-1

//+= a = b+1
//-= a = b-1
//*= a *b
// /= a/= b
// %= a %=b

/* let a = 4;
let b = 2;
a %= b;
console.log(a);
 */
//cambio de signo
// a = 5 b = -a = -5

//let a = "5";
//let b = "6"
//console.log(parseInt(a)+parseInt(b));

//let c = "4.60";
//console.log(parseFloat(c));

/* let A = +a;
let B = +b;
let C = +c; */
//console.log(+a + +b);
//console.log(C);

//Operadores de comparacion

//>     5 > 4
//<     4 < 5
//>=    4 >= 4
//<=    4 <= 4
//!=    3 != 4
//==    3 == 3
//=== igual en valor i tipo??? 3 === "3" false
//!== 3 === "3" true;

//operadores booleanos

// permiten comparar expresiones booleanas con las que se construyen condiciones que se pueden aplicar en funciones, bucles, etc...

// && solo true cuando ambos son true
//true && true true;
//false && true false;
//true && false false;
//fakse && false true;

// || or true si uno lo es;
//true || true true;
//false || true true;
//true || false true;
//false || false false;

let a = true;
let b = false;

console.log(a || b);

let cadena;
if(cadena != null && cadena.length>0){
    console.log(cadena);
}else{
    console.log("cadena vacia");
}

// ! not
// OPERATOR BECOMES EVIL(or good)
console.log(!a);

//EJERCICIO 1: THE JAVA COPYCAT
/* 
Se nos facilitan 3 variables que contienen informacion sobre una ciudad.

let esCapital boolean
let numeroCiudadanos number
let impuestoPorCiudadano float

esCapital: sera cierta si y solo si la ciudad es capital.
numeroCiudadanos: es el numero de ciudadanos de esta ciudad.
impuestoPorCiudadano: es el impuesto medio mensual que paga un ciudadano de esa ciudad.

Para nosotros, una Metropolis sera una ciudad si bien es una capital con + de 100000 ciudadanos 
o bien es una ciudad con + de 200000 ciudadnos y una renta media de 720000000 al año.

Dad una expresion booleana con las tres variables de tal manera que sea cierta si y solo si la ciudad es una metropolis.

*/
function metropolis(){
    //Used to clear the console log of other miscallenous resources.
    console.clear();

    //to help on the verbosity of some numbers we assign some constant to the stats needed for example population numbers.
    const p1 = 100000;
    const p2 = 200000;
    const ra = 720000000;
    
    //the main variables provided by the task
    let esCapital = false;
    let numeroCiudadanos = 200001;
    let impuestoPorCiudadano = 2500.4;
    let esMetropolis
    
    //quick precalculation to make the ifs statments less verbose
    const rentaAlMes = numeroCiudadanos*impuestoPorCiudadano;
    
    //Metropolis cases which includes in order.
    //Capital + number>100000
    //number>200000 + a quick multiplication of the combined median of taxes the population plays per month
    if(esCapital && numeroCiudadanos>p1){
    
        esMetropolis = true
    
    }else if(numeroCiudadanos>p2 && rentaAlMes*12>ra){
    
        esMetropolis = true
    
    }else{
    
        esMetropolis = false
    
    };
    //console log tho show the result.
    console.log(false);
}
metropolis();

function metropolisCompactada(){
    //Used to clear the console log of other miscallenous resources.
    console.clear();

    //to help on the verbosity of some numbers we assign some constant to the stats needed for example population numbers.
    const p1 = 100000;
    const p2 = 200000;
    const ra = 720000000;
    
    //the main variables provided by the task
    let esCapital = false;
    let numeroCiudadanos = 100001;
    let impuestoPorCiudadano = 2500.4;
    let esMetropolis
    
    //quick precalculation to make the ifs statments less verbose
    const rentaAlMes = numeroCiudadanos*impuestoPorCiudadano;
    
    //Metropolis cases which includes in order.
    //Capital + number>100000
    //number>200000 + a quick multiplication of the combined median of taxes the population plays per month
    if((esCapital && numeroCiudadanos>p1) || numeroCiudadanos>p2 && rentaAlMes*12>ra){
    
        esMetropolis = true
    
    }else{
        
        esMetropolis = false

    };
    //console log tho show the result.
    console.log(esMetropolis);
}
metropolisCompactada()

function metropolisSolucion(){
    //Used to clear the console log of other miscallenous resources.
    console.clear();

    //to help on the verbosity of some numbers we assign some constant to the stats needed for example population numbers.
    const p1 = 100000;
    const p2 = 200000;
    const ra = 720000000;
    
    //the main variables provided by the task
    let esCapital = false;
    let numeroCiudadanos = 200001;
    let impuestoPorCiudadano = 2500.4;
    
    
    //quick precalculation to make the ifs statments less verbose
    const rentaAlMes = numeroCiudadanos*impuestoPorCiudadano;
    
    //Metropolis cases which includes in order.
    //Capital + number>100000
    //number>200000 + a quick multiplication of the combined median of taxes the population plays per month
    const esMetropolis = (esCapital && numeroCiudadanos>p1) || (numeroCiudadanos>p2 && rentaAlMes*12>ra);
  
    //console log tho show the result.
    console.log("Es metropolis",esMetropolis);
}
metropolisSolucion()