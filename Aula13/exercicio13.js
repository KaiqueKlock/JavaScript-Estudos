function carregar(){
    var now = new Date()
    var hora = now.getHours()
    var img = window.document.getElementById("imagem")
    var msg = window.document.getElementById("msg")
    var bground = window.document.getElementById("bodyy")
    var titleText = window.document.getElementById("Titletext")
    msg.innerHTML = `Agora são ${hora} horas!`

    if (hora < 12){
        img.src = 'dia.png'
        bground.style.backgroundColor = "rgba(41, 146, 137, 0.82)"

    } else if(hora < 18){
        img.src = 'tarde.png'
        bground.style.backgroundColor = "rgba(238, 168, 76, 0.5)"
        titleText.style.color = "rgba(219, 120, 26, 0.7)"
    } else {
        img.src = 'noite.png'
        bground.style.backgroundColor = "rgba(9, 9, 34, 0.95)"
         titleText.style.color = "rgba(189, 189, 183, 0.7)"
    }

}