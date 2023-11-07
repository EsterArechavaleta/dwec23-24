


/*FECHAS


*/
let parrafo = document.getElementById("fecha");
parrafo.innerHTML = Date();
//document.getElementById("fecha").innerHTML ="Hola";
/* hay 4 formas diferentes de inicializar el objeto tipo fecha */
// new Date();
// new Date (milisegundos);
// new Date (fechaString);
// new Date (año, mes, dia, horas, minutos, segundos, milisegundos)

/* fecha con milisegundos

let fecha = new Date (92500000);
parrafo.innerHTML = fecha;
*/
/*fecha con dia mes y año

let fecha = new Date("10/14/2022");
parrafo.innerHTML = fecha;
*/
/* en String (formato completo)

let fecha = new Date(Jan 16 2000);
parrafo.innerHTML = fecha;
*/
/* formato ISO

let fecha = new Date("2019-09-18");
parrafo.innerHTML = fecha;
*/

/*metodo largo
let fecha = new Date(71,12,29,15,15,0,0);  hay que poner 1 mes menos para que lo de bien
parrafo.innerHTML = fecha;
*/

//METODOS TIPO FECHA

// let fecha = new Date(71,12,29,15,15,0,0);  //hay que poner 1 mes menos para que lo de bien
// parrafo.innerHTML = fecha.getDate; // da el dia del mes del 1 al 31
// parrafo.innerHTML = fecha.getDay; // da el dia de la semana
// parrafo.innerHTML = fecha.getFullYear; // da el año
// parrafo.innerHTML = fecha.getHours; // da las horas
// parrafo.innerHTML = fecha.getMilliseconds; // da los milisegundos
// parrafo.innerHTML = fecha.getMinutes()+2; // da los minutos y en este caso le sumamos 2
// parrafo.innerHTML = fecha.getMonth; // da los meses, pero empieza de 0 a 11
// parrafo.innerHTML = fecha.getSeconds; // da los segundos
// parrafo.innerHTML = fecha.getTime; // da la hora en milisegundos y empieza el 1 de enero de 1970



