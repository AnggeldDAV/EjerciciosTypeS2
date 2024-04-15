class Bicho {
    nombre: string;
    edad: number;
    peso: number;
    constructor(nombre: string, edad: number, peso: number) {
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
    }
}
interface IOrdenableBicho {
    ordena(BichoA: Bicho, BichoB: Bicho): number;
}
class OrdenaPorNombre implements IOrdenableBicho {
    ordena(BichoA: Bicho, BichoB: Bicho): number {
        return BichoA.nombre.localeCompare(BichoB.nombre);
    }
}
interface IMostrable {
    muestraBicho(BichoA: Bicho): void;
}
class MuestraTipo01 implements IMostrable {
    muestraBicho(BichoA: Bicho): void {
        console.log(`${BichoA.nombre} con una edad de ${BichoA.edad}, pesa 
${BichoA.peso}`);
    }
}
class Jaula {
    bichos: Bicho[] = [];
    Ordenacion: IOrdenableBicho;
    Mostrador: IMostrable;
    constructor(Ordenacion: IOrdenableBicho, Mostrador: IMostrable) {
        this.Ordenacion = Ordenacion;
        this.Mostrador = Mostrador;
    }
    add(BichoAPoner: Bicho) {
        this.bichos.push(BichoAPoner);
    }
    pesoTotal(): number {
        let total = 0;
        for (let bicho of this.bichos) {
            total += bicho.peso;
        }
        return total;
    }
    edadTotal(): number {
        let total = 0;
        for (let bicho of this.bichos) {
            total += bicho.edad;
        }
        return total;
    }
    edadMedia(): number {
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
let Elefante: Bicho = new Bicho("Jumbo", 45, 898);
let Rinoceronte: Bicho = new Bicho("Willie", 1, 1);
let Koala: Bicho = new Bicho("Kolinger", 56, 67);

let Ordenacion: IOrdenableBicho = new OrdenaPorNombre();
let Mostrado: IMostrable = new MuestraTipo01();
let MiJaulaABC: Jaula = new Jaula(Ordenacion, Mostrado);
MiJaulaABC.add(Elefante);
MiJaulaABC.add(Rinoceronte);
MiJaulaABC.add(Koala);
MiJaulaABC.muestra();
MiJaulaABC.ordena();
MiJaulaABC.muestra();

//Que se quiere:
//� Queremos ahora ordenar nuestra colecci�n por la edad de m�s joven a m�s viejo.
class OrdenaPorEdad implements IOrdenableBicho {
    ordena(BichoA: Bicho, BichoB: Bicho): number {
        return BichoA.edad + BichoB.edad;
    }
}
let OrdenacionEdad = new OrdenaPorEdad();
let MiJaulaDEF: Jaula = new Jaula(OrdenacionEdad, Mostrado);
MiJaulaDEF.add(Elefante);
MiJaulaDEF.add(Rinoceronte);
MiJaulaDEF.add(Koala);
MiJaulaDEF.ordena();
MiJaulaDEF.muestra();
//� Tambi�n queremos ordenarlos por peso, de m�s flaco a m�s gordo.
class OrdenaPorPeso implements IOrdenableBicho {
    ordena(BichoA: Bicho, BichoB: Bicho): number {
        return BichoA.peso + BichoB.peso;
    }
}
let OrdenacionPeso = new OrdenaPorPeso();
let MiJaulaGHI: Jaula = new Jaula(OrdenacionPeso, Mostrado);
MiJaulaGHI.add(Elefante);
MiJaulaGHI.add(Rinoceronte);
MiJaulaGHI.add(Koala);
MiJaulaGHI.ordena();
MiJaulaGHI.muestra();
//� Queremos mostrarlo ahora de forma distinta(el animalito { jumbo } tiene una edad
//de { edad } y un { peso } estimado en peso
class MuestraTipo02 implements IMostrable {
    muestraBicho(BichoA: Bicho): void {
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
