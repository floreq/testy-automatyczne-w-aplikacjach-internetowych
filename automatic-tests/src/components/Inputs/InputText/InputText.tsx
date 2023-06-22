import { ForwardedRef, forwardRef } from "react";

import { ControlledInputProps } from "..";
import FieldWrapper from "../FieldWrapper/FieldWrapper";

export interface InputTextProps extends ControlledInputProps<string> {
  label: string;
  id?: string;
}

const InputText = forwardRef(
  (
    { errorMessage, label, name, onBlur, onChange, value, id }: InputTextProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <FieldWrapper
        label={label}
        htmlFor={id ?? name}
        errorMessage={errorMessage}
      >
        <input
          name={name}
          id={id ?? name}
          onBlur={onBlur}
          onChange={onChange}
          ref={ref}
          type={"text"}
          value={value ?? ""}
          className={"p-1 border-2 border-current bg-white text-lg"}
        />
      </FieldWrapper>
    );
  }
);

InputText.displayName = "InputText";

export default InputText;
