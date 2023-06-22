import classNames from "classnames";
import React from "react";

export function Card({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={classNames("p-8 shadow-2xl bg-white", className)} {...rest}>
      {children}
    </div>
  );
}
