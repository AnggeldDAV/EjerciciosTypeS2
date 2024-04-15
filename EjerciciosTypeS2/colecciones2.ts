let miConjunto = new Map<string, number>();
function anadir() {
    let nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    let li = document.createElement("li");
    if (miConjunto.has(nombre)) {
        window.alert("El nombre introducido ya existe");
        let nlista = document.getElementById(nombre);
        let valor = Number(miConjunto.get(nombre));
        valor++;
        miConjunto.set(nombre, valor);
        nlista!.innerHTML = `Nombre: ${nombre} Numero: ${valor}`;
    } else {
        miConjunto.set(nombre, 1);
        li.innerHTML = `Nombre: ${nombre} Numero: ${miConjunto.get(nombre)}`;
        li.id = nombre;
        document.getElementById("lista")?.appendChild(li);
    }
    console.log(miConjunto.entries());
}
document.getElementById("boton")?.addEventListener("click", anadir);