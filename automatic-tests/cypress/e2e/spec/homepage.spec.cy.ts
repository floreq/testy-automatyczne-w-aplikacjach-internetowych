const HOMEPAGE_URL = "/";

context("Homepage", () => {
  beforeEach(() => {
    cy.visit(HOMEPAGE_URL);
  });

  it("checks a11y", () => {
    cy.injectAxe();
    cy.checkA11y();
  });
});
