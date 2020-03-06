describe("Page shows what was picked", () => {
  describe('when computer picks rock', () => {
    beforeEach(() => {
      cy.visit("http://localhost:3001", {
        onBeforeLoad: win => {
          cy.stub(win.Math, 'floor').returns(0)
        }
      })
    })
    it('user picks rock equals draw', () => {
      cy.get("#r").click();
      cy.get('#results').should('contain', 'You chose rock. Computer chose rock. Game is a draw. ');
    });
    it('user picks scissor equals a computer win', () => {
      cy.get("#s").click();
      cy.get('#results').should('contain', 'You chose scissors. Computer chose rock. You lose. ');
    });
    it('user picks paper equals a user win', () => {
      cy.get("#p").click();
      cy.get('#results').should('contain', 'You chose paper. Computer chose rock. You win. ');
    });
    it('user picks master hand equals auto win', () => {
      cy.get("#m").click();
      cy.get('#results').should('contain', 'You chose master hand. Did you expect to lose? ');
    });
  });
});

describe("Page shows what was picked", () => {
  describe('when computer picks paper', () => {
    beforeEach(() => {
      cy.visit("http://localhost:3001", {
        onBeforeLoad: win => {
          cy.stub(win.Math, 'floor').returns(1)
        }
      })
    })
    it('user picks paper equals draw', () => {
      cy.get("#p").click();
      cy.get('#results').should('contain', 'You chose paper. Computer chose paper. Game is a draw. ');
    });
    it('user picks rock equals a computer win', () => {
      cy.get("#r").click();
      cy.get('#results').should('contain', 'You chose rock. Computer chose paper. You lose. ');
    });
    it('user picks scissor equals a user win', () => {
      cy.get("#s").click();
      cy.get('#results').should('contain', 'You chose scissors. Computer chose paper. You win. ');
    });
    it('user picks master hand equals auto win', () => {
      cy.get("#m").click();
      cy.get('#results').should('contain', 'You chose master hand. Did you expect to lose? ');
    });
  });
});

describe("Page shows what was picked", () => {
  describe('when computer picks scissors', () => {
    beforeEach(() => {
      cy.visit("http://localhost:3001", {
        onBeforeLoad: win => {
          cy.stub(win.Math, 'floor').returns(2)
        }
      })
    })
    it('user picks scissors equals draw', () => {
      cy.get("#s").click();
      cy.get('#results').should('contain', 'You chose scissors. Computer chose scissors. Game is a draw. ');
    });
    it('user picks paper equals a computer win', () => {
      cy.get("#p").click();
      cy.get('#results').should('contain', 'You chose paper. Computer chose scissors. You lose. ');
    });
    it('user picks rock equals a user win', () => {
      cy.get("#r").click();
      cy.get('#results').should('contain', 'You chose rock. Computer chose scissors. You win. ');
    });
    it('user picks master hand equals auto win', () => {
      cy.get("#m").click();
      cy.get('#results').should('contain', 'You chose master hand. Did you expect to lose? ');
    });
  });
});



