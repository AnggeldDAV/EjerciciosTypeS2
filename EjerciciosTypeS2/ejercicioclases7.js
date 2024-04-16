"use strict";
class Bicho {
    constructor(nombre, edad, peso) {
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
    }
}
class OrdenaPorNombre {
    ordena(BichoA, BichoB) {
        return BichoA.nombre.localeCompare(BichoB.nombre);
    }
}
class MuestraTipo01 {
    muestraBicho(BichoA) {
        console.log(`${BichoA.nombre} con una edad de ${BichoA.edad}, pesa 
${BichoA.peso}`);
    }
}
class Jaula {
    constructor(Ordenacion, Mostrador) {
        this.bichos = [];
        this.Ordenacion = Ordenacion;
        this.Mostrador = Mostrador;
    }
    add(BichoAPoner) {
        this.bichos.push(BichoAPoner);
    }
    pesoTotal() {
        let total = 0;
        for (let bicho of this.bichos) {
            total += bicho.peso;
        }
        return total;
    }
    edadTotal() {
        let total = 0;
        for (let bicho of this.bichos) {
            total += bicho.edad;
        }
        return total;
    }
    edadMedia() {
        let edadTotal = this.edadTotal();
        return edadTotal / this.bichos.length;
    }
    ordena() {
        this.bichos.sort(this.Ordenacion.ordena);
    }
    muestra() {
        this.bichos.forEach(this.Mostrador.muestraBicho);
    }
}
let Elefante = new Bicho("Jumbo", 45, 898);
let Rinoceronte = new Bicho("Willie", 1, 1);
let Koala = new Bicho("Kolinger", 56, 67);
let Ordenacion = new OrdenaPorNombre();
let Mostrado = new MuestraTipo01();
let MiJaulaABC = new Jaula(Ordenacion, Mostrado);
MiJaulaABC.add(Elefante);
MiJaulaABC.add(Rinoceronte);
MiJaulaABC.add(Koala);
MiJaulaABC.muestra();
MiJaulaABC.ordena();
console.log("Ordena por nombre:-----------------------------------");
MiJaulaABC.muestra();
//Que se quiere:
//� Queremos ahora ordenar nuestra colecci�n por la edad de m�s joven a m�s viejo.
class OrdenaPorEdad {
    ordena(BichoA, BichoB) {
        return BichoA.edad - BichoB.edad;
    }
}
console.log("Ordena por Edad:-----------------------------------");
let OrdenacionEdad = new OrdenaPorEdad();
let MiJaulaDEF = new Jaula(OrdenacionEdad, Mostrado);
MiJaulaDEF.add(Elefante);
MiJaulaDEF.add(Rinoceronte);
MiJaulaDEF.add(Koala);
MiJaulaDEF.ordena();
MiJaulaDEF.muestra();
//� Tambi�n queremos ordenarlos por peso, de m�s flaco a m�s gordo.
class OrdenaPorPeso {
    ordena(BichoA, BichoB) {
        return BichoA.peso - BichoB.peso;
    }
}
console.log("Ordena por Peso:-----------------------------------");
let OrdenacionPeso = new OrdenaPorPeso();
let MiJaulaGHI = new Jaula(OrdenacionPeso, Mostrado);
MiJaulaGHI.add(Elefante);
MiJaulaGHI.add(Rinoceronte);
MiJaulaGHI.add(Koala);
MiJaulaGHI.ordena();
MiJaulaGHI.muestra();
//� Queremos mostrarlo ahora de forma distinta(el animalito { jumbo } tiene una edad
//de { edad } y un { peso } estimado en peso
class MuestraTipo02 {
    muestraBicho(BichoA) {
        console.log(`el animalito ${BichoA.nombre} tiene una edad de ${BichoA.edad} y un ${BichoA.peso} estimado en peso`);
    }
}
let Mostrado02 = new MuestraTipo02();
let MiJaulaJKL = new Jaula(OrdenacionPeso, Mostrado02);
MiJaulaJKL.add(Elefante);
MiJaulaJKL.add(Rinoceronte);
MiJaulaJKL.add(Koala);
MiJaulaJKL.ordena();
MiJaulaJKL.muestra();
//# sourceMappingURL=ejercicioclases7.js.map