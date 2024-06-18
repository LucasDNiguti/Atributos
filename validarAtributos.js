function validarAtribuicao(atributos, limitePontos = 27) {
    const tabelaCusto = {
        8: 0, 9: 1, 10: 2, 11: 3, 12: 4, 13: 5, 14: 7, 15: 9
    };

    let pontosGastos = 0;
    let detalhes = [];

    for (let atributo in atributos) {
        let valor = atributos[atributo];
        if (valor < 8 || valor > 15) {
            return `Valor inválido para ${atributo}. Deve estar entre 8 e 15.`;
        }
        pontosGastos += tabelaCusto[valor];
        detalhes.push(`${atributo}: ${valor} (custo: ${tabelaCusto[valor]})`);
    }

    if (pontosGastos > limitePontos) {
        return `Pontos gastos (${pontosGastos}) excedem o limite de ${limitePontos}. Detalhes: ${detalhes.join(', ')}`;
    }

    if (pontosGastos < 0) {
        return `Pontos gastos (${pontosGastos}) não podem ser negativos.`;
    }

    return `Atributos válidos. Pontos gastos: ${pontosGastos}. Detalhes: ${detalhes.join(', ')}`;
}

const atributosPersonagem = {
    FOR: 15,
    DES: 14,
    CON: 13,
    INT: 12,
    SAB: 10,
    CAR: 8
};

const resultado = validarAtribuicao(atributosPersonagem);
console.log(resultado);