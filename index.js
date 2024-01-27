// entrada 
let nome = "Mestre pokemon"
let xp = "4675"
// processamento
let nivelJogador = ""
if (xp <= 1000){
    nivelJogador = "Ferro"
}
if (xp >= 1001){
    nivelJogador = "Bronze"
}
if (xp >= 2001){
    nivelJogador = "Prata"
}
if (xp >= 5001){
    nivelJogador = "Ouro"
}
if (xp >= 7001){
    nivelJogador = "Platina"
}
if (xp >= 8001){
    nivelJogador = "Ascendente"
}
if (xp >= 9001){
    nivelJogador = "Imortal"
}
if (xp >= 10001){
    nivelJogador = "Radiante"
}
// saída
console.log("O Herói de nome " + nome + " está no nível de " + nivelJogador)