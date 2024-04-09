"use strict";
var _a;
class Persona {
    constructor() {
        this.primerNombre = "";
        this.nombreIntermedio = "";
        this.apellido1 = "";
        this.apellido2 = "";
        this.anoNacimiento = 0;
        this.identificativo = "";
        this.activo = false;
    }
}
class ValidadorIngles {
    isValid(persona) {
        return (persona.identificativo.length > 0 && persona.primerNombre.length > 0 && persona.nombreIntermedio.length > 0 && persona.apellido1.length > 0);
    }
}
class ValidadorEspanol {
    isValid(persona) {
        return (persona.identificativo.length > 0 && persona.primerNombre.length > 0 && persona.apellido1.length > 0 && persona.apellido2.length > 0);
    }
}
class MostradorIngles {
    mostrar(persona) {
        return "Identification: " + persona.identificativo + " First Name: " + persona.primerNombre + " Middle Name: " + persona.nombreIntermedio + " Last Name: " + persona.apellido1;
    }
}
class MostradorEspanol {
    mostrar(persona) {
        return "Identificacion: " + persona.identificativo + " Nombre: " + persona.primerNombre + " Primer Apellido: " + persona.apellido1 + " Segundo Apellido: " + persona.apellido2;
    }
}
let validador = new ValidadorIngles;
let mostrador = new MostradorIngles;
function Datos() {
    let persona1 = new Persona();
    persona1.primerNombre = document.getElementById("nombre").value;
    persona1.nombreIntermedio = document.getElementById("nombreIntermedio").value;
    persona1.apellido1 = document.getElementById("apellido1").value;
    persona1.apellido2 = document.getElementById("apellido2").value;
    persona1.anoNacimiento = Number(document.getElementById("anoNacimiento").value);
    persona1.identificativo = document.getElementById("identificativo").value;
    persona1.activo = Boolean(document.getElementById("activo").value);
    if (validador.isValid(persona1)) {
        document.getElementById("valid").style.backgroundColor = "green";
    }
    else {
        document.getElementById("valid").style.backgroundColor = "red";
    }
    let res = document.getElementById("resultado");
    let pa = document.createElement("p");
    pa.innerHTML = mostrador.mostrar(persona1);
    res === null || res === void 0 ? void 0 : res.appendChild(pa);
}
(_a = document.getElementById("boton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", Datos);
//# sourceMappingURL=app.js.map