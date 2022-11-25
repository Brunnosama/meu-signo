const jsonData = require('../../signos.json');

// acho q pode ser esse async, mas a funcao quebra quando eu tiro
const getSign = (date) => {
    const signData = jsonData.signos;

    let resultSigno = ''

    let day = '' + date.getUTCDate();
    if (day.length < 2) day = '0' + day;

    const inputDay = day;

    let month = '' + (date.getUTCMonth() + 1);
    if (month.length < 2) month = '0' + month;

    const inputMonth = month;

    if ((inputMonth == 03 && inputDay >= 21) || (inputMonth == 04 && inputDay <= 20)) { resultSigno = signData[0] }
    else if (
        (inputMonth == 04 && inputDay >= 21) || (inputMonth == 05 && inputDay <= 20)) { resultSigno = signData[1] }
    else if (
        (inputMonth == 05 && inputDay >= 21) || (inputMonth == 06 && inputDay <= 20)) { resultSigno = signData[2] }
    else if (
        (inputMonth == 06 && inputDay >= 22) || (inputMonth == 07 && inputDay <= 22)) { resultSigno = signData[3] }
    else if (
        (inputMonth == 07 && inputDay >= 23) || (inputMonth == 08 && inputDay <= 23)) { resultSigno = signData[4] }
    else if (
        (inputMonth == 08 && inputDay >= 24) || (inputMonth == 09 && inputDay <= 23)) { resultSigno = signData[5] }
    else if (
        (inputMonth == 09 && inputDay >= 24) || (inputMonth == 10 && inputDay <= 23)) { resultSigno = signData[6] }
    else if (
        (inputMonth == 10 && inputDay >= 24) || (inputMonth == 11 && inputDay <= 22)) { resultSigno = signData[7] }
    else if (
        (inputMonth == 11 && inputDay >= 23) || (inputMonth == 12 && inputDay <= 21)) { resultSigno = signData[8] }
    else if (
        (inputMonth == 01 && inputDay <= 20) || (inputMonth == 12 && inputDay >= 22)) { resultSigno = signData[9] }
    else if (
        (inputMonth == 01 && inputDay >= 21) || (inputMonth == 02 && inputDay <= 18)) { resultSigno = signData[10] }
    else if (
        (inputMonth == 02 && inputDay >= 19) || (inputMonth == 03 && inputDay <= 20)) { resultSigno = signData[11] }
        
    return resultSigno;
};

module.exports = getSign;