let elCrono;
let mifecha = new Date;
let laHora = document.getElementById("time");

//inicializa el tiempo del cronometro
mifecha.setHours(0,0,10,0);

//inicializa el texto de laHora
laHora.innerHTML = "00:02:01";

//Main interval
function crono(){

    let horas = mifecha.getHours();
    let minutos = mifecha.getMinutes();
    let segundos = mifecha.getSeconds();

    segundos -= 1;

    if(segundos == -1){
        segundos = 59;
        minutos -= 1;
        
        mifecha.setMinutes(minutos);
    }

    mifecha.setSeconds(segundos);

    if (horas < 10) {horas = "0" + horas;}
    if (minutos < 10) {minutos = "0" + minutos;}
    if (segundos < 10) {segundos = "0" + segundos;}

    laHora.innerHTML = horas + ":" + minutos + ":" + segundos;

}
function reiniciarCrono(){
    mifecha.setHours(0,2,1,0);

//inicializa el texto de laHora
    laHora.innerHTML = "00:02:01";
}
function start(){
    elCrono = setInterval(crono, 1000);
}

function stop(){
    clearInterval(elCrono);
}

function reset(){
    setTimeout(reiniciarCrono,0)
}

