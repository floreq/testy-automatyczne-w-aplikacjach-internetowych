import classNames from "classnames";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import React from "react";

export type LinkProps = NextLinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function Link({ children, className, ...rest }: LinkProps) {
  return (
    <NextLink
      {...rest}
      className={classNames(
        "hover:text-accent-600 focus:text-accent-600 active:text-accent-600",
        className
      )}
    >
      {children}
    </NextLink>
  );
}
