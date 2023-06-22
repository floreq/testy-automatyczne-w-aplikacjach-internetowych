const errorMessages = {
  REQUIRED: "Pole wymagana",
  NOT_EMAIL: "Podaj poprawny email",
};

const REGISTRATION_URL = "/rejestracja";
const SUCCESS_REGISTRATION_URL = "/rejestracja/sukces";

const VALID_REGISTRATION_VALUES = {
  firstName: "Jan",
  lastName: "Kowalski",
  email: "jk@mail.com",
  workshop: "workshop-2",
};

const NOT_VALID_REGISTRATION_VALUES = {
  email: "jkmail.com",
};

context("Registration", () => {
  beforeEach(() => {
    cy.visit(REGISTRATION_URL);
  });

  it("checks a11y", () => {
    cy.injectAxe();
    cy.checkA11y();
  });

  it("has registration form", () => {
    cy.get("form").within(() => {
      cy.get('input[name="firstName"]').should("be.visible");
      cy.get('input[name="lastName"]').should("be.visible");
      cy.get('input[name="email"]').should("be.visible");
      cy.get('select[name="workshop"]').should("be.visible");
      cy.get('button[type="submit"]').should("be.visible");
    });
  });

  it("can register", () => {
    cy.get("form").within(() => {
      cy.get('input[name="firstName"]').type(
        VALID_REGISTRATION_VALUES.firstName
      );
      cy.get('input[name="lastName"]').type(VALID_REGISTRATION_VALUES.lastName);
      cy.get('input[name="email"]').type(VALID_REGISTRATION_VALUES.email);
      cy.get('select[name="workshop"]').type(
        VALID_REGISTRATION_VALUES.workshop
      );

      cy.get('button[type="submit"]').click();

      cy.url().should(
        "be.equal",
        `${Cypress.config("baseUrl")}${SUCCESS_REGISTRATION_URL}`
      );
    });
  });

  it("displays required fields message", () => {
    cy.get('button[type="submit"]').click();

    cy.get('input[name="firstName"]')
      .next()
      .should("have.text", errorMessages.REQUIRED);
    cy.get('input[name="lastName"]')
      .next()
      .should("have.text", errorMessages.REQUIRED);
    cy.get('input[name="email"]')
      .next()
      .should("have.text", errorMessages.REQUIRED);
  });

  it("displays not valid email message", () => {
    cy.get('input[name="email"]').type(NOT_VALID_REGISTRATION_VALUES.email);

    cy.get('button[type="submit"]').click();

    cy.get('input[name="email"]')
      .next()
      .should("have.text", errorMessages.NOT_EMAIL);
  });
});

export {};
