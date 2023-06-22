import React from "react";

import { Container } from "@/components/Container/Container";
import { H2 } from "@/components/Heading/H2";
import { Section } from "@/components/Section/Section";

export default function Success() {
  return (
    <Container className={"pt-14"}>
      <main>
        <Section>
          <H2 as={"h1"} className={"text-center"}>
            Rejestracja powiodła się
          </H2>
          <p className={"mx-auto mt-6 mb-6 max-w-2xl text-2xl text-center"}>
            Zapraszamy na konferencję 25 listopada 2022, na terenie Akademii
            Techniczno-Humanistycznej w Bielsku-Białej
          </p>
        </Section>
      </main>
    </Container>
  );
}
