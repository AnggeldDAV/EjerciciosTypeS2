"use strict";
var _a, _b;
class Humano {
    constructor(nombre, edad) {
        this.nombre = "";
        this.edad = 0;
        this.nombre = nombre;
        this.edad = edad;
    }
}
let misHumanos = new Set();
let totalEdad = 0;
function recogeDalo() {
    var _a;
    let dNombre = document.getElementById("datoNombre").value;
    let dEdad = Number(document.getElementById("datoEdad").value);
    let humano = new Humano(dNombre, dEdad);
    misHumanos.add(humano.nombre);
    totalEdad += humano.edad;
    let mediaEdad = totalEdad / misHumanos.size;
    let p = document.createElement("p");
    p.innerHTML = `Nombre introducido: ${dNombre}  Edad Introducida: ${dEdad} Numero de personas introducidas: ${misHumanos.size} La edad media es de : ${mediaEdad}`;
    (_a = document.getElementById("caja")) === null || _a === void 0 ? void 0 : _a.appendChild(p);
}
(_a = document.getElementById("boton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", recogeDalo);
class Empleado extends Humano {
    constructor(nombre, edad, identificacion, experiencia) {
        super(nombre, edad);
        this.identificacion = "";
        this.experiencia = 0;
        this.identificacion = identificacion;
        this.experiencia = experiencia;
    }
}
let misEmpleados = new Map();
let totalEdadEmpleados = 0;
let experienciaTotal = 0;
function recogeEmpleado() {
    var _a;
    let eNombre = document.getElementById("nombreEmpleado").value;
    let eEdad = Number(document.getElementById("edadEmpleado").value);
    let eId = document.getElementById("idEmpleado").value;
    let eExp = Number(document.getElementById("expEmpleado").value);
    let empleado = new Empleado(eNombre, eEdad, eId, eExp);
    if (misEmpleados.has(eId)) {
        window.alert("Empleado ya existente");
    }
    else {
        misEmpleados.set(eId, empleado);
        totalEdadEmpleados += empleado.edad;
        let mediaEdadEmpleados = totalEdadEmpleados / misEmpleados.size;
        experienciaTotal += empleado.experiencia;
        let p = document.createElement("p");
        p.innerHTML = `Nombre: ${eNombre} Edad: ${eEdad} Identificacion: ${eId} Experiencia: ${eExp} <br> Edad media Empleados: ${mediaEdadEmpleados} Experiencia total Empleados: ${experienciaTotal}`;
        (_a = document.getElementById("caja2")) === null || _a === void 0 ? void 0 : _a.appendChild(p);
    }
    console.log([...misEmpleados.entries()]);
}
(_b = document.getElementById("boton2")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", recogeEmpleado);
//# sourceMappingURL=ejercicioclases8.js.map