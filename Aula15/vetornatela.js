let num = [2,4,5,1,9,11]

num.sort((a, b) => a - b) //Apenas num.sort() deixava o elemento 11 na frente de outros. Portanto temos que usar essa comparação a - b para que ele ignore um posição que o resultado de a - b de negativo.
num.push(17)
for(let pos in num){
console.log(`A posição ${pos}, tem o valor ${num[pos]}`)
}

