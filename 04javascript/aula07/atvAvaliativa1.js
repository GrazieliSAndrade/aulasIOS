//1. Cálculo de Média e Aprovação
//Descrição: Crie um programa que receba três notas, calcule a média e exiba se o aluno foi aprovado
//ou reprovado.
//Requisitos:
//Use variáveis para armazenar as notas.
//Utilize estruturas if/else para determinar a situação (por exemplo, média ≥ 7 para aprovado).
//Exiba o resultado com Alert().

let notas = [10+5+8]
let media = notas/3
let nome = 'Estudante'
let novaMedia = media.toFixed(2)
if (media >= 7) {
    alert('Parabéns '+nome+'!'+ ' Você foi aprovado com uma média de ' +novaMedia+ '. Continue assim!❤✨');
    }
    
else {(media <=6)
    alert('Sinto muito, você foi reprovado, com uma édia de ' +novaMedia+ '. Mais não desista!');
}