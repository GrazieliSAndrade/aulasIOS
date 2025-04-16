//Questão 4:
//Crie um loop `while` que gere uma sequência de Fibonacci de 10 números. A sequência
//começa com 0 e 1, e cada número subsequente é a soma dos dois números anteriores.

// posso declarar várias variáveis, coocando virgula

let number1 = 0, num2 = 1, soma
let contador = 1

while (contador <=10) {
    console.log(`${contador}: ${number1}`);  
    soma = number1 + num2
    number1 = num2
    num2 = soma 
    contador++
}