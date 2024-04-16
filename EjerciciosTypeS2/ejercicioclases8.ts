class Humano {
    nombre: string = "";
    edad: number = 0;
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
let misHumanos = new Set<string>();
let totalEdad = 0;
function recogeDalo() {
    let dNombre = (<HTMLInputElement>document.getElementById("datoNombre")).value;
    let dEdad = Number((<HTMLInputElement>document.getElementById("datoEdad")).value);
    let humano = new Humano(dNombre, dEdad);
    misHumanos.add(humano.nombre);
    totalEdad += humano.edad;
    let mediaEdad = totalEdad / misHumanos.size;
    let p = document.createElement("p");
    p.innerHTML = `Nombre introducido: ${dNombre}  Edad Introducida: ${dEdad} Numero de personas introducidas: ${misHumanos.size} La edad media es de : ${mediaEdad}`;
    document.getElementById("caja")?.appendChild(p);
}
document.getElementById("boton")?.addEventListener("click", recogeDalo);

class Empleado extends Humano {
    identificacion: string = "";
    experiencia: number = 0;

    constructor(nombre:string, edad:number,identificacion: string, experiencia: number) {
        super(nombre, edad)
        this.identificacion = identificacion;
        this.experiencia = experiencia
    }
}
let misEmpleados = new Map<string, Empleado>();
let totalEdadEmpleados = 0;
let experienciaTotal = 0;
function recogeEmpleado() {
    let eNombre = (<HTMLInputElement>document.getElementById("nombreEmpleado")).value;
    let eEdad = Number((<HTMLInputElement>document.getElementById("edadEmpleado")).value);
    let eId = (<HTMLInputElement>document.getElementById("idEmpleado")).value;
    let eExp = Number((<HTMLInputElement>document.getElementById("expEmpleado")).value);
    let empleado = new Empleado(eNombre, eEdad, eId, eExp);
    if (misEmpleados.has(eId)) {
        window.alert("Empleado ya existente");
    } else {
        misEmpleados.set(eId, empleado);
        totalEdadEmpleados += empleado.edad;
        let mediaEdadEmpleados = totalEdadEmpleados / misEmpleados.size;
        experienciaTotal += empleado.experiencia;
        let p = document.createElement("p");
        p.innerHTML = `Nombre: ${eNombre} Edad: ${eEdad} Identificacion: ${eId} Experiencia: ${eExp} <br> Edad media Empleados: ${mediaEdadEmpleados} Experiencia total Empleados: ${experienciaTotal}`;
        document.getElementById("caja2")?.appendChild(p);
    }
    console.log([...misEmpleados.entries()]);
}
document.getElementById("boton2")?.addEventListener("click", recogeEmpleado);