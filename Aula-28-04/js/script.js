//Média
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

//Maior de idade
var idade = parseInt(prompt("Digite sua idade: "))
console.log(nome, "tem" ,idade, "anos")
if (idade<18){
    console.log("Você é menor de idade!")
}
else {
    console.log("Você é maior de idade!")
}
//Par ou Impar
var x = parseInt(prompt("Digite um número: "));
if (x%2==0){
    console.log("O número" ,x, "é par!")
}
else {
    console.log("O número" ,x, "é ímpar!")
}