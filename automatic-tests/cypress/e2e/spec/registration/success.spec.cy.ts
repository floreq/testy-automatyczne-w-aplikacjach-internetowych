const SUCCESS_URL = "/rejestracja/sukces";

context("Registration/Success", () => {
  beforeEach(() => {
    cy.visit(SUCCESS_URL);
  });

  it("checks a11y", () => {
    cy.injectAxe();
    cy.checkA11y();
  });
});
