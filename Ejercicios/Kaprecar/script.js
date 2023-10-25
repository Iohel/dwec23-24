//ejercicio KapreKar
//size 4, 3 o 4


//Comprobador
let numero;
let comprobador;
let arrayAscendente=[];
let arrayDescendente=[];
do{
    numero = prompt("Input a number with atleast 3 different digits.");
    console.log(numero);
    comprobador = new Set();
    arrayAscendente = new Array();
    if(numero.length == 4){
        for (let i = 0; i < numero.length; i++) {
            comprobador.add(numero.charAt(i));
            arrayAscendente.push(numero.charAt(i))
            arrayDescendente.push(numero.charAt(i))

        }
    }
}while(!comprobador.size>2 || comprobador.size == 0)

/* for (let i = 0; i < numero.length; i++) {
    arrayAscendente.push(numero.charAt(i))
    console.log(arrayAscendente);
} */

//Kaprekan loop
let repeticiones = 0;
while(numero.match("6174")){

    arrayDescendente = arrayDescendente.sort((a,b)=>{
        return b.localeCompare(a);
    });
    arrayAscendente = arrayAscendente.sort((a,b)=>{
        return a.localeCompare(b);
    });
    
    parseInt(arrayDescendente);
}

console.log(arrayDescendente);
console.log(arrayAscendente);




    


    
