const jsonData = require('../../signos.json');

// acho q pode ser esse async, mas a funcao quebra quando eu tiro
const getSign = (date) => {
    const signData = jsonData.signos;

    let resultSigno = ''

    let day = '' + date.getUTCDate(); if (day.length < 2) day = '0' + day;
    const inputDay = day;

    let month = '' + (date.getUTCMonth() + 1); if (month.length < 2) month = '0' + month;
    const inputMonth = month;

    for (let index in signData) {
        const dataInicio = signData[index].data_inicio.split("/");
        const dataFim = signData[index].data_fim.split("/");

        if ((inputMonth == dataInicio[1] && inputDay >= dataInicio[0] || inputMonth == dataFim[1] && inputDay <= dataFim[0])) { resultSigno = signData[index] }
    };
    return resultSigno;
};

module.exports = getSign;