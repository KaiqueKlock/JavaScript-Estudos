function verificarIdade(){
    var data = new Date()
    var ano = data.getFullYear()
    const form = document.getElementById("inputForm")
    var nascimento = form.idade.value
    var sexo = form.genero.value
    var button = window.document.getElementById("btnEnviar")
    var img = window.document.getElementById("imagem")
    var msg = window.document.getElementById("msg")
    let genero = "";

    if(nascimento.length == 0 || nascimento > ano || nascimento == 0){
        window.alert("ERRO[00X00] : Digite as informções corretamente")
    } else{

    let idade = ano - nascimento     

    if(idade <= 10){
        genero = (sexo === "Masculino") ? "você é um Menino" : " você é uma Menina";
        img.src = (sexo === "Masculino") ? "menino.avif" : "menina.jfif";
    }
    else if(idade <= 17){
        genero = (sexo === "Masculino") ? "você é um Menino Adolescente" : " você é uma Menina Adolescente";
        img.src = (sexo === "Masculino") ? "adolescente-menino.jfif" : "adolescente-menina.jfif";
    }
    else if(idade <= 30){
        genero = (sexo === "Masculino") ? "você é um Homem Jovem" : " você é uma Mulher Jovem";
        img.src = (sexo === "Masculino") ? "jovem-menino.avif" : "jovem-menina.jpg";
    }
    else if(idade <= 50){
        genero = (sexo === "Masculino") ? "você é um Homem" : " você é uma Mulher";
        img.src = (sexo === "Masculino") ? "homem-menino.jpg" : "mulher-menina.avif";
    }
    else if(idade < 60){
        genero = (sexo === "Masculino") ? "você é um Homem Quase Idoso" : " você é uma Mulher Quase Idosa";
        img.src = (sexo === "Masculino") ? "quase-menino.jpg" : "quase-menina.jpg";
    } else{
        genero = (sexo === "Masculino") ? "você é um Homem Idoso" : " você é uma Muher Idosa";
        img.src = (sexo === "Masculino") ? "foto-idoso.jfif" : "foto-idosa.jfif";
    }   


    msg.innerHTML = `Detectamos que ${genero} e tem ${idade} anos de idade`

    }

}