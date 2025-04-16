//Questão 5:
//Crie um loop `for` que imprima os números primos de 1 a 20. Um número primo é aquele que
//é divisível apenas por 1 e por ele mesmo.

for ( d = 2; d <= 20; d++) {
    let eprimo = true
for (i = 2; i < d; i++){
    if (d % i == 0) {
        eprimo = false
        break
        
    }

}
if (eprimo) {
    console.log(d);
}}