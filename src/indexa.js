// este es un comentario de una sola linea
/*este es un comentario 
de linea multiple*/
//las variables se crean con las palabras claves var,let
// hay tipos de datos:el tipo string que  agrupa cadena de texto
console.log =('hola amiguitos')
let variable = 0;
console.log=(variable)
variable = '20';
console.log=(variable)
variable = 20;
console.log=(variable)
var salario = 200000;
var sueldo = 100000 ;
/*los operadores logicos en javascrip son :
igual ==
menor <
mayor >
menor o igual <=
mayor o igual >=
completamente igual === */
var comparcion = sueldo===salario;
console.log =(comparcion)
// 1/3/2006
var suma = 0
suma = suma + 1;
console.log =(suma);
suma = suma + 3;
console.log =(suma);
suma = suma + 2;
console.log =(suma);
suma = suma + 0;
console.log =(suma);
suma = suma + 0;
console.log =(suma);
suma = suma + 6;
console.log =(suma);
// existen operadores logicos en javascript.Los cuales son:
// Y = &&
// O = ||
// &&
// true && true = true
// true && false =false
// false && true = false
// false && false = false
// ||
// true || true = true
// true || false = true
// false || true = true
// false || false = false

let areglo = [];
let aregloo = ['fabian','ana','pepito'];
console.log =(areglo)
console.log =(aregloo)
aregloo.push =('leydi')
console.log =(aregloo)

for (let index = 0; index < aregloo.length; i++) {
    const element = aregloo[index];
    
}
let i=0;
while (i <areglo.length) {
    let nombre= aregloo[i]
    console.log=( 'recuerda' +  nombre +'toma agua')
}
//clases del tecer periodo primera semana

let variable = 0;
console.log(variable);
console.log(variable++);
alert("ya se realizo la suma");
console.log(variable);
console.log(++variable);

function sumar (argumento1, argumento2) {
    let suma = (argumento1+argumento2)
    console.log(suma);
}
let num1= parseInt(prompt("escribe un numero:"));
let num2= parseInt(prompt("escribe otro un numero:"));

sumar(num1,num2);
//let variable = 0;
console.log(variable);
console.log(variable++);
alert("ya se realizo la suma");
console.log(variable);
console.log(++variable);

function sumar () {
    let num1= parseInt(prompt("escribe un numero"))
    let num2= parseInt(prompt("escribe un numero"))
    let suma = num1+num2;
    console.log(suma)
}
sumar();
sumar();
sumar();
//Diseñar una funcion que capture el nombre del usuario y despues lo salude con dicho nombre facturado.
alert("bienvenido)
function bienvenido () {
    let nom1= prompt("escribe tu nombre:");
    let nom2= prompt("escribe tu apellido:");
    let saludo=nom1+nom2;
    alert("bienvenido"+saludo);
}
bienvenido();

//ganador de iphone 11
alert("estas a un paso de ganar el iphone 14 pro max plus")
function prueba(){
    let nom1= prompt("escribe tu nombre:");
    let nom2= prompt("escribenos un numero del 1 al 10:");
    let ganador;
    if ( nom2 =="7" ||nom2=="siete"||nom2=="Siete"||nom2=="SIETE"){
            ganador="felicidades"+" " + nom1 +"" +"has sido un ganador procederemos a pedir una cositas"  
            alert(ganador)
            let nom3= prompt("escribe tu numero de documento:");
            let nom4= prompt("escribe tu pais de residencia:");
            let nom5= prompt("escribe tu barrio:");
            let conclusion ="noooo "+ " "+ nom5 +" es puro barrio de pobre";
            alert(conclusion);
            alert("escriba su tarjeta de credito y en estos idas le llega")
            let nom6= prompt("escribe tu tarjeta de credito:");
            let nom7= prompt("y ahora su contraseña:");
            alert("nooo ni fabio cae en  esta estafa")}
        else {
         alert("lo siento"+"  " +nom1 +" "+ "perdio la oportunidad de su vida")
        }


} 
prueba();
window.onload = () => {
    var numero1, numero2, resta , resutados;
    numero1 = Number(prompt("escribe un numero:"));
    numero2 = Number(prompt("escribe otro numero porfavor :"));
    resta = numero1-numero2;
    resultados = numero1+numero2;
    document.write("la suma dios como resultado"+resutados)
    document.write(resta,'<br/>');
}
/* sin_titulo(); */
/* window.onload = () => {
    const titulo =document.getElementById;
    console.log(titulo.innerHTML);
     
} */

/* window.onload = () => {
    const titulo =document.getElementById;
    console.log(parrafo.innerHTML);
     
} */
/* window.onload = () => {
    const titulo =document.getElementById;
    titulo.innerText = " Nuevo Texto";
    const titulo =document.getElementById;
    parrafo.innerText = " Nuevo nuevo parrafo";
    parrafo.innerText ="<ul><li>elemento 1</li><li>elemento2</li></ul>"
} */

//DOM= document

localStorage.setItem('lele','cucaracha');
localStorage.getItem('lele');