var numeroSecreto = parseInt(Math.random() * 1001);

//While laços de repetição
// Sinal ! sinal de negação diferente de igual exemplo
while(chute != numeroSecreto){
    //prompt para fazer caixa de pergunta
    var chute = prompt('Digite um número entre 0 e 1000');
    //se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
      alert('Parabéns acertou!')
    } else if (chute > numeroSecreto) { //Condição else if se não for abre outra condição
      alert('Errou..... o número secreto é menor que ' + chute )
    } else if (chute < numeroSecreto) {
      alert('Errou..... o número secreto é maior que ' + chute)
    }
}
