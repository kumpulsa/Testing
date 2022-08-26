const Kauppa = function () {
  this.tuotteet = [
    { nimi: 'Maito', hinta: 1.5 },
    { nimi: 'Leipä', hinta: 1 },
    { nimi: 'Kakku', hinta: 5 },
  ];
};

/**
 *
 * Lisää tuotteen kaupan tuotteet-taulukon loppuun
 * @param {String} tuotteenNimi
 * @param {Number} tuotteenHinta
 * @throws {TypeError} Jos parametrin arvo ei ole tyyppiä string
 */
Kauppa.prototype.lisaaTuote = function (tuotteenNimi, tuotteenHinta) {
  if (typeof tuotteenNimi !== 'string' || typeof tuotteenHinta !== 'number') {
    throw new TypeError();
  }
  const tuote = { nimi: tuotteenNimi, hinta: tuotteenHinta };
  this.tuotteet.push(tuote);
};

/**
 *
 * Etsii tuotteet-taulukosta indeksin nimen perusteella.
 *
 * Jos tuotteen indeksi löydetään, poistaa tuotteen taulukosta ja palauttaa truen
 *
 * Jos tuotetta ei löydetä, palauttaa falsen
 *
 * @param {string} tuotteenNimi
 * @return {boolean} Onnistuminen
 * @throws {TypeError} Jos parametrin arvo ei ole tyyppiä string
 */
Kauppa.prototype.poistaTuote = function (tuotteenNimi) {
  //Koodisi ja kommentit tänne!
};

/**
 * Tulostaa tuottee-taulukon konsoliin
 */
Kauppa.prototype.tulostaTuotelista = function () {
  console.log(this.tuotteet);
};

const kauppa = new Kauppa();

module.exports = kauppa;
