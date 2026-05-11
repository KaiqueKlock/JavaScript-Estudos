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

if(passos == 0){
    visual.innerHTML += `Verifique os numeros que você inseriu`
    passos = 1;
    visual.innerHTML += `<br>`
}

if(inicio <= final){
do{

visual.innerHTML += `👉  ${inicio}`
inicio += passos
}while(final >= inicio)
}else{
do{
 visual.innerHTML += `👉  ${inicio}`
 inicio -= passos
}while(inicio >= final)
}

 visual.innerHTML += `🏁`
}
