function $ (elemento){
    return document.getElementById(elemento);
}

function $$ (elemento){
    return document.getElementById(elemento).value;
}

function $set (elemento, valor){
    return document.getElementById(elemento).value = valor; 
}
