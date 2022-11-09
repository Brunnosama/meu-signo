document.children[0].children[1].children[1].children[0].children[2].value = '1989-08-05'
document.children[0].children[1].children[1].children[0].children[2].placeholder="YYYY-MM-DD"









fetch('/signos.json')
.then()






const inputDateEl = document.querySelector('#input-date')
IMask(inputDateEl, {
    mask: '0000-00-00'
})






class ZodiacSign {
	
    static signs = {
        en : ['Aries: The Ram','Taurus: The Bull','Gemini: The Twins','Cancer: The Crab','Leo: The Lion','Virgo: The Virgin','Libra: The Scales','Scorpio: The Scorpion','Sagittarius: The Archer','Capricorn: The Goat','Aquarius: The Water Bearer','Pisces: The Fish'],			
        fr : ['Bélier', 'Taureau', 'Gémeaux', 'Cancer', 'Lion', 'Vierge', 'Balance', 'Scorpion', 'Sagittaire', 'Capricorne', 'Vereau', 'Poissons'],
        es : ['Aries', 'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo', 'Libra', 'Escorpio', 'Sagitario', 'Capricornio', 'Acuario', 'Piscis'],
        ar : ['الحمل', 'الثور', 'الجوزاء', 'السرطان', 'الأسد', 'العذراء', 'الميزان', 'العقرب',' القوس', 'الجدي', 'الدلو', 'الحوت']
    }
    
    static chineseSigns = {
        en : ['Monkey', 'Rooster', 'Dog', 'Pig', 'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Sheep'],
        fr : ['Singe', 'Coq', 'Chien', 'Cochon', 'Rat', 'Bœuf', 'Tigre', 'Lapin', 'Dragon', 'Serpent', 'Cheval', 'Mouton'],
        es : ['Mono', 'Gallo', 'Perro', 'Cerdo', 'Rata', 'Buey', 'Tigre', 'Conejo', 'Dragón', 'Serpiente', 'Caballo', 'Oveja'],
        ar : ['القرد', 'الديك', 'الكلب', 'الخنزير', 'الفأر', 'الثور', 'النمر', 'الأرنب', 'التنين', 'الثعبان', 'الحصان', 'الخروف']
    }
    
    static chineseElements = {
        en : ['Metal', 'Water', 'Wood', 'Fire', 'Earth'],
        fr : ['Métal', 'Eau', 'Bois', 'Feu', 'Terre'],
        es : ['Metal', 'Agua', 'Madera', 'Fuego', 'Tierra'],
        ar : ['المعدني', 'المائي', 'الخشبي', 'الناري', 'الأرضي']
    }
    
    constructor(value, lang = 'en') {
        this.sign = ''
    
        if (!Object.hasOwn(ZodiacSign.signs, lang)) lang = 'en'
        if (!isNaN(Date.parse(value))){
            this.sign = this.#getSign(value, lang)
        }
    }
    
    #getSign(x, y) {
        return ZodiacSign.signs[y][Number(new Intl.DateTimeFormat('fr-TN-u-ca-persian', {month: 'numeric'}).format(Date.parse(x))) - 1];
    }
    
}