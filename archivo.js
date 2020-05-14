
var nombres = [];
var apellidos = [];
var edades = [];
var generos = [];
var generosRdo = [];
var generosChk = [];



function agregar() {
    nombres.push($$("nombre"));
    apellidos.push($$("apellido"));
    edades.push(Number.parseInt($$("edad")));
    generos.push($$("genero"));
    //pregunto si el cbo masculino esta checkeado, sino es femenino
    if ($("rdoMasculino").checked) {
        generosRdo.push("Masculino");
    } else {
        generosRdo.push("Femenino");
    }

    //pregunto si chkFemenino esta chequeado, sino es masculino
    if ($("chkFemenino").checked) {
        generosChk.push("Femenino");
    } else {
        generosChk.push("Masculino");
    }

    $set("nombre", "");
    $set("apellido", "");
    $set("edad", "");
    $set("genero", "");

}

function promedio() {
    suma = 0;
    for (i = 0; i < edades.length; i++) {
        suma += edades[i];
    }

    alert(suma / edades.length);

}


function promedioGenero(generobuscado) {
    // busco el genero a calcular
    //var gener = $("generoBuscado");
    var suma = 0;
    var cant = 0;
    // recorro todos los items
    for (i = 0; i < edades.length; i++) {
        //pregunto si el item es del mismo genero
        if (generos[i] == generobuscado) {
            //sumo y acumulo
            suma += edades[i];
            cant++;
        }
    }
    if (cant == 0) {
        alert("No hay " + generobuscado);
    } else {
        alert(suma / cant);
    }

    //cuando uso en Radio

    suma = 0;
    cant = 0;
    // recorro todos los items
    for (i = 0; i < edades.length; i++) {
        //pregunto si el item es del mismo genero
        if (generosRdo[i] == generobuscado) {
            //sumo y acumulo
            suma += edades[i];
            cant++;
        }
    }
    if (cant == 0) {
        alert("No hay " + generobuscado);
    } else {
        alert(suma / cant);
    }

    //Usando checkbox
    suma = 0;
    cant = 0;
    // recorro todos los items
    for (i = 0; i < edades.length; i++) {
        //pregunto si el item es del mismo genero
        if (generosChk[i] == generobuscado) {
            //sumo y acumulo
            suma += edades[i];
            cant++;
        }
    }
    if (cant == 0) {
        alert("No hay " + generobuscado);
    } else {
        alert(suma / cant);
    }


}


function quitarChk(elemento, elementoAModificar) {
    //el checkbox tiene que quitar el otro cuando uno se setea
    //no puede ser femenino y masculino
    $(elementoAModificar).checked = !$(elemento).checked;
}

