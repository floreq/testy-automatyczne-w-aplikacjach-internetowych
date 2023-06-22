import classNames from "classnames";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  classNameContent?: string;
  className?: string;
}

export function Container({
  children,
  classNameContent,
  className,
  ...rest
}: ContainerProps) {
  return (
    <div className={className} {...rest}>
      <div
        className={classNames("mx-auto px-4 max-w-screen-xl", classNameContent)}
      >
        {children}
      </div>
    </div>
  );
}
