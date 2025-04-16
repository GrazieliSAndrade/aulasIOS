//3. Sistema de Classificação
//Descrição: Crie um programa que receba uma nota numérica e retorne uma classificação de letra
//(por exemplo, A, B, C, D, F).
//Requisitos:
//Por exemplo:
//Nota de 90 a 100: “A”
//Nota de 80 a 89: “B”
//Nota de 70 a 79: “C”
//Nota de 60 a 69: “D”
//Abaixo de 60: “F”
//Exiba o resultado no console.

let nota = 90; 

if (nota >=90 && nota <= 100) {
    console.log('A');
}
else if (nota >=80 && nota<=89) {
    console.log('B');
}
else if (nota >=70 && nota <=79) {
    console.log('C');
}
else if (nota >=60 && nota<=69) {
    console.log('D');
}
else {
    console.log('F');
}