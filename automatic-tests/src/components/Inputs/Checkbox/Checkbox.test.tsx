import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Checkbox, { CheckboxProps } from "./Checkbox";

const requiredProps = {
  label: "Test",
  name: "testName",
  value: undefined,
  onBlur: () => {},
  onChange: () => {},
  ref: null,
};

const setup = (args?: CheckboxProps) => {
  const utils = render(<Checkbox {...requiredProps} {...args} />);

  const input = screen.getByRole("checkbox");
  const button = screen.getByRole("button");

  return {
    input,
    button,
    ...utils,
  };
};

describe("<Checkbox />", () => {
  it("displays label", async () => {
    const { input } = setup();

    expect(input).toBeTruthy();
  });

  it("displays value", async () => {
    const MOCKED_VALUE = true;

    const { input } = setup({
      ...requiredProps,
      value: MOCKED_VALUE,
    });

    expect(input).toBeChecked();
  });

  it("executes onChange", async () => {
    // Podział etapów ze wzorca AAA
    // Etap arrange
    const onChangeMock = jest.fn((e) => e);
    const { button } = setup({ ...requiredProps, onChange: onChangeMock });

    // Etap act
    await userEvent.click(button);

    // Etap assert
    expect(onChangeMock.mock.results[0].value).toBeTruthy();
  });

  it("executes onBlur", async () => {
    const onBlurMock = jest.fn();

    const { button } = setup({ ...requiredProps, onBlur: onBlurMock });

    await userEvent.click(button);
    await userEvent.tab();

    expect(onBlurMock).toBeCalled();
  });
});
