function calcularRecomendacoes() {
    // Obter valores dos campos de entrada
    var ph = parseFloat(document.getElementById('ph').value);
    var cloro = parseFloat(document.getElementById('cloro').value);
    var alcalinidade = parseFloat(document.getElementById('alcalinidade').value);
    var litragem = parseFloat(document.getElementById('litragem').value);

    // Realizar cálculos ou ações desejadas com esses valores
    // Por exemplo, você pode exibir alertas com recomendações com base nos valores inseridos
    alert("Valores inseridos: pH=" + ph + ", Cloro=" + cloro + ", Alcalinidade=" + alcalinidade + ", Litragem=" + litragem);
}
