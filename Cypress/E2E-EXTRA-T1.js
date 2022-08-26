// Sari Kumpulainen

/// <reference types="Cypress" />

/*
 * Yllä oleva rivi (mukaanlukien ///-merkit) käynnistää IntelliSensen tälle kyseiselle tiedostolla, jonka avulla
 * näemme funktioiden definitionit
 */

// 1. Menee sivustolle https://tiko.jamk.fi/~imjar/fronttiper/esimteht/pizza_anim/
describe('My second Test', () => {
  //it on yksittäinen testitapaus
  // 1.  Menee suomenkieliselle wikipedia pääsivulle.
  it('Menee sivustolle https://tiko.jamk.fi/~imjar/fronttiper/esimteht/pizza_anim/', () => {
    cy.visit('https://tiko.jamk.fi/~imjar/fronttiper/esimteht/pizza_anim/');
    cy.url().should('include', '/pizza_anim/');
  });
  it('2. Täyttää Nimi-kentän tiedot, ja tarkistaa että ne ovat oikein', () => {
    cy.get('input[id=nimi]').type('testi');
    cy.should('have.value', 'testi');
  });
  it('3. Täyttää Puhelin-kentän tiedot, ja tarkistaa että ne ovat oikein', () => {
    cy.get('input[id=puhelin]').type('012-3456789');
    cy.should('have.value', '012-3456789');
  });
  it('4. Täyttää Sähköposti-kentän tiedot, ja tarkistaa että ne ovat oikein', () => {
    cy.get('input[id=sposti]').type('testi@mail.com');
    cy.should('have.value', 'testi@mail.com');
  });
  it('5. Valitsee halutun koon', () => {
    cy.get('select[id="koko"]').select('Normaali');
  });
  it(' 6. Valitsee halutun pohjan', () => {
    cy.get('input[id="Ruis"]').check();
  });
  it('7. Valitsee halutut täytteet', () => {
    cy.get('input[type="checkbox"]').check(['Kinkku', 'Oliivi']);
  });
  it('8. Tarkistaa, että "Maksa tilaus"-nappulan yläpuolella oleva hinta-elementissä on oikea loppusumma. Hinta: 10 + 1 + 0.5 = 11.5', () => {
    cy.get('p').contains('Hinta').contains('11.50');
  });
  it('9. Lisätiedot kohtaan pystyy kirjoittamaan. Tarkista että arvo on oikea.', () => {
    cy.get('textarea').type('Kirjoita tähän lisätietoa');
    cy.should('have.value', 'Kirjoita tähän lisätietoa');
  });
  it('10. Tarkista, että valittujen täytteiden poistaminen onnistuu', () => {
    cy.get('input[type="checkbox"]').uncheck(['Kinkku', 'Oliivi']);
  });
  it('12. valitaan uudet täytteet ja testaan toimiiko maksa painike', () => {
    cy.get('input[type="checkbox"]').check(['Kinkku', 'Tonnikala', 'Salami']);
    cy.get('button[id="maksa"]').click();
    cy.get('h1').contains('Maksa tilaus');
  });
});
