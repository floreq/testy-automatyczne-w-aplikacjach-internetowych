import classNames from "classnames";
import React from "react";
import { useForm } from "react-hook-form";

import InputText from "@/components/HookForm/Inputs/InputText/InputText";
import Select from "@/components/HookForm/Inputs/Select/Select";
import { Link } from "@/components/Links/Link/Link";

export const errorMessages = {
  REQUIRED: "Pole wymagana",
  NOT_EMAIL: "Podaj poprawny email",
};

export interface RegistrationFormProps {
  className?: string;
  onValidSubmit?: ({}: FormValues) => void;
}

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  workshop: string | undefined;
};
function RegistrationForm({ className, onValidSubmit }: RegistrationFormProps) {
  const { register, control, handleSubmit } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    onValidSubmit?.(data);
  };

  return (
    <form
      className={classNames("flex flex-col gap-2", className)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={"grid grid-cols-2 gap-4"}>
        <InputText
          label={"Imię"}
          control={control}
          {...register("firstName", { required: errorMessages.REQUIRED })}
        />
        <InputText
          label={"Nazwisko"}
          control={control}
          {...register("lastName", { required: errorMessages.REQUIRED })}
        />
      </div>
      <InputText
        label={"Adres e-mail"}
        control={control}
        {...register("email", {
          required: errorMessages.REQUIRED,
          pattern: {
            value:
              /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])/,
            message: errorMessages.NOT_EMAIL,
          },
        })}
      />
      <Select
        label={"Opcjonalny zapis na warsztaty"}
        options={[
          { label: "Warsztat 1", value: "workshop-1" },
          { label: "Warsztat 2", value: "workshop-2" },
          { label: "Warsztat 3", value: "workshop-3" },
        ]}
        control={control}
        {...register("workshop")}
      />
      <p className={"my-5 text-lg"}>
        Rejestrując się akceptujesz <Link href={"/"}>regulamin</Link>.
      </p>
      <button
        type={"submit"}
        className={
          "border-2 border-current rounded-lg px-4 py-1 max-w-fit bg-white text-lg"
        }
      >
        Zapisz się
      </button>
    </form>
  );
}

export default RegistrationForm;
