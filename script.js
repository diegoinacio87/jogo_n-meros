var numeroSecreto = Math.floor(Math.random() * 1001); // Math.floor arredonda para baixo o número aleatório

while (true) {
    var chute = prompt('Digite um número entre 0 e 1000');

    if (chute === null) {
        alert('Jogo cancelado.');
        break; // Se o usuário cancelar, o loop é interrompido
    }

    chute = parseInt(chute); // Converter a entrada para um número

    if (chute === numeroSecreto) {
        alert('Parabéns, você acertou!');
        break; // Encerra o loop quando o número é acertado
    } else if (chute > numeroSecreto) {
        alert('Errou. O número secreto é menor que ' + chute);
    } else if (chute < numeroSecreto) {
        alert('Errou. O número secreto é maior que ' + chute);
    }
}
