let elCrono;
let mifecha = new Date;
let laHora = document.getElementById("time");

//inicializa el tiempo del cronometro
mifecha.setHours(0,0,0,0);

//inicializa el texto de laHora
laHora.innerHTML = "00:00:00";

//Main interval
function crono(){

    let horas = mifecha.getHours();
    let minutos = mifecha.getMinutes();
    let segundos = mifecha.getSeconds();

    segundos += 1;

    if(segundos == 60){
        segundos = 0;
        minutos += 1;
        
        mifecha.setMinutes(minutos);
    }

    mifecha.setSeconds(segundos);

    if (horas < 10) {horas = "0" + horas;}
    if (minutos < 10) {minutos = "0" + minutos;}
    if (segundos < 10) {segundos = "0" + segundos;}

    laHora.innerHTML = horas + ":" + minutos + ":" + segundos;


}
function reiniciarCrono(){
    mifecha.setHours(0,0,0,0);

//inicializa el texto de laHora
    laHora.innerHTML = "00:00:00";
}
function start(){
    elCrono = setInterval(crono, 1000);
}

function stop(){
    clearInterval(elCrono);
}

function reset(){
    setTimeout(reiniciarCrono,5000)
}

