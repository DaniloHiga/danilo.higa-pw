function altQtd(qtdId, precold, totalId, valor) {
    let qtd = document.getElementById(qtdId);
    let quantidade = parseInt(qtd.innerText);

    quantidade += valor;

    if (quantidade<0) {
        quantidade=0;
    }

    qtd.innerText = quantidade;

let preço = parseFloat(document.getElementById(precold).innerText);

let total = quantidade*preço;

document.getElementById(totalId).innerText = total.toFixed(2);

function calcularSubtotal() {
    let total1=parseFloat(document.getElementById("total1").innerText);
    let total2=parseFloat(document.getElementById("total2").innerText);
    let total3=parseFloat(document.getElementById("total3").innerText);

    let Subtotal = total1 + total2 + total3;

    document.getElementById("Subtotal").innerText = "Subtotal: R$" + Subtotal.toFixed(2);
}
calcularSubtotal();
}   