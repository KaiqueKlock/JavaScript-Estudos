
    let resfinalizar = document.getElementById("visualfinalizar")
    let res = document.getElementById("resultado-adicao")
    let numero = document.getElementById("numero")
    let num = []

   
    function adicionarNum(){  
    let n = Number(numero.value)
    if(numero.value <= 0 || numero.value > 100 || numero.value == ""){
        alert("Digite um numero válido")
    } else if (num.indexOf(n) != -1){
        alert("Este número já foi adicionado!");
    } else{ 
    num.push(n)
    let li = document.createElement('option'); 
    li.innerText += ""
    li.innerText += `Valor ${numero.value} adicionado`;
    res.appendChild(li); 
       numero.value = "";
        numero.focus();
    }
    }
        
    function finalizarNum(){
    let totalnum = num.length
    num.sort((a,b) => a - b)
        
    let soma = 0
    for (let n of num) {
        soma += Number(n)
    }
    let media = soma / totalnum
    let li = document.createElement('option'); 

    resfinalizar.innerHTML = ""
    resfinalizar.innerHTML += `Ao todo temos ${totalnum} valores cadastrados </br>`
    resfinalizar.innerHTML +=`O menor número é : ${num[0]} </br>`
    resfinalizar.innerHTML += `O maior número é: ${num[num.length - 1]} </br>`
    resfinalizar.innerHTML +=`A soma dos números é : ${soma} </br>`
    resfinalizar.innerHTML +=`A média dos números é : ${media} </br>`
    }