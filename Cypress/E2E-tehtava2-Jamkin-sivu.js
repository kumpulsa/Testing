// Sari Kumpulainen, M3920
/// <reference types="Cypress" />

/*
 * Yllä oleva rivi (mukaanlukien ///-merkit) käynnistää IntelliSensen tälle kyseiselle tiedostolla, jonka avulla
 * näemme funktioiden definitionit
 */

// describe - Mocha.js:n toiminto, joka kuvastaa testijoukkoa
describe('My third', () => {
  it('Jamk.fi-verkkosivustolla suoritettavat testit', () => {
    // 1. Menee Jamkin sivuille.
    cy.visit('https://www.jamk.fi/fi');

    // hyväksytään evästeet
    cy.get('#CybotCookiebotDialogBodyButtonDecline').click();

    // 2. Avaa navigaatiopalkin oikeassa reunassa olevan "hampurilaisvalikon".
    cy.get('.toggle-expand__open').should('be.visible').click();
  });
});
