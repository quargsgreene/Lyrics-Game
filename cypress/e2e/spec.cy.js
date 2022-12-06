describe('Lyrics Game browser tests', () => {
  it('visits the page', () => {
    cy.visit('https://quargsgreene.github.io/lyrics-game/');
  });

  it('displays the intro message' () => {
    cy.get('#sentence').contains('dove', {timeout: 10000});
  });

  it('displays the correct message with a correct guess', () => {
    cy.get('#input').type('sledgehammer')
      .then(() => {
        cy.get('#guess').click();
      }).then(() => {
        cy.get('#feedback').should('have.text', 'No! I also bet that you\'ve never had neon purple belly button lint.');
      })
  });
});
