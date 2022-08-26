// Sari Kumpulainen, M3920

const Laskin = function () {};

/**
 * Funktioiden dokumentaatio luotu JSDoc'lla
 * Lue lisää https://jsdoc.app/
 */

/**
 * Laskee yhteen a + b ja palauttaa summan c
 * @param {number} a
 * @param {number} b
 * @return {number} a + b summa
 */
Laskin.prototype.plusLasku = function (a, b) {
  const c = a + b;
  const tuloste = `${a} + ${b} = ${c}`;
  console.log(tuloste);
  return c;
};
/**
 * Vähentää a - b ja palauttaa erotuksen c
 * @param {number} a
 * @param {number} b
 * @return {number} a - b erotus
 */
Laskin.prototype.miinusLasku = function (a, b) {
  const c = a - b;
  console.log(a + " - " + b + " = " + c);
  return c;
};

//
// omat funktiot alkavat tästä
//

/** 1. Kertolasku
 * kertoo a * b ja palauttaa niiden tulon c
 * @param {number} a
 * @param {number} b
 * @return {number} a * b kertoma
 */
Laskin.prototype.kertoLasku = function (a, b) {
  const c = a * b;
  const tuloste = `${a} * ${b} = ${c}`;
  console.log(tuloste);
  return c;
};

/** 2. Jakolasku
 * Jakolasku a / b ja palauttaa arvon c
 * @param {number} a
 * @param {number} b
 * @return {number} a * b osamaara
 */
Laskin.prototype.jakoLasku = function (a, b) {
  const c = a / b;
  const tuloste = `${a} / ${b} = ${c}`;
  console.log(tuloste);
  return c;
};



/** 3. Kuution tilavuuden laskeminen
 *  Laskee kuution tilavuuden a * b * p ja palauttaa arvon c
 * @param {number} a
 * @param {number} b
 * @param {number} p 
 * @return {number} a * b * p kertoman
 */
Laskin.prototype.tilavuudenLasku = function (a, b, p) {
  const c = a * b * p;
  const tuloste = `${a} * ${b} * ${p} = ${c}`;
  console.log(tuloste);
  return c;
};

/** 4. Tunnit ja minuutit sekunneiksi
 *  
 * @param {number} tunnit
 * @param {number} minuutit 
 * @return {number} (tunnit * 60 * 60) + (minuutit * 60)
 */
 Laskin.prototype.aikaSekunneiksi = function (tunnit, minuutit) {
  const tunnitSekunneiksi = tunnit * 60 * 60
  const minuutitSekunneiksi = minuutit * 60  
  const sekuntit = tunnitSekunneiksi + minuutitSekunneiksi  
  const tuloste = `(${tunnit} * 60 * 60) + (${minuutit}*60) = ${sekuntit} `;
  console.log(tuloste);
  return sekuntit;
};


/** 5. painoindeksin laskeminen
 * Laskee henkilön painoindeksin paino / ((pituus / 100) * (pituus / 100))
 * @param {number} paino 
 * @param {number} pituus 
 * @return {float} paino/((pituus / 100) * (pituus / 100))
 */
 Laskin.prototype.painoindeksinLaskeminen = function (paino, pituus) {
  const pituusNetreina = pituus / 100;
  painoindeksi = paino / (pituusNetreina * pituusNetreina);
  const tulostus = `${paino} / ${pituusNetreina} = ${painoindeksi}`;
  console.log(tulostus);
  return painoindeksi;
};

/** 4. Tunnit ja minuutit sekunneiksi
 *  @param {number} tunnit
 * @param {number} minuutit
 * @return {number} 
 */


const laskin = new Laskin();

module.exports = laskin;
