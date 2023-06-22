import { FormEvent, ForwardedRef, forwardRef, useMemo } from "react";

import { ControlledInputProps } from "..";
import FieldWrapper from "../FieldWrapper/FieldWrapper";

type Option = {
  label: string;
  value: string;
};

export interface SelectProps extends ControlledInputProps<Option | undefined> {
  label: string;
  id?: string;
  options: Option[];
  defaultOption?: Option;
  defaultSelectionLabel?: string;
}

const Select = forwardRef(
  (
    {
      errorMessage,
      label,
      name,
      onBlur,
      onChange,
      value,
      id,
      options,
      defaultOption = { label: "Wybierz", value: "" },
    }: SelectProps,
    ref: ForwardedRef<HTMLSelectElement>
  ) => {
    const displayedOptions = useMemo(() => {
      return [defaultOption, ...options].map(({ value, label }) => {
        return (
          <option key={value} value={value}>
            {label}
          </option>
        );
      });
    }, [defaultOption, options]);

    const handleChange = (event: FormEvent<HTMLSelectElement>) => {
      const selectedValue = event.currentTarget.value;

      return onChange(options.find(({ value }) => value === selectedValue));
    };

    const currentValue = useMemo(() => {
      return value?.value ?? defaultOption.value;
    }, [defaultOption, value]);

    return (
      <FieldWrapper
        label={label}
        htmlFor={id ?? name}
        errorMessage={errorMessage}
      >
        <select
          name={name}
          id={id ?? name}
          onBlur={onBlur}
          onChange={handleChange}
          ref={ref}
          value={currentValue}
          className={"p-1 border-2 border-current h-10 bg-white text-lg"}
        >
          {displayedOptions}
        </select>
      </FieldWrapper>
    );
  }
);

Select.displayName = "Select";

export default Select;
