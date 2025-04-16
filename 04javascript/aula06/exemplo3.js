// 3. Sistema de Cálculo de Média de Notas com Array
//  Neste sistema, um array armazena as notas de um aluno em diversas disciplinas.
//  O sistema calcula a média das notas e exibe o resultado.
// Dependendo do valor da média, o aluno será classificado como aprovado ou reprovado,
// de acordo com a média mínima estabelecida (geralmente 7.0).

let notas = [10 + 8 + 4 + 6 + 10 + 5 + 10]
let media = notas/7


if (media>=7) {
    console.log('Parabéns! Você foi aprovado, com uma média de,', media);
}
else {(media<=5)
    console.log('Sinto muito, sua média foi de', media, 'Infelizmente, você não foi aprovado');
}