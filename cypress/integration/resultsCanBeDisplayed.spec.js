describe("Page can show results", () => {
  beforeEach('round', () => {
    cy.visit("http://localhost:3001/");
    cy.get("#r").click();
    cy.get("#user-score").contains('0');
    cy.get("#computer-score").contains('0');
  })


  it('the game is a tie', () => {
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`DRAW`)
    })
    cy.get('#user-score').should('contain', '0')
    cy.get('#computer-score').should('contain', '0')
    });
    

  it('user wins round', () => {
    cy.on('window:alert', (str) => {
      expect(str).to.equal('USER WINS')
    })
    cy.get('#user-score').should('contain', '1')
    cy.get('#computer-score').should('contain', '0')
    })
    ;

  it('computer wins round', () => {
    cy.on('window:alert', (str) => {
      expect(str).to.equal('USER LOSES')
    })
    cy.get('#user-score').should('contain', '0')
    cy.get('#computer-score').should('contain', '1')
    })
    ;

});

