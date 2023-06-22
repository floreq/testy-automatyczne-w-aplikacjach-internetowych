import Image from "next/image";
import React from "react";

import { Container } from "@/components/Container/Container";
import { BorderLink } from "@/components/Links/BorderLink/BorderLink";

export function SmallHero() {
  return (
    <Container
      className={
        "bg-[url('/backgrounds/small-hero.svg')] bg-[length:auto_45rem] bg-no-repeat bg-top"
      }
    >
      <header className={"grid grid-cols-2 gap-14 pt-14 pb-24"}>
        <div>
          <p className={"mb-10 max-w-xl text-2xl"}>
            25 listopada 2022, na terenie Akademii Techniczno-Humanistycznej w
            Bielsku-Białej
          </p>
          <span className={"block mt-10 mb-24 text-7xl font-bold"}>
            Konferencja Informatyczna
          </span>
          <BorderLink href={"/rejestracja"} className={"inline-block"}>
            Rejestracja
          </BorderLink>
        </div>
        <Image
          src={"/logos/bitad-logo-2022.svg"}
          width={574}
          height={347}
          alt={"Bitad Logo"}
          className={"mx-auto mb-16"}
        />
      </header>
    </Container>
  );
}
