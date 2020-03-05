describe("master hand always wins", () => {
  beforeEach('round', () => {
    cy.get("#m").click();
  })
  describe('the user wins', () => {
    beforeEach('round', () => {
      cy.stubOutRandom(0)
      cy.stub(Math, 'floor').returns(0)

    })
    it('displays the score', () => {
      cy.get('#user-score').should('contain', '1')
      cy.get('#computer-score').should('contain', '0')
    });
  });
});