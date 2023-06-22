import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import InputText, { InputTextProps } from "./InputText";

const requiredProps = {
  label: "Test",
  name: "testName",
  value: "",
  onBlur: () => {},
  onChange: () => {},
  ref: null,
};

const setup = (args?: InputTextProps) => {
  const utils = render(<InputText {...requiredProps} {...args} />);

  const input = screen.getByLabelText(requiredProps.label);

  return {
    input,
    ...utils,
  };
};

describe("<InputText />", () => {
  it("display label", async () => {
    const { input } = setup();
    expect(input).toBeTruthy();
  });

  it("display value", async () => {
    const MOCKED_VALUE = "testValue";

    const { input } = setup({ ...requiredProps, value: MOCKED_VALUE });
    expect(input).toHaveValue(MOCKED_VALUE);
  });

  it("executes onChange", async () => {
    const TYPED_VALUE = "test";
    const onChangeMock = jest.fn();

    const { input } = setup({ ...requiredProps, onChange: onChangeMock });

    await userEvent.type(input, TYPED_VALUE);

    expect(onChangeMock).toBeCalledTimes(4);
  });

  it("executes onBlur", async () => {
    const onBlurMock = jest.fn();

    const { input } = setup({ ...requiredProps, onBlur: onBlurMock });

    await userEvent.click(input);
    await userEvent.tab();

    expect(onBlurMock).toBeCalled();
  });
});
