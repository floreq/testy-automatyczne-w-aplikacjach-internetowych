import classNames from "classnames";
import React, { ElementType } from "react";

export function H2({
  children,
  className,
  as: Tag = "h2",
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement> & { as?: ElementType }) {
  return (
    <Tag className={classNames("mb-6 text-5xl font-bold", className)} {...rest}>
      {children}
    </Tag>
  );
}
