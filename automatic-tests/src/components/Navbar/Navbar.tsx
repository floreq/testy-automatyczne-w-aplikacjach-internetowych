import Image from "next/image";
import React from "react";

import { Container } from "@/components/Container/Container";
import { Link } from "@/components/Links/Link/Link";

export function Navbar() {
  return (
    <Container className={"bg-white"}>
      <nav className={"flex items-center justify-between gap-8 py-4"}>
        <div className={"flex gap-8"}>
          <Link href={"/"}>
            <Image
              src={"/logos/reset-logo-red.svg"}
              width={109}
              height={43}
              alt={"Reset Logo"}
            />
          </Link>
          <Link href={"https://www.ath.bielsko.pl/"} target={"_blank"}>
            <Image
              src={"/logos/ath-logo.svg"}
              width={140}
              height={43}
              alt={"ATH Logo"}
            />
          </Link>
        </div>
        <ul className={"flex gap-6 text-lg"}>
          <li>
            <Link href={"/"}>O konferencji</Link>
          </li>
          <li>
            <Link href={"/agenda"}>Agenda</Link>
          </li>
          <li>
            <Link href={"/rejestracja"}>Rejestracja</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
