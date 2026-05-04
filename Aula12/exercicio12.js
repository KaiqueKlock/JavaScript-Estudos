var now = new Date()
var hora = now.getHours()
var day = now.getDay()

var hora = 12
var day = 0

if (hora < 12) {
    console.log("Bom diaaa! Bora começar esses estudos ?")
} else if(hora < 18){
    console.log("Boa Tarde!!! Já Almoçou ? Vamos voltar ao estudos ?")
} else {
    console.log("Boa noitee! Ainda da tempo de estudar né ?")
}


switch(day){
    case 0:
        console.log("Domingouu!")
        break
    case 1: 
        console.log("Segundinha braba!")
        break
    case 2:
        console.log("Terça feira!")
        break
    case 3: 
        console.log("Quarta feira!")
        break
    case 4:
        console.log("Quinta-Feira!")
        break
    case 5:
        console.log("Sextouuu!!!")
        break
    case 6: 
        console.log("Sabadinho de lei!")
        break
    default: 
        console.log("[ERRO : 5002] ** Dia Inválido ** Verifique o horário configurado no servidor")
        break
}