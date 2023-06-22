import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import FieldWrapper, { FieldWrapperProps } from "./FieldWrapper";

const requiredProps = {
  label: "Test label",
  htmlFor: "input",
  children: <input id="input" />,
};

const setup = (args?: FieldWrapperProps) => {
  const utils = render(<FieldWrapper {...requiredProps} {...args} />);

  const input = screen.getByLabelText(requiredProps.label);

  return {
    input,
    ...utils,
  };
};

describe("<FieldWrapper />", () => {
  it("display label", async () => {
    const { input } = setup();
    expect(input).toBeTruthy();
  });

  it("display error message", async () => {
    const MOCKED_ERROR_MESSAGE = "Test error message";

    setup({
      ...requiredProps,
      errorMessage: MOCKED_ERROR_MESSAGE,
    });

    const errorMessage = screen.getByText(MOCKED_ERROR_MESSAGE);

    expect(errorMessage).toHaveTextContent(MOCKED_ERROR_MESSAGE);
  });
});
