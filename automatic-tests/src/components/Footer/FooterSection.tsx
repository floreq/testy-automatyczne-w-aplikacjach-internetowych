import React from "react";

export function FooterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <span className={"block mb-4 text-2xl"}>{title}</span>
      {children}
    </div>
  );
}
