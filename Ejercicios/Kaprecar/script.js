//Comprobador

//Variables which include a variable for a prompt, a set object and an array.
let numero;
let comprobador = new Set();
let array=[];

//The following test checks both if its number has a length of 4 and by using set learn we check if there is atleast 3 different digits.
do{
    numero = prompt("Input a number with atleast 3 different digits.");
    if(numero.length == 4){
        for (let i = 0; i < numero.length; i++) {
            comprobador.add(numero.charAt(i));
            array.push(numero.charAt(i))
        }
    }
}while(!comprobador.size>2 || comprobador.size == 0)


//Kaprekan loop

//Variables for the main loop.
let repeticiones = 0;
let ascendente;
let descendente;

//The loop that checks if the the number is 6174 aka kaprekar number.
while(numero != 6174){

    //first we use the array compiled earlier and we sort it by more to less value.
    array = array.sort((a,b)=>{
        return b.localeCompare(a);
    });
    
    //with these two methods we create a copy of the earlier array with the numbers reversed.
    let array2 = array.slice();
    array2.reverse();
    
    //using a custom method we pass to int the 2 array.
    ascendente = parseInt(concatenateArray(array));
    descendente = parseInt(concatenateArray(array2));
    
    //kaprekan operation is done and it passes it to string.
    numero = ascendente-descendente;
    numero = numero.toString()

    //output of number
    console.log(numero);
    
    //we reset the array and load it with the new number.
    array = [];
    for (let i = 0; i < numero.length; i++) {
        array.push(numero.charAt(i));
    }

    //we increase the counter
    repeticiones++;
}
//output to aknowledge the repetitions
console.log("El proceso se ha repetido un total de " + repeticiones + " veces.");

//Function to pass the content of an array to a string.
function concatenateArray(array){
    let string = "";
    for (let i = 0; i < array.length; i++) {
        string = string + array[i];
    }
    return string;
}



    


    
