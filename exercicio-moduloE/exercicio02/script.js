function iniciarTabuada(){
var tabuada = document.getElementById("resultado-tabuada")
var number = document.getElementById("numero")
var btn = document.getElementById("iniciar")
var visual = document.getElementById("visual")

var numero = Number(number.value)
var resutado = 0

tabuada.innerHTML = ""; 
if(numero.lenght == 0){
    li.innerText = `${numero} x ${x} = ${resultado}`;
}
for(x = 0; x <= 10; x++){
    let li = document.createElement('option'); 
    resultado = numero * x
    li.innerText = `${numero} x ${x} = ${resultado}`;
    
    tabuada.appendChild(li); 
   
}

}
