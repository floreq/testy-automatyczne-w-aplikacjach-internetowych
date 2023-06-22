import React from "react";

import { Link } from "@/components/Links/Link/Link";

export function FooterCopyright() {
  return (
    <div className={"flex justify-between gap-6"}>
      <Link href={"/"} target={"_blank"}>
        Regulamin
      </Link>
      <span>{`© ${new Date().getFullYear()} Reset. Wszelkie prawa zastrzeżone.`}</span>
    </div>
  );
}
