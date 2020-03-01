describe("Page can show results", () => {
  beforeEach('round', () => {
    cy.visit("http://localhost:3001/");
    cy.get("#r").click();
  })


  it('the game is a tie', () => {
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`DRAW`)
    })
    })
    ;

  it('user wins round', () => {
    cy.on('window:alert', (str) => {
      expect(str).to.equal('USER WINS')
    })
    })
    ;

  it('computer wins round', () => {
    cy.on('window:alert', (str) => {
      expect(str).to.equal('USER LOSES')
    })
    })
    ;

});

