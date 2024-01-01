function calcularRecomendacoes() {
    var ph = parseFloat(document.getElementById('ph').value);
    var cloro = parseFloat(document.getElementById('cloro').value);
    var alcalinidade = parseFloat(document.getElementById('alcalinidade').value);
    var litragem = parseFloat(document.getElementById('litragem').value);

    var recomendacoes = obterRecomendacoes(ph, cloro, alcalinidade, litragem);

    exibirRecomendacoes(recomendacoes, litragem);
}

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

    if (alcalinidade < 80) {
        recomendacoes.produto3 = "Elevador de Alcalinidade";
    } else if (alcalinidade > 120) {
        recomendacoes.produto3 = "Redutor de Alcalinidade";
    }

    if (litragem < 5000) {
        recomendacoes.produto4 = "Suplemento de Litragem";
        recomendacoes.dosagem4 = calcularDosagem(recomendacoes.produto4, litragem);
    } else if (litragem > 10000) {
        recomendacoes.produto4 = "Estabilizador de Litragem";
        recomendacoes.dosagem4 = calcularDosagem(recomendacoes.produto4, litragem);
    }

    return recomendacoes;
}

function calcularDosagem(produto, litragem) {
    // Exemplo de cálculo de dosagem, você precisa adaptar isso com base nas instruções do fabricante.
    // Esta é uma fórmula simples para fins de exemplo.
    if (produto === "Suplemento de Litragem") {
        return litragem * 0.002; // Exemplo: 0.2% da litragem
    } else if (produto === "Estabilizador de Litragem") {
        return litragem * 0.001; // Exemplo: 0.1% da litragem
    }
    // Adicione mais condições conforme necessário para outros produtos
}

function exibirRecomendacoes(recomendacoes, litragem) {
    var resultadosDiv = document.getElementById('recomendacoes');

    // Verifica se o elemento com o ID "recomendacoes" existe
    if (!resultadosDiv) {
        console.error("Elemento com o ID 'recomendacoes' não encontrado.");
        return;
    }

    resultadosDiv.innerHTML = "<h2>Recomendações:</h2>";

    if (Object.keys(recomendacoes).length === 0) {
        resultadosDiv.innerHTML += "<p>Nenhuma recomendação no momento.</p>";
    } else {
        for (var produto in recomendacoes) {
            if (recomendacoes.hasOwnProperty(produto)) {
                if (produto.startsWith('dosagem')) {
                    resultadosDiv.innerHTML += "<p><strong>" + produto + ":</strong> " + recomendacoes[produto].toFixed(2) + " litros</p>";
                } else {
                    resultadosDiv.innerHTML += "<p><strong>" + produto + ":</strong> " + recomendacoes[produto] + "</p>";
                }
            }
        }
    }
}

