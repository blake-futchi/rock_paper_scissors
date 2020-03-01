describe("User can open game", () => {
  beforeEach('round', () => {
    cy.visit("http://localhost:3001/");
  })
  it("displays dom variables", () => {
    cy.get("h1").should('be.visible');
    cy.get("#user").should('contain', 'User');
    cy.get("#computer").should('contain', 'Computer');
    cy.get("#user-score").contains('0');
    cy.get("#computer-score").contains('0');
    cy.get("#message").should('contain', 'Make your move. Choose wisely');
  })
  it("user can click element", () => {
    cy.get("#r").click();
    cy.get("#p").click();
    cy.get("#s").click();
  })
});



