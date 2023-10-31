//Guardamos el numero de Kaprekar
const numeroKaprekar = 6174;
//Pasos realizados
let pasos = 0;
//Numero del usuario
let numero;
//Pedimos el numero y lo capturamos
//Sera un cadena
let promptText = "Elije cualquier numero de cuatro digitos";
promptText += "que este formado por al menos dos digitos";
promptText += "diferentes, incluido el 0";

numero = prompt(promptText);
let esValido = validaNumero(numero);

if(!esValido){
    console.log("El numero no es valido");
}else{
    while(numero != numeroKaprekar){
        //llamamos a la funcion kaprekar
        numero = kaprekar(numero);
        //aumenta pasos
        pasos++;
        //evitemos bucles infinitos
        if(pasos>7){
            console.log("numeros de pasos superados");
            break;

        }

        if(numero == numeroKaprekar){
            console.log("Pasos realizados: " = pasos);
        }
    }

}
/* Funcion que realiza las operaciones necesarias 
para obtener el numero de kaprekar pasandole por parametro
el numero a tratar.
Devuelve el numero obtenido.
 */
function kaprekar(numero){

    //creamos array para tratar el numero
    let arrayNumero = new Array();

    //variables para guardar numeros a restar
    let mayor, menor;

    //añadimos numero al array
    /* for (let i = 0; i < numero.length; i++) {
        arrayNumero[i] = numero[i];
    } */
    /* for (let i = 0; i < numero.length; i++) {
        arrayNumero[i] = numero.charAt(i);
    } */
 
    for (let i = 0; i < numero.length; i++) {
        arrayNumero.push(numero[i]);
    }

    //Sorteamos array
    arrayNumero.sort()

    //guardamos en la variable menor el array anterior
    menor = uneDigitos(arrayNumero);

    //invertimos array
    arrayNumero = deLaVuelta(arrayNumero);
    
    //guardamos en la variable mayor el array anterior
    mayor = uneDigitos(arrayNumero);
    
    numero = mayor - menor;

    console.log(mayor + "-"+ menor + "=" + numero );

    return formateaNumero(numero.toString(),true);
}

/* Devuelve una array con los elementos invertidos 
respecto al sort 
*/
function deLaVuelta(arrNumero){
    let arrAux = new Array(arrNumero.length)
    for (let i = 0; i < arrNumero.length; i++) {
        arrAux[arrNumero.length - 1 - i] = arrNumero[i];
    }

}
//añade 0 delante o detras de una cadena que representa un valor numerico.
function formateaNumero(numero,esIzquierda){
    if(esIzquierda){
        if(numero.length == 3){
            numero = "0" + numero;
        }
        
        if(numero.length == 2){
            numero = "00" + numero;
        }
        
        if(numero.length == 1){
            numero = "00" + numero;
        }
    }else{
        if(numero.length == 3){
            numero = numero + "0";
        }
        
        if(numero.length == 2){
            numero = numero + "00";
        }
        
        if(numero.length == 1){
            numero = numero + "000";
        }
    }
    return numero;
} 

/* 
    Devuelve una cadena formada con los elementos de un array
    array pasado por parametro, tomados como caracteres desde el
    menor indice hasta el ultimo
    */
function uneDigitos(array){
    let cadena = "";

    for (let i = 0; i < array.length; i++) {
        cadena += array[i]        
    }
    return cadena;
}



/*
funcion para validar el numero pasado, las condiciones son:
-Sea un numero.
-No tenga mas de 4 digitos.
-Al menos 2 digitos diferentes.
-Digito no se repite mas de dos veces
*/function validaNumero(numero){

    //Is a number
    if(numero == null || isNaN(numero)){
        return false;
    }

    //no more than 4 digits
    /* if(numero.length > 4){
        return false;
    } */

    if(+numero > 9999 || +numero<22){
        return false;
    }

    //que al menos 2 digitos diferentes
    //const numeros = Array.from(String(numero), Number);
    //const numeros = numero.split("");
    const numeros = [...numero];
    const setNumeros = new Set(numero);
    
    if(setNumeros.size < 2){
        return false;
    }

    console.log(numeros);

    return true;


}