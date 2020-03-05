describe("Page can show results", () => {
  beforeEach('round', () => {
    cy.stubOutRandom(0)
  })
  describe('the game is a tie', () => {
    beforeEach('round', () => {
      cy.stub(Math, 'floor').returns(0)
      cy.get("#r").click();
    })
    it('displays the score', () => {
      cy.get('#user-score').should('contain', '0')
      cy.get('#computer-score').should('contain', '0')
    });
  });
  
  describe('the user wins', () => {
    beforeEach('round', () => {
      cy.stub(Math, 'floor').returns(0)
      cy.get("#p").click();
    }) 
    it('displays the score', () => {
      cy.get('#user-score').should('contain', '1')
      cy.get('#computer-score').should('contain', '0')
    });
  });
  describe('the computer wins', () => {
    beforeEach('round', () => {
      cy.stub(Math, 'floor').returns(0)
      cy.get("#s").click();
    }) 
    it('displays the score', () => {
      cy.get('#user-score').should('contain', '0')
      cy.get('#computer-score').should('contain', '1')
      });
  });
});

