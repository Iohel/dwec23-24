const obtenerTODOS = (allblack,source)=>{

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange',()=>{
        if(request.readyState === 4 && request.status === 200){
            //console.log(request);
            //console.log(request.responseText);
            const respuesta = JSON.parse(request.responseText);
            allblack(undefined, respuesta);
        }else if (request.readyState === 4) {
            //console.log("No se ha podido obtener los datos.");
            allblack("No se ha podido obtener los datos.",undefined);
        }
    });
    
    //open
    //P1: tipo de solicitud
    //P2: a que endpoint se solicita
    //https://jsonplaceholder.typicode.com/todos
    request.open('GET', source);
    
    //send
    request.send();

};
function gestionarRespueste(error,data){
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
}
console.log(1);
console.log(2);

obtenerTODOS((error,data)=>{

    console.log("callback3");
    
    gestionarRespueste(error,data);
    
},"./todos/tareas1.json");


console.log(3);
console.log(4);