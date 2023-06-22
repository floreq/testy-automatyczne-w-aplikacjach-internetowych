import classNames from "classnames";
import React from "react";

export function Section({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section className={classNames("pt-14 pb-24", className)} {...rest}>
      {children}
    </section>
  );
}
