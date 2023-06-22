import classNames from "classnames";
import React from "react";

import { Link, LinkProps } from "@/components/Links/Link/Link";

export function BorderLink({ children, className, ...rest }: LinkProps) {
  return (
    <Link
      className={classNames(
        "py-1 px-8 border-2 border-current rounded-xl text-accent-600 text-2xl font-bold",
        className
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}
