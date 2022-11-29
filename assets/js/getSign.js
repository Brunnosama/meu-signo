const { signos } = require('../../signos.json');

// acho q pode ser esse async, mas a funcao quebra quando eu tiro
const getSign = (date) => {

  let day = `${date.getUTCDate()}`.padStart(2, '0');
  let month = `${(date.getUTCMonth() + 1)}`.padStart(2, '0');

  return signos.find(signo => {
    const [diaInicio, mesInicio] = signo.data_inicio.split('/');
    const [diaFim, mesFim] = signo.data_fim.split('/');

    if ((month == mesInicio && day >= diaInicio) || (month == mesFim && day <= diaFim)) {
      return signo;
    }

    return null;
  })
};

module.exports = getSign;
