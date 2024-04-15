"use strict";
var _a;
let miConjunto = new Map();
function anadir() {
    var _a;
    let nombre = document.getElementById("nombre").value;
    let li = document.createElement("li");
    if (miConjunto.has(nombre)) {
        window.alert("El nombre introducido ya existe");
        let nlista = document.getElementById(nombre);
        let valor = Number(miConjunto.get(nombre));
        valor++;
        miConjunto.set(nombre, valor);
        nlista.innerHTML = `Nombre: ${nombre} Numero: ${valor}`;
    }
    else {
        miConjunto.set(nombre, 1);
        li.innerHTML = `Nombre: ${nombre} Numero: ${miConjunto.get(nombre)}`;
        li.id = nombre;
        (_a = document.getElementById("lista")) === null || _a === void 0 ? void 0 : _a.appendChild(li);
    }
    console.log(miConjunto.entries());
}
(_a = document.getElementById("boton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", anadir);
//# sourceMappingURL=colecciones2.js.map