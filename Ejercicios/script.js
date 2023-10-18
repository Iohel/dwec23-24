/*
Array de Array
Array[Planeta[]x5]
Objeto planeta
    Nombre
    Distancia
    Tamaño Relativo
    Fecha de descubrimiento
    date show today
    showData function
    sort

*/

let array = new Array(5);
for (let i = 0; i < array.length; i++) {
    array[i] = new Array();
    switch (i) {
        case 0:
            //Venus
            array[i].push("Venus");
            array[i].push(0.72);
            array[i].push(0.95);
            array[i].push("4/12/1639");
            break;
        case 1:
            //Mars
            array[i].push("Mars");
            array[i].push(1.54);
            array[i].push(0.53);
            array[i].push("13/10/1590");
            break;
        case 2:
            //Saturn
            array[i].push("Saturn");
            array[i].push(9);
            array[i].push(9.44);
            array[i].push("1/1/1655");
            break;
        case 3:
            //Neptune
            array[i].push("Neptune");
            array[i].push(30.1);
            array[i].push(3.88);
            array[i].push("23/9/1846");
            break;
            
        case 4:
            //Uranus    
            array[i].push("Uranus");
            array[i].push(20);
            array[i].push(4.01);
            array[i].push("13 March 1781");   
            break;
        default:
            break;
    };
}

console.log(array);