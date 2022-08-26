// Sari Kumpulainen, M3920
/// <reference types="Cypress" />

/*
 * Yllä oleva rivi (mukaanlukien ///-merkit) käynnistää IntelliSensen tälle kyseiselle tiedostolla, jonka avulla
 * näemme funktioiden definitionit
 */

// describe - Mocha.js:n toiminto, joka kuvastaa testijoukkoa
describe('My second Test', () => {
  //it on yksittäinen testitapaus
  // 1.  Menee suomenkieliselle wikipedia pääsivulle.
  it('Mene suomenkieliselle wikipedian pääsivulle', () => {
    cy.visit('https://fi.wikipedia.org/');
  });
  it('2. Kirjoittaa hakukenttään Jamk ja hakee', () => {
    //2. Kirjoittaa hakukenttään Jamk ja hakee
    cy.get('input[name=search]').type('Jamk');
    cy.get('.searchButton').click();

    //3. Tarkistaa, että olemme oikealla sivulla. (url:issa siis tulisi olla "Jyv%C3%A4skyl%C3%A4n_ammattikorkeakoulu")
    cy.url().should('include', '/Jyv%C3%A4skyl%C3%A4n_ammattikorkeakoulu');

    //4. Rullaa hiirellä kohtaan "Kampukset".
    cy.get('#Kampukset').scrollIntoView();

    //5. Odottaa 5 sekuntia.
    cy.wait(5000);

    //6. Vaihtaa kielen englanniksi, ja tarkistaa että uusi sivu on oikea (url:in tulisi siis olla jotain tyyliin "https://en.wikipedia.org/wiki/JAMK_University_of_Applied_Sciences"
    //voisi tehdä 3. tavalla ketjuttamalla komennot
    cy.get('a:contains("English")').click();
    cy.url().should(
      'include',
      'https://en.wikipedia.org/wiki/JAMK_University_of_Applied_Sciences'
    );
  });
});
