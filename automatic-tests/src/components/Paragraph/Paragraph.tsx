import classNames from "classnames";
import React from "react";

export function Paragraph({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={classNames(" my-4 text-lg leading-9 max-w-4xl", className)}>
      {children}
    </p>
  );
}
