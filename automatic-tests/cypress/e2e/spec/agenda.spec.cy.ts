const AGENDA_URL = "/agenda";

context("Agenda", () => {
  beforeEach(() => {
    cy.visit(AGENDA_URL);
  });

  it("checks a11y", () => {
    cy.injectAxe();
    cy.checkA11y();
  });
});
