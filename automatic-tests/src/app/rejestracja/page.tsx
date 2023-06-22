"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

import { Container } from "@/components/Container/Container";
import { H2 } from "@/components/Heading/H2";

const RegistrationForm = dynamic(
  () => import("@/components/RegistrationForm/RegistrationForm"),
  {
    ssr: false,
  }
);

export default function Registration() {
  const router = useRouter();

  return (
    <Container className={"pt-14"}>
      <header>
        <H2 as={"h1"}>Rejestracja na konferencję</H2>
        <p className={"mt-6 mb-6 max-w-xl text-2xl"}>
          25 listopada 2022, na terenie Akademii Techniczno-Humanistycznej w
          Bielsku-Białej
        </p>
      </header>
      <main className={"grid grid-cols-3 gap-14 pb-24"}>
        <RegistrationForm
          className={"col-start-1 col-end-3"}
          onValidSubmit={() => router.push("/rejestracja/sukces")}
        />
        <Image
          src={"/logos/bitad-logo-2022.svg"}
          alt={"Bitad Logo"}
          width={373}
          height={225}
          className={"col-start-3 col-end-3"}
        />
      </main>
    </Container>
  );
}
