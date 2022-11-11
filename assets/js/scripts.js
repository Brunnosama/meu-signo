const jsonData = 'signos.json';

const getInputedDate = () => {
    const result = new Date(document.getElementById('input-date').value);
    const day = result.getUTCDate();
    const month = result.getUTCMonth() + 1;
    const newDate = `${day}/${month}`;

    document.getElementById('formated-date').innerHTML = newDate;

};

const getSign = async () => {
    const response = await fetch(jsonData)
    const data = await response.json();
    const signData = data.signos;
    const outputStart = signData.map(startDate => startDate.data_inicio);
    const outputEnd = signData.map(endDate => endDate.data_fim);
    console.log(outputStart, outputEnd);
}

document.getElementById('btn-sign').addEventListener('click', getInputedDate, getSign);
document.getElementById('btn-sign').addEventListener('click', getSign);


const inputDateEl = document.querySelector('#input-date')
IMask(inputDateEl, {
    mask: '0000-00-00'
});