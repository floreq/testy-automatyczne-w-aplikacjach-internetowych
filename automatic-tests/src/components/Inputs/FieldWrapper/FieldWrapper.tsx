import classNames from "classnames";
import { ReactNode } from "react";

export interface FieldWrapperProps {
  children: ReactNode;
  className?: string;
  errorMessage?: string;
  htmlFor?: string;
  label?: string;
}

function FieldWrapper({
  children,
  className,
  errorMessage,
  htmlFor,
  label,
}: FieldWrapperProps) {
  return (
    <div className={classNames("flex flex-col gap-1", className)}>
      <label htmlFor={htmlFor} className={"text-lg"}>
        {label}
      </label>
      {children}
      {errorMessage ? (
        <span className={"text-red-600"}>{errorMessage}</span>
      ) : null}
    </div>
  );
}

export default FieldWrapper;
