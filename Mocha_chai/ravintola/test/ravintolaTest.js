// Sari Kumpulainen
// 1.1 Testaa, että laskeLasku funktio palauttaa oikein summan.
// 1.2 Testaa, että palautaTaulukonSatunnainenArvo funktio palauttaa arvon 
// joistakin Ravintolan taulukoista (alkuroat, paaruoat, jalkiruoat tai juomat).
// 1.3 Testaa, että syoRavintolassa funktio palauttaa oikean tyyppisen arvon.


const assert = require('chai').assert;
const { it } = require('mocha');
const Ravintola = require('../Ravintola');

describe('Ravintolan testaus', function (){
    const ravintola = Ravintola;

    it('1.1 Tarkistetaan että laskeLasku-funktio palauttaa oikean summan: 6 + 4 + 4 ', function(){
        const checkSumma = ravintola.laskeLasku(true, true, false);
        assert.strictEqual(checkSumma, 14)
    });

    // it('1.1 Tarkistetaan että laskeLasku-funktio palauttaa oikean. sen pitäisi olla pelkkä pääruoan hinta', function(){
    //     const checkSumma = ravintola.laskeLasku(false, false, false);
    //     assert.strictEqual(checkSumma, 6)
    // });

    // tämän ratkaisussa voitaisiin hyödyntään assertin oneOf(inList, list, [message])
    it('1.2 palautaTaulukoSatunnaisarvo-funktio palauttaa arvon joistakin ravintolan raulukoista esim alkuruuat, paaruaat', function () {
        const summaJaRuuatMuuttuja = ravintola.tilaaAteria(true, true, false)
        assert.oneOf(summaJaRuuatMuuttuja.ruoat[0], ravintola.alkuruoat, 'palauttaa arvon')
    });


    // 1.3 1.3 Testaa, että syoRavintolassa-funktio palauttaa oikean tyyppisen arvon.
    // 
    it('tarkistetaan että syoRavintolla-funktio palauttaa oikeantyyppisen arvon', function() {

        const tarkistaTyyppi = ravintola.syoRavintolassa(3)
        assert.isArray(tarkistaTyyppi, 'onko palautettu arvo oikea')
    });


});


