class Persona {
    primerNombre: string = "";
    nombreIntermedio: string = "";
    apellido1: string = "";
    apellido2: string = "";
    anoNacimiento: number = 0;
    identificativo: string = "";
    activo: boolean = false;
}
interface IValidadorPersona {
    isValid(persona: Persona): boolean;
}
interface IMostradorPersona {
    mostrar(persona: Persona): string;
}
class ValidadorIngles implements IValidadorPersona {
    isValid(persona: Persona): boolean {
        return (persona.identificativo.length > 0 && persona.primerNombre.length > 0 && persona.nombreIntermedio.length > 0 && persona.apellido1.length >0);
    }
}
class ValidadorEspanol implements IValidadorPersona {
    isValid(persona: Persona): boolean {
        return (persona.identificativo.length > 0 && persona.primerNombre.length > 0 && persona.apellido1.length > 0 && persona.apellido2.length > 0);
    }
}
class MostradorIngles implements IMostradorPersona {
    mostrar(persona: Persona): string {
        return "Identification: " + persona.identificativo + " First Name: " + persona.primerNombre + " Middle Name: " + persona.nombreIntermedio + " Last Name: " + persona.apellido1;
    }
}
class MostradorEspanol implements IMostradorPersona {
    mostrar(persona: Persona): string {
        return "Identificacion: " + persona.identificativo + " Nombre: " + persona.primerNombre + " Primer Apellido: " + persona.apellido1 + " Segundo Apellido: " + persona.apellido2;
    }
}
let validador = new ValidadorIngles;
let mostrador = new MostradorIngles;
function Datos() {
    let pNombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    let nombreI = (<HTMLInputElement>document.getElementById("nombreIntermedio")).value;
    let ape1 = (<HTMLInputElement>document.getElementById("apellido1")).value;
    let ape2 = (<HTMLInputElement>document.getElementById("apellido2")).value;
    let ano = Number((<HTMLInputElement>document.getElementById("anoNacimiento")).value);
    let ide = (<HTMLInputElement>document.getElementById("identificativo")).value;
    let act = Boolean((<HTMLInputElement>document.getElementById("activo")).value);
    let persona1 = new Persona();
    persona1.primerNombre = pNombre;
    persona1.nombreIntermedio = nombreI;
    persona1.apellido1 = ape1;
    persona1.apellido2 = ape2;
    persona1.anoNacimiento = ano;
    persona1.identificativo = ide;
    persona1.activo = act;
    if (validador.isValid(persona1)) {
        document.getElementById("valid")!.style.backgroundColor = "green";
    } else {
        document.getElementById("valid")!.style.backgroundColor = "red";
    }
    let res = document.getElementById("resultado");
    let pa = document.createElement("p");
    pa.innerHTML = mostrador.mostrar(persona1);
    res?.appendChild(pa);
}
document.getElementById("boton")?.addEventListener("click", Datos);