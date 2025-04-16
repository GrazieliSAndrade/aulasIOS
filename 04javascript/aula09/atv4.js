//Questão 4:
//Crie um loop `while` que gere uma sequência de Fibonacci de 10 números. A sequência
//começa com 0 e 1, e cada número subsequente é a soma dos dois números anteriores.

let number = 10
fibonacci = [0, 1]

for ( i = 2; i < number; i++) {
  fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2] )
    
}
for ( i = 0; i < fibonacci.length; i++) {
   console.log(fibonacci[i]);
}