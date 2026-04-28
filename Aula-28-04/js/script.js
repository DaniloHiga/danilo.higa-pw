var media = parseInt(prompt("Digite sua média: "));
var nome = prompt("Digite seu nome: ");
console.log(typeof nome)
console.log(typeof media)
console.log(media)
if ((media<0) || (media>10)){
    console.log("Média inválida!");
}   
else if (media>7){
    console.log(nome, "Aprovado!")
}
else if ((media>5) && (media<=7)){
    console.log(nome, "Recuperação!");
}
else if (isNaN(media)){
    console.log("Não é um número!")
}
else{
    console.log(nome, "Reprovado!");
}