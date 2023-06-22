import { forwardRef } from "react";
import { useController } from "react-hook-form";
import { UseControllerProps } from "react-hook-form/dist/types";

import ControlledSelect, {
  SelectProps,
} from "@/components/Inputs/Select/Select";

const Select = forwardRef(
  (
    { label, id, options, ...rest }: SelectProps & UseControllerProps<any>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref
  ) => {
    const { fieldState, field } = useController(rest);

    return (
      <ControlledSelect
        label={label}
        options={options}
        id={id}
        errorMessage={fieldState.error?.message}
        {...field}
      />
    );
  }
);

Select.displayName = "Select";

export default Select;
