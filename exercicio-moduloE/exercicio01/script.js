function iniciarContagem(){

var ini = document.getElementById("inicio")
var fim = document.getElementById("fim")
var passo = document.getElementById("passo")
var btn = document.getElementById("iniciar")
var visual = document.getElementById("visual")

var inicio = Number(ini.value)
var final = Number(fim.value)
var passos = Number(passo.value)

visual.innerHTML = ""

if(passos <= 0 || passos.length == 0 || inicio.length == 0 || final == 0){
    visual.innerHTML += `Verifique os numeros que você inseriu`
    passos = 1;
    visual.innerHTML += `<br>`
}

if(inicio <= final){
for(c = inicio; inicio <= final; c += passos){
visual.innerHTML += `👉  ${inicio}`
inicio += passos
}
}else{
for(c = inicio; inicio >= final; c += passos){
 visual.innerHTML += `👉  ${inicio}`
 inicio -= passos
}
}

 visual.innerHTML += `🏁`
}
