//contadores alante y atras, cronómetros, relojes...
/*
dom -> document object model
bom -> browser object model
*/

//setInterval() y setTimeOut()
// setTimeOut(funcionALlamar, milisegundos)
/*
Ejecuta la función funcionALamar transcurrido el tiempo indicado en el segundo parámetro.
En la función aLlamar no hay que ponerle los paréntesis ya que ejecutaria la función al instante
*/

//setInterval (funcionALlamar, milisegundos)
/*
Ejecuta la función funcionALlamar de manera periódica, según el tiempo del 2º parámetro 
*/

//clearInterval()
/*
Detiene la ejecución iniciada con setInterval()
*/

//clearTimeOut()
/*
Detiene la ejecución iniciada con setTimeOut()
*/
/*
function crono() {
    let elCrono;
    let miFecha = new Date();
    let horas = miFecha.getHours();
    let minutos = miFecha.getMinutes();
    let segundos = miFecha.getSeconds();
    let ampm = "pm";

    if(horas > 12) {
        ampm = "pm";
        horas -= 12;
    }else{
        ampm = "am";
    }

    if(horas < 10){horas = "0" + horas;}
    if(minutos < 10){minutos = "0" + minutos;}
    if(segundos < 10){h = "0" + segundos;}


    let laHora = document.getElementById("lahora");
    laHora.innerHTML = horas + ":" + minutos + ":" + segundos + " " + ampm;
}

/*window.onload = function() {
    elCrono = setInterval(crono, 1000);
}
*/



//cookies
/* 
se utilizan para guardar información y faciliten la navegación, para guardar carritos de compra, usuarios... de manera que si 
cerramos el navegador no perdemos esos datos
Utilizamos las cookies para:
- monitorizar la actividad de los usuarios
- mantener opciones de visualización o de aspecto para el usuario
- almacenar variables en el lado cliente
- identificación o autenticación 
hay un número límite de cookies permitidas en un servidor y que puede soportar un navegador

CREAR UNA COOKIE:
*/

//document.cookie = "usuario=Oreo";

function crearCookie(usuarioCookie) {
    console.log("creando la cookie");
    usuarioCookie += ";expires=Tue, 7 Nov 2023 12:15:00 GMT";
    document.cookie = "usuario=" + encodeURIComponent(usuarioCookie);
    console.log(usuarioCookie);
}

function leerCookie() {
    console.log("leyendo las cookies");
    console.log(decodeURIComponent(document.cookie));
}

// para indicar cuando queremos que caduque

/*
LOCAL STORAGE

Nos permite guardar en el navegador información desde una cadena o número a Arrays y objetos.
Aunque actualicemos el navegador, sigue estando la información.

setItem(clave, valor);
getItem(clave);
*/

function guardaValores() {
    console.log("Guardando valores en local Storage");
    let usuariosWeb = {
        nombre : "Joan",
        apellido : "Melsion"
    };
    localStorage.setItem("usuarios",JSON.stringify( usuariosWeb));// esto es para guardar arrays u objetos poder luego leerlo

}

function leerValores() {
    console.log("Leyendo valores de local storage");
    let valor = JSON.parse(localStorage.getItem("usuarios"));//con esto volvemos a cambiarlo para leerlo
    console.log(valor == null ? "La clave no se ha encontrado." : valor);

}

/*
RECURSIVIDAD
se utiliza para llamar a una funcion repetidamente en sí misma, por lo que necesitamos un condicion de salida

factorial: n*n-1*n-2... 
*/

/*function factorial(numero) {

    if(numero ==0) return 1;
    return (numero * factorial(numero - 1));
    
}
let numero = factorial(6);
console.log(numero);

*/

