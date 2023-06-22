import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Select, { SelectProps } from "./Select";

const requiredProps = {
  label: "Test",
  name: "testName",
  value: undefined,
  onBlur: () => {},
  onChange: () => {},
  ref: null,
  options: [{ label: "Option 1", value: "option1" }],
};

const setup = (args?: SelectProps) => {
  const utils = render(<Select {...requiredProps} {...args} />);

  const input = screen.getByLabelText(requiredProps.label);

  return {
    input,
    ...utils,
  };
};

describe("<Select />", () => {
  it("display label", async () => {
    const { input } = setup();

    expect(input).toBeTruthy();
  });

  it("display value", async () => {
    const MOCKED_VALUE = requiredProps.options[0];

    const { input } = setup({
      ...requiredProps,
      value: MOCKED_VALUE,
    });

    expect(input).toHaveValue(MOCKED_VALUE.value);
  });

  it("executes onChange", async () => {
    const SELECTED_OPTION = requiredProps.options[0];

    const onChangeMock = jest.fn((e) => e);

    const { input } = setup({ ...requiredProps, onChange: onChangeMock });

    await userEvent.selectOptions(input, SELECTED_OPTION.value);

    expect(onChangeMock.mock.results[0].value).toBe(SELECTED_OPTION);
  });

  it("executes onBlur", async () => {
    const onBlurMock = jest.fn();

    const { input } = setup({ ...requiredProps, onBlur: onBlurMock });

    await userEvent.click(input);
    await userEvent.tab();

    expect(onBlurMock).toBeCalled();
  });
});
