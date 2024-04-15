//let miConjunto = new Set<string>();
//let cantidadMal = 0;
//let nombresIntroducidos = 0;
//let veces = 1;
//function anadir() {
//    let nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
//    let li = document.createElement("li");
//    let cajaVeces = document.getElementById("veces");
//    cajaVeces!.innerHTML = "";
//    if (miConjunto.has(nombre)) {
//        window.alert("El nombre introducido ya existe");
//        cantidadMal++;
//    } else {
//        miConjunto.add(nombre);
//        li.innerHTML = nombre;
//        document.getElementById("lista")?.appendChild(li);
//        nombresIntroducidos++;
//    }

//    let porcentaje = (cantidadMal / veces) * 100;
//    let p = document.createElement("p");
//    p.innerHTML = `Nombres introducidos: ${nombresIntroducidos} Veces mal repetidas: ${cantidadMal} Porcentaje fallo: ${porcentaje.toString()}%`;
//    cajaVeces?.appendChild(p);
//    veces++;
//}
//document.getElementById("boton")?.addEventListener("click", anadir);