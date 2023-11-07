/*
4321-1234= 3087
hasta llegar al 6174 en máximo en 7 ciclos
*/
/*
const numero = prompt("Elige un número de 4 cifras"); // solicitamos por pantalla las 4 cifras
console.log(numero);
let arrayNumeros = new Array (4); // creamos un array para guardarlas
let arrayAscendente = new Array (4);// para guardar el array ordenado
let arrayGirada = new Array (4);// para guardar el array descendente
let girado; // variable para guardar el array convertido a número
let ascendente; // variable para guardar el array ascendente en número
let intentos = 0; // creamos contador para límite de iteraciones


function iteracion () {
    do {
        arrayNumeros = [...numero.sort()]; // guardamos el número introducido en el array y lo ordenamos
        arrayAscendente = [...arrayNumeros]; // copiamos array para guardarlo y que al girarlo, no perderlo

        console.log(arrayNumeros); // imprimimos por pantalla el nuevo array ordenado de menor a mayor

        // giramos el array sin perder el original ya que lo hemos guardado en otro array
        arrayGirada = arrayNumeros.reverse(); 
        console.log(arrayGirada);

        // pasar los array a String
        girado = arrayGirada.join(""); // así los pasamos a string
        ascendente = arrayAscendente.join("");

        // pasar los Strings a números
        girado = parseInt(girado); // así las pasamos a número para poder operar
        ascendente = parseInt(ascendente);

        //restamos los números para volver a empezar con el resultado
        let nuevo = girado - ascendente;
        intentos ++;

        arrayNumeros = [...nuevo.sort];
    } while (( nuevo !== 6174) && (intentos < 8) && (numero.length == 4));
    
}
console.log("El número era " + numero + " y se han hecho " + intentos + " hasta llegar al resultado deseado.");

/*
if (( nuevo !== 6174) && (intentos < 8) && (numero.length == 4)) {
    arrayNumeros = [...numero.sort]; // guardamos el número introducido en el array y lo ordenamos
    arrayAscendente = [...arrayNumeros]; // copiamos array para guardarlo y que al girarlo, no perderlo

    console.log(arrayNumeros); // imprimimos por pantalla el nuevo array ordenado de menor a mayor

    // giramos el array sin perder el original ya que lo hemos guardado en otro array
    arrayGirada = arrayNumeros.reverse(); 
    console.log(arrayGirada);

    // pasar los array a String
    girado = arrayGirada.join(""); // así los pasamos a string
    ascendente = arrayAscendente.join("");

    // pasar los Strings a números
    girado = parseInt(girado); // así las pasamos a número para poder operar
    ascendente = parseInt(ascendente);

    //restamos los números para volver a empezar con el resultado
    let nuevo = girado - ascendente;
    intentos ++;

    arrayNumeros = [...nuevo.sort];
    console.log("El número era " + numero + " y se han hecho " + intentos + " hasta llegar al resultado deseado.");
}
*/
//correccion

const numeroKaprekar = 6174;
// pasos realizados
//numero entrado por el usuario
let numero;
let pasos = 0;


//pedimos al usuario el número y capturamos
//(será una cadena)
let promptText = "Elija un número de 4 dígitos"; 
promptText += "que esté formado por al menos dos dígitos";
promptText += "diferentes, incluido el 0." // solicitamos por pantalla las 4 cifras

//lanzamos el prompt
//numero = prompt (promptText);
//numero = "1234";
if(!validaNumero(numero)) {
    console.log("El número introducido no es válido");
}else{
    while (numero != numeroKaprekar) {

    //llamamos a la funcion kaprekar
        numero = kaprekar(numero);

    //aumentamos el número de pasos
        pasos++;

    // Evitamos bucles infinitos i/o innecesarios
        if(pasos > 7) {
            console.log("Nñumero de pasos superado, algo no está bien...");
            break;
        }

    // si el número obtenido es el de kaprekar, informamos de los pasos realizados
        if(numero == numeroKaprekar) {
            console.log("pasos drealizados: " + pasos);
        }
    }
}

/*
Función que realiza las operaciones necesarias para obtener el número de kaprekar 
pasandole como parámetro  el número a tratar.
Devuelve el número obtenido
*/
function kaprekar(numero) {

 //creamos un array para poder tratar el número dígito a dígito
    let arrayNumero = new Array();

 // variables para guardar los números a restar
    let mayor, menor;

 //Añadimos el número al array
   /* for(let i = 0; i < numero.length; i++) { // una manera de hacerlo
        arrayNumero[i] = numero[i];
    }*/

   /* for(let i = 0; i < numero.length; i++) { // otra manera de acerlo
        arrayNumero[i] = numero.charAt(i);
    }*/

    for(let i = 0; i < numero.length; i++) {
        arrayNumero.push(numero.charAt(i));
    }
// ordenamos el array con sort y quedará ordenado de menos a mayor
    arrayNumero.sort();

//guardamos en la variable "menor" el contenido del array "unido".
    menor = uneDigitos(arrayNumero);

//Le damos la vuelta al array, y por lo tanto al número
    arrayNumero = daleLaVuelta(arrayNumero);

//guardamos en la variable mayor el contenido del array.
    mayor = uneDigitos(arrayNumero);

// Realizamos la resta
    numero = mayor - menor;
    
    console.log(mayor + " - " + menor + " = " + numero);

    return formateaNumeroACuatroDigitos(numero.toString(), true);
}

/*
Devuelve un array con los elementos cambiados sinétricamente respecto al array pasado por parámetro
*/
function daleLaVuelta(arrayNumero) {
    let arrayAux = new Array(arrayNumero.length);

    for(let j = 0; j < arrayNumero.length; j++) {
        arrayAux[arrayNumero.length - 1 - j] = arrayNumero[j];
    }

    return arrayAux;
}

/*
Devuelve una cadena formada por los elementos del array pasado por parámetro
tomados como caracteres desde el menor indice hasta el último
*/
function uneDigitos(arrayNumero) {
    let cadena = "";
    
    for(let i = 0;i<arrayNumero.length; i++) {
        cadena += arrayNumero[i];
    }

    return cadena;
}
/*
Añade ceros delante o detrás de una cadena que representa un valor numérico que necesariamente ha de 
tener cuatro dígitos
*/
function formateaNumeroACuatroDigitos(numero, esIzquierda) {
    if(esIzquierda) {
        if(numero.length == 3) {
            numero = "0" + numero;
        }else if( numero.legth == 2) {
            numero = "00" + numero;
        }else if(numero.length == 1) {
            numero = "000" + numero;
        }
    }else{
        if(numero.length == 3) {
            numero = numero + "0";
        }else if( numero.legth == 2) {
            numero = numero + "00";
        }else if(numero.length == 1) {
            numero = numero + "000";
        }
    }
    return numero;
}


/*
funcion que valida un número, comprobando que:
-sea un número
-no tenga más de 4 dígitos
-un dígito no se repita más de 2 veces.
*/
function validaNumero(numero) {
    
    //Que sea un número:
    if(numero == null || isNaN(numero)){
        return false;
    }

    //no tenga más de 4 cifras:
    /*if(numero.length > 4){
        return false;
    }*/

    if(+numero > 9999 || +numero <= 22) {
        return false;
    }   // esta es otra forma de comprobarlo

    //un dígito no se repita más de 2 veces:
    //const numeros = Array.from(String(numero), Number); //una manera de pasar a array
    //const numeros = numeros.split(""); // otra manera de pasarlo y separarlo
    const numeros = [...numero];
    const setNumeros = new Set(numero); // así no admite duplicados ha separados los 
    //dígitos del array por lo que podemos saltar las 3 formas de pasarlo
    if(setNumeros.size < 2) {
        return false;
    }
   
}


