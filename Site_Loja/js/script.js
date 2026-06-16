function altQtd(qtdId, precold, totalId, valor) {
    let qtd = document.getElementById(qtdId);
    let quantidade = parseInt(qtd.innerText);

    quantidade += valor;

    if (quantidade<0) {
        quantidade=0;
    }

    qtd.innerText = quantidade;
    localStorage.setItem(qtdId, quantidade);

let preço = document.getElementById(precold).innerText.replace(",", ".");
    preco = parseFloat(preco)

let total = quantidade*preço;

document.getElementById(totalId).innerText = total.toFixed(2);
calcularSubtotal();
}
function calcularSubtotal() {
    let total1=parseFloat(document.getElementById("total1").innerText) || 0;
    let total2=parseFloat(document.getElementById("total2").innerText) || 0;
    let total3=parseFloat(document.getElementById("total3").innerText) || 0;
    let total4=parseFloat(document.getElementById("total4").innerText) || 0;

    let Subtotal = total1 + total2 + total3 + total4;

    document.getElementById("Subtotal").innerText = "Subtotal: R$" + Subtotal.toFixed(2);
} 

window.onload = function () {
    carregar("qtd1", "valor1", "total1");
    carregar("qtd2", "valor2", "total2");
    carregar("qtd3", "valor3", "total3");
    carregar("qtd4", "valor4", "total4");

    calcularSubtotal();
};

function carregar(qtdId, valorId, totalId) {
    let qtd = parseInt(localStorage.getItem(qtdId)) || 0;

    document.getElementById(qtdId).innerText = qtd;

    let preco = document.getElementById(valorId).innerText.replace(",", ".");
    preco = parseFloat(preco);

    document.getElementById(totalId).innerText = (qtd * preco).toFixed(2);
}