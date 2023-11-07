// usamos los arrays para guardar una coleccion de elementos
/*
let vacio = [];//no tiene elementos
let primos = [2, 3, 5, 7, 11];// con 5 elementos numéricos
let miscelanea = [1.1, true, "a", ];// varios tipos de datos y coma suelta
*/
// los valores de los elementos literales no tienen por qué ser constantes
/*
let n = 1024;
let tabla = [n, n + 1, n + 3];

console.log(tabla); // muestra la suma de los valores
console.log(miscelanea); 
console.log(vacio.length); 
*/
/*
let contador = [1, 3]; 
console.log(contador.length);// da 2 elementos*/
/*
let contador = [1, 3, ]; 
console.log(contador.length);// da 2 elementos ya que el elemento que queda 
//vacio no lo cuenta
*/

//OPERADOR SPREAD

/*
let a = [1, 2, 3];
let b = [0, 4];
console.log(b);// imprime 0 y 4
*/

/*
let a = [1, 2, 3];
let b = [0,...a, 4];// ...a incrusta los elementos de a, uno por uno, dentro del otro array (b)
console.log(b);// imprime 0,1,2,3,4
*/

//permite realizar una copia de un array
/*
let original = [1, 2, 3];
let copia = [...original];
console.log(original);
console.log(copia);//imprime lo mismo ya que la copia creando uno nuevo

para acceder a los elementos:


console.log(original[0]);
original[0] = 9; 
// asigna el valor 9 en el original pero no cambia la copia porque son independientes

*/
/*
let digitos = ["0123456ABCDEF"];
console.log(digitos);//imprime todo junto

let digitos = [..."0123456ABCDEF"];
console.log(digitos);// los separa dando un lugar a cada uno
*/

//CONSTRUCTOR DE ARRAY

// let aa = new Array(); //crea un array vacío
/*

let aa = new Array(10);// el número dentro del paréntesis le asigna una longitud, 
//aunque si se le ponen 2 valores, crea un array con los 2 valores y de 2 espacios

*/
/*
 otra forma de inicializarlo
let aa = new Array(1, 2, 4, 54, -1, "prueba", true);
console.log(aa.length);
console.log(aa);
*/
/*
 let bb = Array.of(10); // crea 1 elemento de valor 10 y es un metodo, no un constructor
 console.log(aa[1+1]); // da el valor de la posición 2, vale para los bucles [i+1]

// PUSH  añade una posición al array, crea un espacio más y le da el valor

/*
await.push(5);// pondría el valor al final, si se pone más de un elemento, los introduce en el orden dado, al final
console.log(aa[aa.length-1]);// si no sabemos cuantas posiciones tiene el array así nos lee la última posición.
*/
/*
let a = [1, 2, 3];
console.log(a);
delete a[2];
console.log(a);
let i = 0;
if(a[i]){
    console.log(a[i]);
}else{
    console.log("slot vacio!");
}
*/

// ITERAR ARRAYS

/*
let letras = [..."hola amiguitos"];
let aux = "";

//variante del for, es un foreach
for(let letra of letras) {
    aux += letra;
}

console.log(aux);// escribe la frase
*/

/*let letras = [..."hola amiguitos"];
let aux = "";


for(let letra of letras) {
    aux += letra;
}

aux = "";
let suma = 0;

for(let [index, letra] of letras.entries()){// el array tiene valores y un indice, y es lo que se considera aquí
    /*suma += index;
    aux += letra;*/
   /* if(index % 2 === 0) aux += letra; // al ser en una sola linea el if no lleva la llave
}
console.log(aux);
//console.log("suma: " + suma);
*/

/*
let mayusculas = "";
let letras = [..."hola amiguitos"];
console.log(letras);

letras.forEach(letra => {
    mayusculas += letra;
});

console.log(mayusculas);
*/
/*
let mayusculas = "";
let letras = [..."hola amiguitos"];
console.log(letras);

letras.forEach(letra => {
    mayusculas += letra.toUpperCase();
});

console.log(mayusculas);
*/

/*
let mayusculas = "";
let letras = [..."hola amiguitos"];
let index = 0;
console.log(letras);
letras.forEach(letra => {
    if(index % 2 === 0) {   
        mayusculas += letra.toUpperCase();
    }else{
        mayusculas += letra

    }
    index++;
});
console.log(mayusculas);
*/
//otra forma:

/*
//expresiones regulares valen para validar datos en un formulario // se puede mirar las expresiones en internet
let letra = "";
let vocales = "";
for (let i = 0; i<letras.length; i++){
    letra = letras [i];
    if(/[aeiou]/.test(letra)){
        vocales += letra;// elige una de la expresion y mira si letra está en el grupo
    }
}
//console.log(vocales);
*/

//ARRAYS MULTIDIMENSIONALES
//los elementos del array son por si mismos otro array
/*
let tabla = new Array(10);
for(let i = 0; i < tabla.length; i++){
    tabla[i] = new Array(5);// a cada elemento le introducimos otro array de 5 elementos/ cada fila va a tener 5 columnas
}

for(let fila = 0; fila < tabla.length; fila++){
    let miArrayInterior = tabla[fila];
    for(let col = 0; col < miArrayInterior.length; col++){
        miArrayInterior[col] = fila * col;
    }
}
console.log(tabla);

*/
/*
let tabla = new Array(10);
for(let i = 0; i < tabla.length; i++){
    tabla[i] = new Array(11);// a cada elemento le introducimos otro array de 5 elementos/ cada fila va a tener 5 columnas
}

for(let fila = 0; fila < tabla.length; fila++){
    let miArrayInterior = tabla[fila];
    for(let col = 0; col < miArrayInterior.length; col++){
        miArrayInterior[col] = fila * col;
       // let resultado = col * fila;
       // console.log(resultado);
        if(resultado % 2 != 0){
            console.log(resultado);
        }
    }
}
//console.log(tabla);
*/

// METODOS DE ARRAYS

//push() añade 1 o más elementos al final del array
//pop() elimina el último elemento del array y LO DEVUELVE
/*
let paco = ['joan', 'amparo', 'esther'];
console.log(paco);
//paco.pop();  // esto elimina a esther
let elementoEliminado = paco.pop();
console.log(elementoEliminado);
*/

//shift() elimina el PRIMER elemento y LO DEVUELVE
/*
let paco = ['joan', 'amparo', 'esther'];
console.log(paco);
let elementoEliminado = paco.shift();
console.log(elementoEliminado);
*/

// Uunshift() Agrega uno o más elementos al PRINCIPIO
/*
let paco = ['joan', 'amparo', 'esther'];
console.log(paco);
paco.unshift('valentin', 'pepe');
console.log(paco);
*/

//concat() combina dos o más arrays y devuelve un nuevo array
/*
let paco = ['joan', 'amparo', 'esther'];
let otros = ['valentin', 'pepe'];
let combinacion = paco.concat(otros)
console.log(combinacion);
console.log(otros.concat(paco));
*/

//slice() devuelve una copia (superficial) de una porción del array
/*
let paco = ['joan', 'amparo', 'esther'];
let otros = ['valentin', 'pepe'];
let combinacion = paco.concat(otros);
let copiaPaco = paco.slice(0,1); // (desde, hasta índice) si se pone solo un número copia desde ese índice al final
console.log(copiaPaco);
*/

// splice() cambia el contenido de un array eliminando, reemplazando o agregando elementos
/*
let paco = ['joan', 'amparo', 'esther'];
let otros = ['valentin', 'pepe'];
paco.splice(1, 0, 'valentin', 'pepe');//(posicion, borramos, añadimos)
console.log(paco);
// si añadimos (1,0, otros) añade el array como elemento en ese espacio, si ponemos ...otros, los añade individualmente 
*/

//indexOf() devuelve el primer índice en el que se encuentra un elemento dado. Devuelve -1 si no lo encuentra.
/*
let paco = ['joan', 'amparo', 'esther'];
let otros = ['valentin', 'pepe'];
let indice = paco.indexOf('amparo');
let cadena = "Hola cara de bola";
indice = cadena.indexOf("a");//las cadenas funcionan como arrays en indexOf()
indice = paco.lastIndexOf("amparo");//también funciona con los arrays y da la última posición
console.log(indice); // nos devuelve 1 y es la posición donde se encuantra, siempre es la primera vez que sale,
//aunque esté repetido.
*/

//join() une todos los elementos de un array en una cadena y (utilizando un separador especificado)
/*
let paco = ['joan', 'amparo', 'esther'];
let otros = ['valentin', 'pepe'];
let cadena = paco.join(', ');// entre los paréntesis se pone el tipo de separador que queremos (->, ,, /, ...)
console.log(cadena);
*/

// sort() ordena los elementos de un array alfabéticamente si son cadenas y numéricamente si son números
// permite el uso de parámetros en ()
/*
let paco = ['joan', 'amparo', 'esther'];
let otros = [3, 4, 2, 10, -1, 0];
console.log(paco.sort());
console.log(otros.sort());
*/
// si tengo un array mixto empieza con números, Strings y con true y false los ordena conjuntamente
//con el String de forma alfabética
// para utilizar el método de forma correcta:
// si hay mayúsculas y minúsculas: 
// ordenar correctamente con sort => uso de parámetro y se trata de una función
//- Debe recibir 2 valores a comparar
//- como resultado debe:
//  - devolver un valor positivo (1) si el primer valor de la comparación es superior al segundo.
//  - devolver un valor negativo (-1) si el primer valor es inferior al segundo
//  - devolver un valor  (0) si los dos valores son iguales o equivalentes para la ordenación

// sort en números
/*
let numeros = [10, 5, 8, 3, 1];
console.log(numeros.sort(function(a, b) { // estas funciones se llaman anónimas
    return a - b;
}));
*/
/*
let numeros = [10, 5, 8, 3, 1];
console.log(numeros.sort((a, b) => { // estas funciones se llaman anónimas
    return b - a;
}));
// console.log(numeros.sort((a,b) => b - a));  // es otra forma de poner lo anterior
*/

// sort en cadenas:
/*
let paco = ['joan', 'amparo', 'esther', 'Zoraida', 'Barbara', 'Ángel'];
/*
console.log(paco.sort((a, b) => {
   return (a.toLowerCase() > b.toLowerCase()) ? 1 : //pregunta si uno es mayor que el otro devuelve booleano
   (a.toLowerCase() < b.toLowerCase()) ? -1 : 0;
}));
// al comparar cadenas es buena práctica y hacer siempre que sea posible
*/
/*
console.log(paco.sort((a, b) => {
return a.localeCompare(b);
}));
*/

//FUNCIONES:
// encapsular código y poder reutilizarlo, a veces se les llama métodos
// no tienen por qué devolver nada y se puede hacer que acepten parámetros o no.
/*function diHola(){
    console.log("Hola");
}
diHola(); // llama a la funcion y aunque se ponga antes de la función se ve igual
*/
/*
//console.log(multiplica(3, 10) + 1);//se puede concatenar números
let resultado = multiplica(3, 10);
console.log(resultado);

function multiplica(c, d) {
    let a = 10;
    let b = 20;

    return (a * b * c * d); // si queremos que devuelva el resultado se pune esto, si no, con cgl lo muestra
   // console.log(a * b * c * d);
}
*/

// OBJETOS
/*el JavaScript 6 incorpora clases
son estructuras entre llaves, se utilizan para almacenar múltiples valores, normalmente relacionados entre sí,
podemos tener propiedades y funciones, dentro.
las propiedades serán pares clave-valor y los métodos son funciones
las claves de las propiedades de un objeto (persona, nombre) pueden ser cadenas de texto o 
algún tipo de identificador válido
para las claves, podemos omitir las comillas, el nombre no tiene por qué llevar comillas excepto las excepciones de luego
no pasa lo mismo en los valores que si han de llevar comillas
caracteres ascii
especiales
espacios en blanco...
*/
/*
let unCliente = { // aqui dentro van los métodos y propiedades
    nombre: "Peter",
    apellido: "Jackson",
    "dirección fiscal": "c/ desconocida", // al ser un String hay que poner comillas
    "+-+-+-+": "boquesa",
    pago: {
        tipo: "Visa",
        tarjeta: "123456789",
        "fecha de caducidad": "nunca"
    },
    vencimiento: 30
}

// si queremos modificar el valor del objeto se puede hacer con corchete []
unCliente["vencimiento"] = 60;

console.log(unCliente);
console.log(unCliente["nombre"]);
console.log(unCliente["+-+-+"]);
// un objeto puede tener como propiedad otro objeto
//para llamar al objeto dentro del otro:
console.log(unCliente["pago"]["tipo"]);
unCliente.apellido = "García";
console.log(unCliente.apellido);//en los especiales se necesitan los corchetes, no se puede llamar solo con el punto
console.log(unCliente.pago["fecha de caducidad"]);
//los objetos Json se definen con llave-valor ya que son objetos de JavaScript
// los elementos de un objeto pueden serde varios tipor, cadenas, booleanos, 
//arrays, otro ojeto y funciones y puede ser muy complejo ya que se pueden anidar
*/

//utilizar métodos como elementos (datos)
/*
let estudiante = {
    id: 2,
    nombre: "Ester",
    diHola : function() {
        return "Hola";
    },
    notas: [10, 0, 4],
    media: function(){
        let suma = 0;
        let nota = 0;
        for(let i=0; i<estudiante.notas.length; i++){
            suma += estudiante.notas[i];
        }
    }
}
let suma = estudiante.notas[];



console.log(estudiante.nombre);
console.log(media);

solo falta sacar la media
*/
/*
let estudiante = {
    id: 2,
    nombre: "Ester",
    diHola : function() {
        return "Hola";
    },
    notas: [10, 0, 4]
}
/*
estudiante.apellido = "Arecha"; // esto añade la propiedad apellido, solo utilizándola

estudiante.diAdios = function() {
    return "Adios";
}

console.log(estudiante.diAdios());
*/
/*
// la palabra this hace referencia al propio objeto
let factura = {
    descripcion: "factura de prueba",
    precio: 100.0,
    iva: 21.0,
    subTotal: function() {
        return this.precio;
    },
    total: function() {
        return this.precio + (this.precio * this.iva) / 100;
    }
}
//console.log(factura);
//console.log(factura.total());

//CONSTRUCTORES:
/*
no existe class pero si los constructores
con new creamos instancia del propio objeto
el nombre de la funcion va con mayuscula cuando es una funcion de tipo constructor
*/
/*
function Web() { // se usa siempre la palabra this
    this.url = "http://localhost";
    this.nombre = "Localhost";

    this.muestraInformacion = function () {
        return "url: " + this.url + "\n" + "Web: " + this.nombre;
    }
}
let unaWeb = new Web()// automáticamente hereda los métodos de Web
unaWeb.url = "https://www.fcbarcelona.cat"; // si no se cambia o asigna nada, coge los valores por defecto
unaWeb.nombre = "Mes que un club";

//console.log(unaWeb);
//console.log(unaWeb.muestraInformacion());

let otraWeb = new Web();
otraWeb.url = "https.hello.com";
otraWeb.nombre = "hello ello";


Web.visitas = 2; 
console.log(otraWeb.visitas);// esto no se ve, no sale
//prototype es una propiedad que tienen los objetos en JS, para poder ver las instancias realiadas después
Web.prototype.visitas = 2;
Web.prototype.miFuncion = function() {
    return "Hola";
}

//console.log(otraWeb);
//console.log(otraWeb.muestraInformacion());
*/

//ORDENAR ARRAYS DE OBJETOS
/*
const ciudades = [ // estos son objetos anonimos
    {
        "municipio": "Zaragoza",
        "provincia": "Zaragoza"
    },
    {
        "municipio": "Ávila",
        "provincia": "Ávila"
    },
    {
        "municipio": "madrid",
        "provincia": "madrid"
    },
    {
        "municipio": "Barcelona",
        "provincia": "Barcelona"
    }

];
console.log(ciudades);
function ordenaPorFavor() {
ciudades.sort((a, b)=> {
    return a.provincia.localeCompare(b.provincia);
});
}
console.log(ciudades);
*/

//ES6

//a partir de aquí solo se utiliza let y const
/*
const miArray = ["A", "b", "c"];
miArray.push("D"); // aunque está declarado como constante pero ha añadido un elemento
console.log(miArray);
const A = "a";
//A = "b"; //no funciona
miArray[1] = "B";
console.log(miArray); // muestra con la B cambiada
*/

// DESESTRUCTURACIÓN 
/*
const numeros = [1, 2,]; 
// cuando queremos que cada valor de un Array caiga en una variable
const [a, b, c] = numeros; // tenemos un array con unas variables que creamos ahora
console.log(b + c);//esto da NaN por no tener valor c
//si asignamos una variable menos, no guarda el valor en una, lo deja en el array
*/

//desestructurar un objeto
/*
const persona = {
    nombre: "Andreu",
    edad: 33
}
const { nombre, edad} = persona;// aquí tiene que tener el mismo nombre
console.log(nombre);//aquí también
*/
//podemos asignar valores a propiedades de objetos a través de variables predefinidas
/*
const nombre = "Josep";
const edad = 33;

const persona = {// por estar declarado antes entiende que tiene una propiedad llamada nombre y otra llamada edad
    nombre,      // pero no hay que volver a declararlas, lo entiende y asigna donde toca
    edad
}
console.log(nombre);
*/
//Template Strings o plantillas de cadenas
//mediante el operador de interpolación ${} podemos introducir valores que tengamos almacenados en una estructura
// y guardarlos en cadenas
/*
const nombre = "Bob";
const edad = 32;
// para que el operador interpolación funcione, se han de usar los acentos`abiertos, no las comillas dobles
const mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
console.log(mensaje);
*/
// operador Spread
/*
const numeros = [1, 2, 3];
const nuevosNumeros = [...numeros,4, 5];
console.log(object); // nos salen los 2 array añadidos y crea uno de 5 elementos, si les quitamos los ... 
// pone en primer lugar el array números
*/
//PARAMETROS POR DEFECTO
/*
function saludar(nombre){// si ponemos (nombre ="Invitado") si no ponene un nombre, sale esto por defecto
    console.log(`Hola, ${nombre}`);
}
saludar("Joan");//da hola Joan, si no se pone nada da hola undefined
*/
// PARAMETROS REST (REST PARAMETER)
// nos permite capturar un número variable de parámetros o argumentos en una funcion
//pasamos varios parámetros en uno solo
/*
function sumar (...numeros){// ...numeros nos ayuda cuando no sabemos cuantas variables vamos a necesitar
    let resultado = 0;

    for(let numero of numeros) {
        resultado += numero;
    };

    return resultado;
}

console.log(sumar(5, 4, -1, 1001,));// esto suma todos los número
*/

// Funciones flecha () => {}

/*
function sumar(a, b) {
    return a+b;
}
*/
// otra manera de ponerlo es
/*
const sumar = (a,b) => a + b;
console.log(sumar(3, 5));
*/
/*
function sumar (...numeros) => a, b, c;
console.log(sumar);
*/

//METODOS DE ARRAYS
//forEach(): ejecuta una funcion (nuestra) una vez por cada elementos del array.
/*
const numeros = [1, 2, 3, 4, 5];

const multiplica = (n) => {
    return n * 2;
}
numeros.forEach((numero) => { // es mejor la flecha que poner function
    console.log(numero);//esta funcion imprime los numeros 1 a 1. 
});
numeros.forEach((numero) => {
    console.log(multiplica(numero));
});
*/
// map(): crea un nuevo array con los resultados de aplicar una función a cada elemento del array.
/*
const numeros = [1, 2, 3, 4, 5];
const multiplica = (n) => {
    return n * 2;
}
const dobleNumero = numeros.map((numero) => {
    return multiplica(numero);
});

console.log(dobleNumero);
*/

// filter(): crea un nuevo array con todos los elementos que cumplan una condición determinada
/*
const numeros = [1, 2, 3, 4, 5];
const numerosPares = numeros.filter((numero) => {
    numero % 2 === 0;
});

console.log(numerosPares);

const numerosMayores = nmeros.filter((numero) => {
    return numero > 2;
});

console.log(numerosMayores);
*/
//reduce(): aplica una función a un acumulador y a cada elemento del array (de izquierda a derecha), para reducirlo a 
//un ÚNICO valor
/*
const numeros = [1, 2, 3, 4, 5];
const suma = numero.reduce((acumulador, numero) => { // tiene 2 parámetros, siendo el primero el acumulador y el segundo el elemento del array
    return acumulador + numero;
},0 );
console.log(suma);
*/
//find(): devuelve el primer elemento del array que cumpla una determinada condición.
/*
const numeros = [1, 2, 3, 4, 5];
const numeroEncontrado = numeros.find((numero) => {
    return numero < 3;
});
console.log(numeroEncontrado);
*/
// findIndex(): devuelve el indice del primer elemento del array que cumple con una función de prueba o retornará -1
//si no encuentra nada.
/*
const numeros = [1, 2, 3, 4, 5];
const indiceEncontrado = numeros.findIndex((numero) => {
    return numero < 3;
});
console.log(indiceEncontrado);
*/
// some(): comprueba si al menos 1 elemento del array cumple una condición determinada.
/*
const numeros = [1, 2, 3, 4, 5];
const tieneNumeroPar = numeros.some((numero) => {
    return numero % 2 === 0;
});

console.log(tieneNumeroPar);

if(numeros.some((numero) => {
    return numero % 2 === 0;
})) {
    cgl ("fingiciona");
};
*/
/*
//every(): comprueba si todos los elementos cumplen una condición determinada.
const numeros = [1, 2, 3, 4, 5];
const todosNumerosPares = numeros.every((numero) => {
    if (numero > 3) {
        return numero % 2 === 0;
});
console.log(todosNumerosPares);
*/
//CLASES - class
//otra adicion de ES6 que nos permite una programación orientada a objetos en JS. Es una forma más sencilla y estructurada
/*
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
}

const ester = new Persona("Ester");
console.log(ester);
ester.saludar();


// HERENCIA 
class Empleado extends Persona {
    constructor(nombre, salario) {
        super(nombre);
        this.salario = salario;
    }

    trabajar() {
        console.log(`${this.nombre} está trabajando.`);
    }
}

const maria = new Empleado("María", 30000);
//console.log(maria);
//maria.saludar();
//maria.trabajar();

//SIMBOLOS
/* 
Los simbolos son una nueva clase de datos, introducida por ES6.
Son valores únicos e inmutables. 
Se pueden utilizar como identificadores de propiedades de objetos.
*/
/*
const id = Symbol("id");
const persona = {
    nombre: "Joan",
    [id]: 1
};
console.log(persona[id]);
*/

//ITERADORES
/*
Son objetos que implementan el protocolo de iteración en JS.
Permiten recorrer y acceder a los elementos de una colección uno a uno.
*/
const numeros = [1, 2, 3];
const iterador = numeros[Symbol.iterator]();

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());// con este se sale del objeto.

// SET
/*
Permite almacenar valores únicos de cualquier tipo, 
no permite duplicados y ofrece métodos para agregar, eliminar y verificar 
la existencia de elementos.
*/
/*
const setNumeros = new Set();
setNumeros.add(1);
setNumeros.add(2);
setNumeros.add(3);

console.log(setNumeros.has(2)); // nos da true
setNumeros.delete(2);// aqui borramos el numero 2
console.log(setNumeros.has(2)); // nos da false

console.log(setNumeros.size);// nos da 2 porque solo le quedan 2 elementos
console.log(setNumeros);

const iteratorNumeros = setNumeros[Symbol.iterator]();
console.log(iteratorNumeros.next());
*/
// MAP
/*
Permite almacenar PARES clave-valor, donde cada clave es ÚNICA.
permite operaciones de búsqueda, inserción y eliminación de elementos.
*/
/*
const mapaNombres = new Map();
mapaNombres.set("nombre", "Ana");
mapaNombres.set("edad", 33);
mapaNombres.set("profesion", "Desarrollador");

console.log(mapaNombres.get("edad"));
console.log(mapaNombres.has("edad"));
mapaNombres.delete("edad");
console.log(mapaNombres.has("edad"));
console.log(mapaNombres.size);
console.log(mapaNombres);// muestra el mapa entero
*/
