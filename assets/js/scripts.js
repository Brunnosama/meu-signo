const jsonData = 'signos.json';

const inputedDate = () => {
    var result = new Date(document.getElementById('input-date').value);

    var day = '' + result.getUTCDate();
    if (day.length < 2) day = '0' + day;

    const inputDay = day;

    var month = '' + (result.getUTCMonth() + 1);
    if (month.length < 2) month = '0' + month;

    const inputMonth = month;

    if (inputDay && inputMonth == String(NaN)) {
        alert("Data inválida")
    }

    return ({ inputDay, inputMonth });

};

const getSign = async () => {
    const { inputDay, inputMonth } = inputedDate()
    const response = await fetch(jsonData)
    const data = await response.json();
    const signData = data.signos;

    var resultSigno = ''

    for (let index in signData) {

        var dataFim = signData[index].data_fim.split("/");

        if (dataFim[1] == inputMonth) {
            if (dataFim[0] >= inputDay) {
                resultSigno = signData[index].nome;
            } else {
                var newIndex = String(Number(index)+1)
                resultSigno = signData[newIndex].nome;
            }

        }
    };

    if(!resultSigno){
        document.getElementById('formated-date').innerHTML = ``;
    } else {
        document.getElementById('formated-date').innerHTML = `Resultado: ${resultSigno}`;
    }

};

document.getElementById('btn-sign').addEventListener('click', getSign);

const inputDateEl = document.querySelector('#input-date')
IMask(inputDateEl, {
    mask: '0000-00-00'
});