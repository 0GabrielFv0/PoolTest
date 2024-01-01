function obterRecomendacoes(ph, cloro, alcalinidade, litragem) {
    var recomendacoes = {};

    if (ph < 7.2) {
        recomendacoes.produto1 = "Alcalinizador de pH";
        recomendacoes.dosagem1 = calcularDosagem(recomendacoes.produto1, litragem);
    } else if (ph > 7.8) {
        recomendacoes.produto1 = "Redutor de pH";
        recomendacoes.dosagem1 = calcularDosagem(recomendacoes.produto1, litragem);
    }

    if (cloro < 1.0) {
        recomendacoes.produto2 = "Cloro líquido";
        recomendacoes.dosagem2 = calcularDosagem(recomendacoes.produto2, litragem);
    } else if (cloro > 3.0) {
        recomendacoes.produto2 = "Redutor de cloro";
        recomendacoes.dosagem2 = calcularDosagem(recomendacoes.produto2, litragem);
    }

    if (alcalinidade < 80) {
        recomendacoes.produto3 = "Elevador de Alcalinidade";
        recomendacoes.dosagem3 = calcularDosagem(recomendacoes.produto3, litragem);
    } else if (alcalinidade > 120) {
        recomendacoes.produto3 = "Redutor de Alcalinidade";
        recomendacoes.dosagem3 = calcularDosagem(recomendacoes.produto3, litragem);
    }

    if (litragem < 5000) {
        recomendacoes.produto4 = "Estabilizador de Litragem";
        recomendacoes.dosagem4 = calcularDosagem(recomendacoes.produto4, litragem);
    } else if (litragem > 10000) {
        recomendacoes.produto4 = "Estabilizador de Litragem";
        recomendacoes.dosagem4 = calcularDosagem(recomendacoes.produto4, litragem);
    }

    return recomendacoes;
}

function calcularDosagem(produto, litragem) {
    // Exemplo de cálculo de dosagem. Substitua esses valores com informações reais.
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
