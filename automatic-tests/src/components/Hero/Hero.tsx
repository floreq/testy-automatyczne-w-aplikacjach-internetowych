import Image from "next/image";
import React from "react";

import { Container } from "@/components/Container/Container";
import { BorderLink } from "@/components/Links/BorderLink/BorderLink";

export function Hero({}) {
  return (
    <Container
      className={
        "bg-[url('/backgrounds/hero.svg')] bg-[length:auto_760px] bg-no-repeat bg-top"
      }
      classNameContent={"pt-14 pb-24"}
    >
      <header className={"text-center"}>
        <Image
          src={"/logos/bitad-logo-2022.svg"}
          width={574}
          height={347}
          alt={"Bitad Logo"}
          className={"mx-auto mb-16"}
        />
        <p className={"mx-auto mt-16 mb-10 max-w-xl text-2xl"}>
          25 listopada 2022, na terenie Akademii Techniczno-Humanistycznej w
          Bielsku-Białej
        </p>
        <h1 className={"mt-10 mb-24 text-7xl font-bold"}>
          Konferencja Informatyczna
        </h1>
        <BorderLink href={"/rejestracja"}>Rejestracja</BorderLink>
      </header>
    </Container>
  );
}
