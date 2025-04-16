// 1. Sistema de Verificação de Idade com if-else
// Este sistema verifica se a pessoa tem idade
// suficiente para acessar um conteúdo restrito, como um site ou serviço.
// Se a idade for maior ou igual a 18 anos, a pessoa tem permissão para
// acessar o conteúdo; caso contrário,
// uma mensagem de erro é exibida informando que a idade mínima não foi atingida.

// Anotações:
// >= (maior ou igual que)
// < (menor que)
let usuario = 'Jhonattan'
let idade = 10

if (idade >= 18) {
    console.log('Seja bem vindo,', usuario, 'acesse diversos conteúdos personalizados, projetados especialmente para você!😎🎉');
}
else if (idade < 18) {
    console.log('Sinto muito', usuario, 'sua idade não é compatível com nosso sistema de diretrizes, quem sabe na próxima😔✨');
}
