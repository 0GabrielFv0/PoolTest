function calcularRecomendacoes() {
    var ph = parseFloat(document.getElementById('ph').value);
    var cloro = parseFloat(document.getElementById('cloro').value);
    var alcalinidade = parseFloat(document.getElementById('alcalinidade').value);
    var litragem = parseFloat(document.getElementById('litragem').value);

    var recomendacoes = obterRecomendacoes(ph, cloro, alcalinidade, litragem);

    exibirRecomendacoes(recomendacoes);
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
    } else if (litragem > 10000) {
        recomendacoes.produto4 = "Estabilizador de Litragem";
    }

    return recomendacoes;
}

function exibirRecomendacoes(recomendacoes) {
    var resultadosDiv = document.getElementById('recomendacoes');
    resultadosDiv.innerHTML = "<h2>Recomendações:</h2>";

    if (Object.keys(recomendacoes).length === 0) {
        resultadosDiv.innerHTML += "<p>Nenhuma recomendação no momento.</p>";
    } else {
        for (var produto in recomendacoes) {
            if (recomendacoes.hasOwnProperty(produto)) {
                resultadosDiv.innerHTML += "<p><strong>" + produto + ":</strong> " + recomendacoes[produto] + "</p>";
            }
        }
    }
}
