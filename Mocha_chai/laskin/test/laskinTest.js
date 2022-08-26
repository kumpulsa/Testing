// Sari Kumpulainen, M3920

const assert = require('chai').assert;
const { it } = require('mocha');
const { check } = require('prettier');
const Laskin = require('../Laskin');

describe('Laskimen testaus', function () {
  const laskin = Laskin;

  it('Tarkistetaan, että plusLasku-funktio palauttaa oikean summan yhteenlaskulla 1 + 1', function () {
    const checkSumma = laskin.plusLasku(1, 1);
    assert.strictEqual(checkSumma, 2);
  });

  it('Tarkistetaan, että miinusLasku-funktio palauttaa oikean erotuksen vähennyslaskulla 5 - 2', function () {
    const checkSumma = laskin.miinusLasku(5, 2);
    assert.strictEqual(checkSumma, 3);
  });


  // omat testit alkaa tästä 

  it('1. Tarkistetaan, että kertoLasku-funktio palauttaa oikean tulon kertolaskulla 2 * 2', function () {
    const checkSumma = laskin.kertoLasku(2, 2);
    assert.strictEqual(checkSumma, 4);
  });

  it('2. Tarkistetaan, että jakoLaskun-funktio palauttaa oikean vastauksen jakolaskulla 4 / 2', function() {
    const checkSumma = laskin.jakoLasku(4,2);
    assert.strictEqual(checkSumma, 2)
  });
  
  it('3. Tarkistetaan, että tilavuudenLasku-funktio palauttaa oikean vastauksen tilavuuden laskulle 2 * 3 * 4', function(){
    const checkSumma = laskin.tilavuudenLasku(2,3,4);
    assert.strictEqual(checkSumma, 24)
  })

  it('4. Tarkistetaan, että aikaSekunneiksi-funktio palauttaa oikean vastauksen laskulla (1 * 60 * 60) + (10 * 60)', function() {
    const checkSumma = laskin.aikaSekunneiksi(1, 10);
    assert.strictEqual(checkSumma, 4200)
  })

  it('5. Tarkistetaan, että painoindeksinLaskeminen-funktio toimii laskulla 50 / ((150/100) * (150/100))', function(){
    const checkSumma = laskin.painoindeksinLaskeminen(50,150)
    assert.strictEqual(checkSumma, 22.22222222222222)
  })
});
