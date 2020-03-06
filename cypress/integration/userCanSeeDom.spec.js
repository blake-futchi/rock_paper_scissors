describe("User can open game", () => {
  beforeEach('match', () => {
    cy.visit("http://localhost:3001/");
  })

  it("displays dom variables", () => {
    cy.get("h1").should('be.visible');
    cy.get("#user").should('contain', 'User');
    cy.get("#computer").should('contain', 'Computer');
    cy.get("#user-score").contains('0');
    cy.get("#computer-score").contains('0');
    cy.get("#message").should('contain', 'It\'s time to duel!!!!');
  })

  it("user can see rock paper scissors elements and click on them", () => {
    cy.get("#r").click();
    cy.get("#p").click();
    cy.get("#s").click();
  })
});



