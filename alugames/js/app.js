// Função para alterar o status do jogo (alugar ou devolver)
function alterarStatus(gameId) {
    // Seleciona o elemento do jogo pelo ID
    const gameElement = document.getElementById(`game-${gameId}`);
    const button = gameElement.querySelector('.dashboard__item__button');
    const imgContainer = gameElement.querySelector('.dashboard__item__img');

    // Verifica se o jogo está alugado ou não
    if (button.classList.contains('dashboard__item__button--return')) {
        // Se estiver alugado, pede confirmação para devolver
        if (window.confirm("Você tem certeza que deseja devolver este jogo?")) {
            button.textContent = 'Alugar';
            button.classList.remove('dashboard__item__button--return');
            imgContainer.classList.remove('dashboard__item__img--rented');
        }
    } else {
        // Se estiver disponível, troca para alugado
        button.textContent = 'Devolver';
        button.classList.add('dashboard__item__button--return');
        imgContainer.classList.add('dashboard__item__img--rented');
    }

    // Chama a função para contar e imprimir a quantidade de jogos alugados
    contarJogosAlugados();
}

// Função para contar e imprimir a quantidade de jogos alugados
function contarJogosAlugados() {
    const rentedGames = document.querySelectorAll('.dashboard__item__img--rented').length;
    console.log(`Total de jogos alugados: ${rentedGames}`);
}

// Programa para verificar se uma palavra ou frase é um palíndromo
function verificarPalindromo(texto) {
    const textoFormatado = texto.toLowerCase().replace(/[\W_]/g, '');
    const textoReverso = textoFormatado.split('').reverse().join('');
    return textoFormatado === textoReverso;
}

// Exemplo de uso da função verificarPalindromo
const exemploPalindromo = "A man, a plan, a canal, Panama";
console.log(`${exemploPalindromo} é um palíndromo? ${verificarPalindromo(exemploPalindromo)}`);

// Função para ordenar três números em ordem crescente
function ordenarTresNumeros(a, b, c) {
    const numeros = [a, b, c];
    numeros.sort((x, y) => x - y);
    return numeros;
}

// Exemplo de uso da função ordenarTresNumeros
const numerosOrdenados = ordenarTresNumeros(34, 7, 23);
console.log(`Números ordenados: ${numerosOrdenados}`);
