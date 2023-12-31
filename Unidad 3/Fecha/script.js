//Estructuras de control
//Controla el flujo de un programa.

/*
if: se utitliza para ejecutar un bloque de codigo si se cumple una condicion
if(){

}else if(){

}else{

}
*/
//let edad = 17;
/*
let edad = 16;
let esMayorDeEdad = (edad>=18); 
 if(esMayorDeEdad){
    console.log("CERVEZA");
}else if(edad > 12){
    console.log("Niñato");
}else{
    console.log("caca");
} 
let resultado = esMayorDeEdad ? "CERVEZA" : "Niñato";
console.log(resultado);
let a = 20;
let b = 20;

resultado = (a<b) ? (b-a) : (a-b)+1;
console.log(resultado);
*/
//Switch case
//Usado quando se necesite un estructura condicional segun el valor que tenga una variable
/* 
let nombre = "gandalf";
let edad;
switch (nombre) {
    case "frodo":
        edad = 50;
        break;
    case "gandalf":
        edad = 1238;
        console.log("salvese quien pueda")
        break;
    case "aragorn":
        edad = 532;
        console.log("object");
        break;
    default:
        edad = -1;
        break;
}
console.log("Nombre: " + nombre + " Edad: " + edad); */

//Bucles

//Se utilizan para repertir una porcion de codigo varias veces.

//while
//repertir bloque hasta cumplir condicion
/*let contador = 0;
while(contador < 5){
    console.log(contador);
    ++contador;
}*/


//do-while
//while pero pasa una vez por en medio
/* let contador = 20;
do{
console.log(contador);
contador--;
}while(contador > 10) */

//for
//repertir numero especifico de veces
//break(detener ejecucion)
//continue(continua la ejecucion)
/* for(let i = 0;i<5;i++){
    if(i == 2){
        i++
        continue;
    }
    console.log(i);
} */

/*##########
    FECHAS
  ##########
*/
let parrafo = document.getElementById("fecha");
parrafo.innerHTML = "hola";

//New Date();
//New Date(milisegundos);
//New DAte(fechastring);
//New Date(año, mes ,dia,horas,minutos,segundos,milisegundos)

let fecha = new Date(92500000);
parrafo.innerHTML = fecha;

fecha = new Date("10/14/2023");
parrafo.innerHTML = fecha;

fecha = new Date("AUG 31 2023");
parrafo.innerHTML = fecha;


fecha = new Date("10-14-2023");
parrafo.innerHTML = fecha;

fecha = new Date(70,0,1,1,0,0);
parrafo.innerHTML = fecha.getTime();
fecha.getDate();
fecha.getDay();
fecha.getFullYear();
fecha.getHours();
fecha.getMilliseconds();
fecha.getMinutes();
fecha.getMonth();
fecha.getSeconds();
fecha.getTime();

//24/10/2023




//Ejercicio Notas Modulo DWEC
let nomEstudiant = "Joel";
let notaExamen1 = 1;
let notaExamen2 = 7.9;
let notaProjecte = 8.7;

let notaFinal = (notaExamen1*0.2)+(notaExamen2*0.2)+(notaProjecte*0.6);

console.log("Estudiant: "+nomEstudiant);
console.log("Nota de l'Examen 1: " + notaExamen1);
console.log("Nota de l'Examen 2: " + notaExamen2);
console.log("Nota del Projecte: " + notaProjecte);
console.log("Nota Final: " + notaFinal);

if(notaFinal >= 7){
    console.log("Felicitats, " + nomEstudiant +"! Has aprovat el mòdul");
}else{
    console.log(nomEstudiant + ", necesites millorar la nota per aprovar el modul.");
}

//Ejercicio Largo
//Data provided
let any2010Juny = 25.8;
let any2010Juliol = 28.6;
let any2010Agost = 30.1;
let any2015Juny = 26.5;
let any2015Juliol = 29.3;
let any2015Agost = 30.8;
let any2020Juny = 27.2;
let any2020Juliol = 29.9;
let any2020Agost = 31.5;

//Calculations of average
let mitjanaAny2010 = (any2010Juny+any2010Juliol+any2010Agost)/3;
let mitjanaAny2015 = (any2015Juny+any2015Juliol+any2015Agost)/3;
let mitjanaAny2020 = (any2020Juny+any2020Juliol+any2020Agost)/3;

//Convert to Farenheit
let mitjanaAny2010Farenhiet = (mitjanaAny2010*9/5)+32;
let mitjanaAny2015Farenhiet = (mitjanaAny2015*9/5)+32;
let mitjanaAny2020Farenhiet = (mitjanaAny2020*9/5)+32;

//Convert to Kelvin
let mitjanaAny2010Kelvin = (mitjanaAny2010+273.5);
let mitjanaAny2015Kelvin = (mitjanaAny2015+273.5);
let mitjanaAny2020Kelvin = (mitjanaAny2020+273.5);

//Boolean to check if the average temperature is above 30.
superatAny2010 = mitjanaAny2010 > 30 ? true : false;
superatAny2015 = mitjanaAny2015 > 30 ? true : false;
superatAny2020 = mitjanaAny2020 > 30 ? true : false;

//Switch per controlar  s'output de cada any.
for(i=10;i<=20;i=i+5){

    switch (i) {
        case 10:
            console.log(mitjanaAny2010);
            console.log(mitjanaAny2010Farenhiet);
            console.log(mitjanaAny2010Kelvin);
            if(superatAny2010){
                console.log("Mitjana supera el 30 graus celcius.");
            }else{
                console.log("Mitjana no supera el 30 graus celcius.");
            }
            break;
            case 15:
                console.log(mitjanaAny2015);
                console.log(mitjanaAny2015Farenhiet);
                console.log(mitjanaAny2015Kelvin);
                if(superatAny2015){
                    console.log("Mitjana supera el 30 graus celcius.");
                }else{
                    console.log("Mitjana no supera el 30 graus celcius.");
                }
                break;
            case 20:
                console.log(mitjanaAny2020);
                console.log(mitjanaAny2020Farenhiet);
                console.log(mitjanaAny2020Kelvin);
                if(superatAny2020){
                    console.log("Mitjana supera el 30 graus celcius.");
                }else{
                    console.log("Mitjana no supera el 30 graus celcius.");
                }
                break;
    
        default:
            break;
    }

    

}

