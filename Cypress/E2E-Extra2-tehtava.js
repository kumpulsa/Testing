// Sari Kumpulainen, M3920
/// <reference types="Cypress" />

/*
 * Yllä oleva rivi (mukaanlukien ///-merkit) käynnistää IntelliSensen tälle kyseiselle tiedostolla, jonka avulla
 * näemme funktioiden definitionit
 */

describe('E2E Extra 2', () => {
  // 1. mene testattavalle sivustolle
  it('Testauksia joita suoritetaan omalla verkkosivulla', () => {
    // mene testattavalle verkkosivulle
    cy.visit('https://student.labranet.jamk.fi/~M3920/testaus/JstoDolist2/');
  });
  it('Tarkistetaan että lista on oikean pituinen, listan pituus pitäisi olla 7', () => {
    cy.get('#myUL li').should('have.length', 7);
  });
  // it('Tyhjennä lista -painike pitäisi poistaa kaikki listan tehtävät.', () => {
  //   cy.get('#clear-list').contains('Clear').click();
  //   cy.get('#myUL li').should('have.length', 0);
  // });
  // it('Tarkistetaan että uuden tehtävän lisääminen listaan onnistuu', () => {
  //   cy.get('#myInput').type('Uusi tehtävä');
  //   cy.get('.addBtn').click();
  //   cy.get('#myUL li').first().contains('Uusi tehtävä');
  // });
  // it('Tarkistetaan että uuden tehtävän poistaminen onnistuu', () => {
  //   cy.get('#myUL li').first().contains('Uusi tehtävä').get('.close').click();
  // });
});
