const getFormatedDate = () => {
    const result = new Date (document.getElementById('input-date').value);
    document.getElementById('formated-date').innerHTML = result.toLocaleDateString("pt-BR", {timeZone: 'UTC'})
}; 

console.log('data de nascimento', getFormatedDate);

const inputDateEl = document.querySelector('#input-date')
IMask(inputDateEl, {
    mask: '0000-00-00'
});