// script.js

function obterRecomendacoes(ph, cloro, alcalinidade, litragem) {
    var recomendacoes = {};

    if (ph < 7.2) {
        recomendacoes.produto1 = "Alcalinizador de pH";
    } else if (ph > 7.8) {
        recomendacoes.produto1 = "Redutor de pH";
    }

    if (cloro < 1.0) {
        recomendacoes.produto2 = "Cloro líquido";
    } else if (cloro > 3.0) {
        recomendacoes.produto2 = "Redutor de cloro";
    }

    if (alcalinidade < 8) {
        recomendacoes.produto3 = "Elevador de Alcalinidade";
    } else if (alcalinidade > 12) {
        recomendacoes.produto3 = "Redutor de Alcalinidade";
    }

    return recomendacoes;
}

function calcularDosagem(produto, litragem) {
    var dosagemPorLitro = 0;

    switch (produto) {
        case "Alcalinizador de pH":
            dosagemPorLitro = 0.001; // Exemplo: 0.1% por litro
            break;
        case "Redutor de pH":
            dosagemPorLitro = 0.001; // Exemplo: 0.1% por litro
            break;
        case "Cloro líquido":
            dosagemPorLitro = 0.002; // Exemplo: 0.2% por litro
            break;
        case "Redutor de cloro":
            dosagemPorLitro = 0.001; // Exemplo: 0.1% por litro
            break;
        case "Elevador de Alcalinidade":
            dosagemPorLitro = 0.0005; // Exemplo: 0.05% por litro
            break;
        case "Redutor de Alcalinidade":
            dosagemPorLitro = 0.0005; // Exemplo: 0.05% por litro
            break;
        case "Estabilizador de Litragem":
            dosagemPorLitro = 0.0001; // Exemplo: 0.01% por litro
            break;
        // Adicione mais produtos conforme necessário
    }

    return (litragem * dosagemPorLitro).toFixed(2);
}

function calcularRecomendacoes() {
    var ph = parseFloat(document.getElementById('ph').value);
    var cloro = parseFloat(document.getElementById('cloro').value);
    var alcalinidade = parseFloat(document.getElementById('alcalinidade').value);
    var litragem = parseFloat(document.getElementById('litragem').value);

    var recomendacoes = obterRecomendacoes(ph, cloro, alcalinidade, litragem);
    exibirRecomendacoes(recomendacoes, litragem);
}

function exibirRecomendacoes(recomendacoes, litragem) {
    var recomendacoesElement = document.getElementById('recomendacoes');
    recomendacoesElement.innerHTML = '';

    for (var produto in recomendacoes) {
        if (recomendacoes.hasOwnProperty(produto)) {
            var dosagemPorLitro = calcularDosagem(recomendacoes[produto], litragem);
            var textoRecomendacao = produto + ': ' + recomendacoes[produto] + ' - Dosagem: ' + dosagemPorLitro + ' L';

            var pElement = document.createElement('p');
            pElement.textContent = textoRecomendacao;
            recomendacoesElement.appendChild(pElement);
        }
    }
}
