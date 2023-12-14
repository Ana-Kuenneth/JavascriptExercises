//Prácticas con variables
/*1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.*/
alert('un mensaje')


/*2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).*/
document.write("<<Hello world>>")


/*3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.*/
document.write(3 + 5)


/*4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»*/
let user = prompt("¿Cuál es tu nombre de usuario?")
alert("<<Hola " + user + ">>")


/*5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt*/
const num1 = parseInt(prompt("Escribe un número"), 10);
const num2 = parseInt(prompt("Escribe otro número"), 10);
console.log(num1 + num2)


/*6.- Escribe un programa que pida dos números y escriba en la pantalla cual
es el mayor.*/
const num3 = parseInt(prompt("Escribe un número"), 10);
const num4 = parseInt(prompt("Escribe otro número"), 10);
console.log("El mayor número ingresado es: " + Math.max(num3, num4))


/*7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.*/
const num5 = parseInt(prompt("Escribe un primer número"), 10);
const num6 = parseInt(prompt("Escribe un segundo número"), 10);
const num7 = parseInt(prompt("Escribe un tercer número"), 10);
console.log("El mayor número ingresado es: " + Math.max(num5, num6, num7))


/*8.- Escribe un programa que pida un número y diga si es divisible por 2*/
const num8 = parseInt(prompt("Escribe un número"), 10);
if (num8 % 2 == 0)
    console.log("El número ingresado es divisible en 2")
else
    console.log("El número ingresado NO es divisible en 2")


/*9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substr. (developer mozilla)*/
let frase = prompt("Escribe una frase")
console.log(frase.match(/[aeiou]/gi)) //FORMA 1

for (let i = 0; i <= frase.length; i++) {
    if (frase[i] == 'a' ||
        frase[i] == 'e' ||
        frase[i] == 'i' ||
        frase[i] == 'o' ||
        frase[i] == 'u') {
        let caracter = frase.substring(i, i + 1)
        console.log(caracter)          //FORMA 2

        console.log(frase.substring(i, i + 1)) //FORMA 3
    }
}


/*10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)*/
const num9 = parseInt(prompt("Escribe un número"), 10);
if (num9 % 2 == 0) {
    console.log("El número ingresado es divisible por 2")
}
else {
    if (num9 % 3 == 0) {
        console.log("El número ingresado es divisible por 3")
    }
    else {
        if (num9 % 5 == 0) {
            console.log("El número ingresado es divisible por 5")
        }
        else {
            if (num9 % 7 == 0) {
                console.log("El número ingresado es divisible por 7")
            }
            else {
                console.log("El número ingresado NO es divisible por 2, 3, 5 o 7")
            }
        }
    }
}


/*11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)*/
const num10 = parseInt(prompt("Escribe un número"), 10);
let bandera = 0;

if (num10 % 2 === 0) {
    console.log("El número ingresado es divisible por 2")
    bandera++
}
if (num10 % 3 === 0) {
    console.log("El número ingresado es divisible por 3")
    bandera++
}

if (num10 % 5 === 0) {
    console.log("El número ingresado es divisible por 5")
    bandera++
}

if (num10 % 7 === 0) {
    console.log("El número ingresado es divisible por 7")
    bandera++
}

if(!(num10 % 2 === 0) && !(num10 %3 === 0) && !(num10 % 5 === 0) && !(num10 % 7 === 0)){
    console.log("El número ingresado NO es divisible por 2, 3, 5 o 7")
}

//FORMA 2
const num11 = parseInt(prompt("Escribe un número"), 10);
let array = []

if (num11 % 2 === 0) {
    array.push("2")
}
if (num11 % 3 === 0) {
    array.push("3")
}

if (num11 % 5 === 0) {
    array.push("5")
}

if (num11 % 7 === 0) {
    array.push("7")
}

if(!(num11 % 2 === 0) && !(num11 %3 === 0) && !(num11 % 5 === 0) && !(num11 % 7 === 0)){
    console.log("El número ingresado NO es divisible por 2, 3, 5 o 7")
}

let longitud = array.length
if(longitud == 4){
    console.log("El número ingresado es divisible por 2, 3, 5 y 7")
}
if(longitud == 3){
    console.log("El número ingresado es divisible por "+array[0]+", "+array[1]+" y "+array[2])
}
if(longitud == 2){
    console.log("El número ingresado es divisible por "+array[0]+" y "+array[1])
}
if(longitud == 1){
    console.log("El número ingresado es divisible por "+array[0])
}