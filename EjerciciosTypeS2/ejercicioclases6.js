"use strict";
let Nombres01 = ["Andra", "Aneu", "Arlet", "Ethud", "Indivar", "Samay", "Sana", "Tanit", "Uxia", "Zenda"];
let Nombres02 = ["Abba", "Acfred", "Areu", "Drac", "Guim", "lol", "Kilian", "Mirt", "Yannick", "Zigor", "Tanit"];
console.log("Ejercicio1");
function imprimeNombre(value) {
    console.log(value);
}
Nombres01.forEach(imprimeNombre);
Nombres02.forEach(imprimeNombre);
console.log("-----------------------------------------------------------------------");
console.log("Ejercicio2");
function mayorDos(elemento) {
    return (elemento.length > 2);
}
if (Nombres01.every(mayorDos)) {
    console.log("Todos son mayores de dos");
}
else {
    console.log("Hay un nombre menor de 2");
}
console.log("-----------------------------------------------------------------------");
console.log("Ejercicio3");
function mayorI(element) {
    return (element > "I");
}
console.log(Nombres01.filter(mayorI));
console.log(Nombres02.filter(mayorI));
console.log("-----------------------------------------------------------------------");
console.log("Ejercicio4");
function palindromo(element) {
    let alreves = element.split("").reverse().join("");
    return (element == alreves);
}
console.log(Nombres01.filter(palindromo));
console.log(Nombres02.filter(palindromo));
console.log("-----------------------------------------------------------------------");
console.log("Ejercicio5");
console.log(Nombres01.indexOf("Tanit"));
console.log(Nombres02.indexOf("Tanit"));
console.log(Nombres01.indexOf("jacinto"));
console.log(Nombres02.indexOf("jacinto"));
console.log("-----------------------------------------------------------------------");
console.log("Ejercicio6");
console.log(Nombres01.join(","));
console.log(Nombres02.join(","));
console.log("-----------------------------------------------------------------------");
console.log("Ejercicio7");
function car(value) {
    return value.length;
}
let tamanyo = Nombres01.map(car);
console.log(tamanyo);
console.log("-----------------------------------------------------------------------");
console.log("Ejercicio8");
Nombres01.pop();
Nombres02.pop();
console.log(Nombres01);
console.log(Nombres02);
console.log("-----------------------------------------------------------------------");
console.log("Ejercicio9");
Nombres01.push("Jacinto");
Nombres02.push("Jacinto");
console.log(Nombres01);
console.log(Nombres02);
console.log("-----------------------------------------------------------------------");
console.log("Ejercicio10");
function suma(a, b) {
    return a + b;
}
console.log(tamanyo.reduce(suma));
console.log("-----------------------------------------------------------------------");
console.log("Ejercicio11");
let Nombres03 = Nombres01.slice(1, 7).concat(Nombres02.slice(4, 6));
console.log(Nombres03);
console.log("-----------------------------------------------------------------------");
console.log("Ejercicio12");
function mayorSeis(value) {
    return (value.length > 6);
}
console.log(Nombres01.some(mayorSeis));
console.log(Nombres02.some(mayorSeis));
console.log("-----------------------------------------------------------------------");
console.log("Ejercicio13");
console.log(Nombres01.sort());
console.log(Nombres02.sort());
console.log(Nombres01.sort().reverse());
console.log(Nombres02.sort().reverse());
//# sourceMappingURL=ejercicioclases6.js.map