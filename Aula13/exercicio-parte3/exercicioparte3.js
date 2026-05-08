function verificarIdade(){
    const form = document.getElementById("inputForm")
    var idade = form.idade.value
    var sexo = form.genero.value
    var button = window.document.getElementById("btnEnviar")
    var img = window.document.getElementById("imagem")
    var msg = window.document.getElementById("msg")



    if(idade <= 10 && sexo == "Masculino"){
        msg.innerHTML = `Sua idade é: ${idade} e você é Menino`;
        img.src = ""
    }
    else if(idade <= 17 && sexo == "Masculino"){
        msg.innerHTML = `Sua idade é: ${idade} e você é Homem Adolescente`;
        img.src = ""
    }
    else if(idade <= 30 && sexo == "Masculino"){
        msg.innerHTML = `Sua idade é: ${idade} e você é Homem Jovem`;
        img.src = ""
    }
    else if(idade <= 50 && sexo == "Masculino"){
        msg.innerHTML = `Sua idade é: ${idade} e você é Homem`;
        img.src = ""
    }
    else if(idade < 60 && sexo == "Masculino"){
        msg.innerHTML = `Sua idade é: ${idade} e você é Homem Quase Idoso`;
        img.src = ""
    } else{
        msg.innerHTML = `Sua idade é: ${idade} e você é Homem Idoso`;
        img.src = ""
    }
    
    if(idade <= 10 && sexo == "Feminino"){
        msg.innerHTML = `Sua idade é: ${idade} e você é menina`;
        img.src = ""
    }
    else if(idade <= 17 && sexo == "Feminino"){
        msg.innerHTML = `Sua idade é: ${idade} e você é Mulher adolescente`;
        img.src = ""
    }
    else if(idade <= 30 && sexo == "Feminino"){
        msg.innerHTML = `Sua idade é: ${idade} e você é Mulher Jovem`;
        img.src = ""
    }
    else if(idade <= 50 && sexo == "Feminino"){
        msg.innerHTML = `Sua idade é: ${idade} e você é Mulher`;
        img.src = ""
    }
    else if(idade < 60 && sexo == "Feminino"){
        msg.innerHTML = `Sua idade é: ${idade} e você é Mulher Quase Idosa`;
        img.src = ""
    } else{
        msg.innerHTML = `Sua idade é: ${idade} e você é Mulher Idosa`;
        img.src = ""
    }
    

    }
    
