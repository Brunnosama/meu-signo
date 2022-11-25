const getSign = require('./getSign');

// Data: "1991-03-30" Resultado: "Aries"

const listTest = [
    { date: "1991-03-30", name: "Aries" },
    { date: "1991-11-01", name: "Escorpiao" },
    { date: "1991-12-25", name: "Capricornio" },
    { date: "1991-01-15", name: "Capricornio" },
    { date: "1992-12-25", name: "Capricornio" },
    { date: "1991-02-28", name: "Peixes" },
    { date: "1992-02-29", name: "Peixes" }
];

const testResult = listTest.map((item) => {
    const sign = getSign(new Date(item.date))
    const result = sign?.nome === item.name
    
    return {sign, item, result}
    
});

console.log(testResult);