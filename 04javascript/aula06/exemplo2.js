// 2. Sistema de Exibição de Mensagem com switch - Verificação de Dia da Semana
// Esse sistema recebe um número correspondente a um dia da semana
// (1 para segunda-feira, 2 para terça-feira, etc.)
// e exibe uma mensagem informando qual é o dia atual.
// Se o número informado não corresponder a um dia válido (1 a 7),
//uma mensagem de erro é mostrada, indicando que o valor inserido é inválido.

let dia1 = 'Segunda-feira'
let dia2 = 'Terça-feira'
let dia3 = 'Quarta-feira'
let dia4 = 'Quinta-feira'
let dia5 = 'Sexta-feira'
let dia6 = 'Sábado-feira'
let dia7 = 'Domingo-feira'

let semanaDia = dia8

switch (semanaDia) {
    case dia1:
        console.log('Olá, boa tarde! Sabe que dia é hoje?', dia1, '!👏');
        break;
    case dia2:
        console.log('Olá, boa tarde! Sabe que dia é hoje?', dia2, '!🎉');
        break;
    case dia3:
        console.log('Olá, boa tarde! Sabe que dia é hoje?', dia3, '!✨');
        break;
    case dia4:
        console.log('Olá, boa tarde! Sabe que dia é hoje?', dia4, '!🙌');
        break;
    case dia5:
        console.log('Olá, boa tarde! Sabe que dia é hoje?', dia5, '!🌹');
        break;
    case dia6:
        console.log('Olá, boa tarde! Sabe que dia é hoje?', dia6, '!⛱');
        break;
    case dia7:
        console.log('Olá, boa tarde! Sabe que dia é hoje?', dia7, '!😎');
        break;

    default:
        console.log('Desculpe, não foi possível identificar a semana em nosso sistema😔');
        break;
}