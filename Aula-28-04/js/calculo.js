var n1 = document.querySelector('#n1');
var n2 = document.querySelector('#n2');
var resultado = document.querySelector('#resultado');

function somar() {
    resultado.innerHTML = Number(n1.value) + Number(n2.value);
}
function subtrair() {
    resultado.innerHTML = Number(n1.value) - Number(n2.value);
}
function multiplicar() {
    resultado.innerHTML = Number(n1.value) * Number(n2.value);
}

function dividir() {
    if (Number(n2.value) == 0)  {
        resultado.innerHTML = "Erro: Divisão por zero";
    } else {
        resultado.innerHTML = Number(n1.value) / Number(n2.value);
    }
}

function areatriangulo() {
    resultado.innerHTML = (Number(n1.value) + Number(n2.value)) / 2;
}
function areaquadrado() {
    resultado.innerHTML = Number(n1.value) * Number(n2.value)
}
function menosdez() {
    resultado.innerHTML = Number(n1.value) - (Number(n1.value)*0.10)
}
function lucro() {
    resultado.innerHTML = Number(n1.value) + (Number(n1.value)*0.15)
}
function desconto() {
    resultado.innerHTML = Number(n1.value) - (Number(n1.value)*0.03)
}
function lucdesc() {
    if (Number(n1.value)>1000) {
        resultado.innerHTML = Number(n1.value) - (Number(n1.value)*0.07);
    }
    else if ((Number(n1.value)<200) && (Number(n1.value)<=500)) {
        alert("Boa compra!");
        resultado.innerHTML = Number(n1.value) + (Number(n1.value)*0.05);
    }
    else if (Number(n1.value)<=500) {
        resultado.innerHTML = Number(n1.value) + (Number(n1.value)*0.05);
    }
    else {
        resultado.innerHTML = Number(n1.value)
    }
}