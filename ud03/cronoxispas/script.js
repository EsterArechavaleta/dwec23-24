/*
let cronoxispas; // damos nombre a la variablelet 

function crono() {
    
    let miFecha = new Date();
    let horas = 0;
    let minutos = 0;
    let segundos = 0;
     
    if(horas < 10){horas = "0" + horas;}
    if(minutos < 10){minutos = "0" + minutos;}
    if(segundos < 10){h = "0" + segundos;}


    let cronometro = document.getElementById("cronometro");
   
    cronometro.innerHTML = horas + ":" + minutos + ":" + segundos;
}


window.onload = function() {
    inicio = setInterval(crono, 1);
}

function inicio() {
    inicio.setInterval(crono, 1);
    for(segundos = 0; segundos < 60; segundos++){
        for(minutos = 0; minutos < 60; minutos++){
            for(horas = 0;)
        }
    }
}

function fin() {
    fin = clearInterval(inicio);
}
*/

let elCrono;
let miFecha = new Date();
let laHora = document.getElementById("laHora");

//inicialización el tiempo para el cronómetro.
miFecha.setHours(0, 0, 0, 0);//aqui se ponen 4 0para dejar también los milisegundos aunque no se trabaje con ellos

//Inicializo el texto de "lahora".
laHora.innerHTML = "00:00:00";

function crono() {
    let horas = miFecha.getHours();
    let minutos = miFecha.getMinutes();
    let segundos = miFecha.getSeconds();

    segundos += 1;

    if(segundos == 60){
        segundos = 0;
        minutos += 1;

        miFecha.setMinutes(minutos);
    }
    miFecha.setSeconds(segundos);//esto es para que los segundos se sigan actualizando sin interrupcion

    if(horas <10) { horas = "0" + horas};
    if(minutos <10) { minutos = "0" + minutos};
    if(segundos <10) { segundos = "0" + segundos};

    laHora.innerHTML = horas + ":" + minutos + ":" + segundos;
}

function reiniciarCrono() {
    //inicialización el tiempo para el cronómetro.
    miFecha.setHours(0, 0, 0, 0);//aqui se ponen 4 0para dejar también los milisegundos aunque no se trabaje con ellos

    //Inicializo el texto de "lahora".
    laHora.innerHTML = "00:00:00";
}

function start() {
    elCrono = setInterval(crono, 1000);
} 

function stop() {
    clearInterval(elCrono);
}

function reset() {
    setTimeout(reiniciarCrono, 5000);
}

