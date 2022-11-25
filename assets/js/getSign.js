const jsonData = require('../../signos.json');

// acho q pode ser esse async, mas a funcao quebra quando eu tiro
const getSign = async (date) => { 
    const signData = jsonData.signos;

    let resultSigno = ''

    for (let index in signData) {
        const dataFim = signData[index].data_fim.split("/");
        

        let day = '' + date.getUTCDate();
        if (day.length < 2) day = '0' + day;

        const inputDay = day;

        let month = '' + (date.getUTCMonth() + 1);
        if (month.length < 2) month = '0' + month;

        const inputMonth = month;

        console.log({inputDay, inputMonth}) //aqui ele mostra a data formatada corretamente
        console.log(dataFim) // aqui ele mostra a data do signos.json no formato para comparar

        if (dataFim[1] == inputMonth) {
            if (dataFim[0] >= inputDay) {
                resultSigno = signData[index];
            } else {
                let newIndex = String(Number(index) + 1)
                resultSigno = signData[newIndex];
            }

        }
    };
    console.log(resultSigno) //continua mostrando os dados estranhos (undefined + promise + string)
    return resultSigno;



};

module.exports = getSign;