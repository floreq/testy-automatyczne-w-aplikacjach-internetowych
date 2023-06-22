import { ForwardedRef, forwardRef } from "react";

import { ControlledInputProps } from "..";
import FieldWrapper from "../FieldWrapper/FieldWrapper";

export interface CheckboxProps
  extends ControlledInputProps<boolean | undefined> {
  label: string;
  id?: string;
}

const Checkbox = forwardRef(
  (
    { onChange, name, value, id, onBlur, label, errorMessage }: CheckboxProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <FieldWrapper
        htmlFor={id ?? name}
        label={label}
        errorMessage={errorMessage}
      >
        <button
          id={id ?? name}
          ref={ref}
          onBlur={onBlur}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onChange(!value);
          }}
        >
          Icon
        </button>
        <input
          name={name}
          tabIndex={-1}
          onChange={onChange}
          type="checkbox"
          checked={!!value}
        />
      </FieldWrapper>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
