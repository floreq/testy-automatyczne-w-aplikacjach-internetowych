import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import RegistrationForm, {
  errorMessages,
  RegistrationFormProps,
} from "./RegistrationForm";

const requiredProps = {};

const setup = (args?: RegistrationFormProps) => {
  const utils = render(<RegistrationForm {...requiredProps} {...args} />);

  const firstNameInput = screen.getByLabelText("Imię");
  const lastNameInput = screen.getByLabelText("Nazwisko");
  const emailInput = screen.getByLabelText("Adres e-mail");
  const workshopInput = screen.getByLabelText("Opcjonalny zapis na warsztaty");
  const submitButton = screen.getByText("Zapisz się");

  return {
    firstNameInput,
    lastNameInput,
    emailInput,
    workshopInput,
    submitButton,
    ...utils,
  };
};

describe("<RegistrationForm />", () => {
  it("displays all fields ", async () => {
    const { firstNameInput, lastNameInput, emailInput, workshopInput } =
      setup();

    expect(firstNameInput).toBeTruthy();
    expect(lastNameInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(workshopInput).toBeTruthy();
  });

  it("displays required fields message", async () => {
    const { submitButton } = setup();

    await userEvent.click(submitButton);
    const allRequiredMessages = await screen.findAllByText(
      errorMessages.REQUIRED
    );

    expect(allRequiredMessages).toHaveLength(3);
  });

  it("displays not valid email message", async () => {
    const TYPED_NOT_VALID_EMAIL = "jankowalski.com";
    const { submitButton, emailInput } = setup();

    await userEvent.type(emailInput, TYPED_NOT_VALID_EMAIL);

    await userEvent.click(submitButton);
    const allRequiredMessages = await screen.findAllByText(
      errorMessages.NOT_EMAIL
    );

    expect(allRequiredMessages).toHaveLength(1);
  });

  it("executes onSubmit", async () => {
    const TYPED_FIRST_NAME = "jankowalski.com";
    const TYPED_LAST_NAME = "jankowalski.com";
    const TYPED_EMAIL = "jankowalski@test.com";
    const SELECTED_WORKSHOP = { label: "Warsztat 3", value: "workshop-3" };

    const onValidSubmitMock = jest.fn((e) => e);

    const {
      submitButton,
      emailInput,
      workshopInput,
      firstNameInput,
      lastNameInput,
    } = setup({
      onValidSubmit: onValidSubmitMock,
    });

    await userEvent.type(firstNameInput, TYPED_FIRST_NAME);
    await userEvent.type(lastNameInput, TYPED_LAST_NAME);
    await userEvent.type(emailInput, TYPED_EMAIL);
    await userEvent.selectOptions(workshopInput, SELECTED_WORKSHOP.value);

    await userEvent.click(submitButton);

    expect(onValidSubmitMock.mock.results[0].value).toMatchObject({
      firstName: TYPED_FIRST_NAME,
      lastName: TYPED_LAST_NAME,
      email: TYPED_EMAIL,
      workshop: SELECTED_WORKSHOP,
    });
  });
});
