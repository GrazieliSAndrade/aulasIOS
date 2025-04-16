//4. Validação de Palavra em Texto
//Descrição: Crie um programa que receba um texto e uma palavra, e verifique se a palavra está
//contida no texto.
//Requisitos:
//Use métodos de string, como includes, para realizar a verificação.
//Utilize if/else para mostrar uma mensagem indicando se a palavra foi encontrada ou não.
//Pegue a mensagem com prompt() e exiba com Alert().

let nome = prompt('Digite aqui')
let text = 'O Segredo na Ilha é a melhor sessão de RPG de Ordem Paranormal😉'
if (text.includes(nome)){
alert ('A palavra ' +nome+ ' foi encontrada no texto!') }
else {
    alert ('A palavra ' +nome+ ' não foi possível ser encontrada.' )
}
