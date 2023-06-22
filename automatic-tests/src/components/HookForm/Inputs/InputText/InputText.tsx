import { forwardRef } from "react";
import { useController, UseControllerProps } from "react-hook-form";

import ControlledInputText, {
  InputTextProps,
} from "@/components/Inputs/InputText/InputText";

const InputText = forwardRef(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ label, id, ...rest }: InputTextProps & UseControllerProps<any>, ref) => {
    const { field, fieldState } = useController(rest);

    return (
      <ControlledInputText
        id={id}
        label={label}
        errorMessage={fieldState.error?.message}
        {...field}
      />
    );
  }
);

InputText.displayName = "InputText";

export default InputText;
