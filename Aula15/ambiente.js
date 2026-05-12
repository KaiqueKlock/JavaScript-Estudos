let num = [2,4,5,1,9,11]

num.push(3)
num.push(2.2)

num.sort((a, b) => a - b) //Apenas num.sort() deixava o elemento 11 na frente de outros. Portanto temos que usar essa comparação a - b para que ele ignore um posição que o resultado de a - b de negativo.

console.log(num)
console.log(`O primeiro número é : ${num[0]}`)
console.log(`O ultimo número é : ${num[6]}`) 

let pos = num.indexOf(5)

if(pos == -1){
    console.log("Numero não encontrado")
} else{
console.log(`O numero 5 esta na posição : ${pos}`) 
}