/*import cipher from './cipher.js';*/
/* console.log(cipher);*/

/*CIFRADO CESAR
A  B  C  D  E  F  G  H  I  J   K  L  M   
65 66 67 68 69 70 71 72 73 74 75 76 77   

N  O  P  Q  R  S  T  U  V  W  X  Y  Z
78 79 80 81 82 83 84 85 86 87 88 89 90 



a              z
97......     122

(CODIGO DE LA LETRA +  DESLOCAMENTO) % TAM DO ALFABETO) 
POSICIÓN DE LATRA + VALOR FIJO)% RESIDUO DE 26

"A".charCodeAt(0)
//65
String.fromCharCode(72)
//H

function calculate() {
                var input = document.getElementById("input").value.toUpperCase();
                var result = "";

LAS LETRAS EN CÓDIGO ASCII EMPIEZAN DESDE EL 65 EN ADELANTE

(X - 65 + N )%26 + 65
NUMERO DE LETRA ACCI -65 +VALOR FIJO) RESIDUO DE 26 +PARA OBTENER CÓDIGO ASCCI

((CODIGO DE LA LETRA - COD1raLetra + DESLOCAMIENTO)% TamDoAlfabeto)+ COD1raLETRA

CharCode:ME MUESTRA LOS NÚMEROS
FromCharCode: me muestra las letras


//Probando String.fromCharCode
    document.write(String.fromCharCode(65, 66, 67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90));

*/


//String.fromCharCode(65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90);


//let String = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz';
//document.write(String.charCodeAt(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20))*/

let buttoncifrar = document.getElementById("cifrar");
let buttondescifrar = document.getElementById("descifrar");
let buttoncomprar = document.getElementById("comprar");

buttoncifrar.onclick = function() {
    cifrar();
}


buttondescifrar.onclick = function() {
    descifrar();
}


buttoncomprar.onclick = function() {
    alert("No hay entradas disponibles");
}