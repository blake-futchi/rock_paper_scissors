describe("Page can show results", () => {
  describe('when computer picks rock', () => {
    beforeEach(() => {
      cy.visit("http://localhost:3001", {
        onBeforeLoad: win => {
          cy.stub(win.Math, 'floor').returns(0)
        }
      })
    })
    it('user picks rock equals a draw', () => {
      cy.get("#r").click();
      cy.get('#user-score').should('contain', '0')
      cy.get('#computer-score').should('contain', '0')
    });
    it('user picks scissor equals a computer win', () => {
      cy.get("#s").click();
      cy.get('#user-score').should('contain', '0')
      cy.get('#computer-score').should('contain', '1')
    });
    it('user picks paper equals a user win', () => {
      cy.get("#p").click();
      cy.get('#user-score').should('contain', '1')
      cy.get('#computer-score').should('contain', '0')
    });
    it('user picks master hand equals auto win', () => {
      cy.get("#m").click();
      cy.get('#user-score').should('contain', '1')
      cy.get('#computer-score').should('contain', '0')
    });
  });
  describe('when computer picks paper', () => {
    beforeEach(() => {
      cy.visit("http://localhost:3001", {
        onBeforeLoad: win => {
          cy.stub(win.Math, 'floor').returns(1)
        }
      })
    })
    it('user picks rock equals a computer win', () => {
      cy.get("#r").click();
      cy.get('#user-score').should('contain', '0')
      cy.get('#computer-score').should('contain', '1')
    });
    it('user picks scissor equals a user win', () => {
      cy.get("#s").click();
      cy.get('#user-score').should('contain', '1')
      cy.get('#computer-score').should('contain', '0')
    });
    it('user picks paper equals a draw', () => {
      cy.get("#p").click();
      cy.get('#user-score').should('contain', '0')
      cy.get('#computer-score').should('contain', '0')
    });
    it('user picks master hand equals auto win', () => {
      cy.get("#m").click();
      cy.get('#user-score').should('contain', '1')
      cy.get('#computer-score').should('contain', '0')
    });
  });
  describe('when computer picks scissor', () => {
    beforeEach(() => {
      cy.visit("http://localhost:3001", {
        onBeforeLoad: win => {
          cy.stub(win.Math, 'floor').returns(2)
        }
      })
    })
    it('user picks rock equals a user win', () => {
      cy.get("#r").click();
      cy.get('#user-score').should('contain', '1')
      cy.get('#computer-score').should('contain', '0')
    });
    it('user picks scissor equals a draw', () => {
      cy.get("#s").click();
      cy.get('#user-score').should('contain', '0')
      cy.get('#computer-score').should('contain', '0')
    });
    it('user picks paper equals a computer win', () => {
      cy.get("#p").click();
      cy.get('#user-score').should('contain', '0')
      cy.get('#computer-score').should('contain', '1')
    });
    it('user picks master hand equals auto win', () => {
      cy.get("#m").click();
      cy.get('#user-score').should('contain', '1')
      cy.get('#computer-score').should('contain', '0')
    });
  });
});
