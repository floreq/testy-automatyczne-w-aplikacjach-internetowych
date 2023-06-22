import React from "react";

import { Container } from "@/components/Container/Container";
import { Section } from "@/components/Section/Section";

import { EventCard } from "../../components/EventCard/EventCard";
import { SmallHero } from "../../components/SmallHero/SmallHero";

export default function Agenda() {
  return (
    <div>
      <SmallHero />
      <main>
        <Container>
          <h1 className={"mt-8 text-center text-5xl font-bold"}>Agenda</h1>
          <Section>
            <h2 className={"mb-4 text-3xl"}>Wykłady</h2>
            <div className={"grid grid-cols-4 gap-8"}>
              <EventCard
                title={"Rejestracja"}
                location={"L128"}
                speaker={{
                  color: "red",
                  suffix: "Reset",
                  name: "Organizatorzy",
                  image: "/images/default-picture.png",
                }}
                time={"09:00-09:20"}
              />
              <EventCard
                title={"Rejestracja"}
                location={"L128"}
                speaker={{
                  color: "red",
                  suffix: "Reset",
                  name: "Organizatorzy",
                  image: "/images/default-picture.png",
                }}
                time={"09:00-09:20"}
              />
              <EventCard
                title={"Rejestracja"}
                location={"L128"}
                speaker={{
                  color: "red",
                  suffix: "Reset",
                  name: "Organizatorzy",
                  image: "/images/default-picture.png",
                }}
                time={"09:00-09:20"}
              />
              <EventCard
                title={"Rejestracja"}
                location={"L128"}
                speaker={{
                  color: "red",
                  suffix: "Reset",
                  name: "Organizatorzy",
                  image: "/images/default-picture.png",
                }}
                time={"09:00-09:20"}
              />
              <EventCard
                title={"Rejestracja"}
                location={"L128"}
                speaker={{
                  color: "red",
                  suffix: "Reset",
                  name: "Organizatorzy",
                  image: "/images/default-picture.png",
                }}
                time={"09:00-09:20"}
              />
              <EventCard
                title={"Rejestracja"}
                location={"L128"}
                speaker={{
                  color: "red",
                  suffix: "Reset",
                  name: "Organizatorzy",
                  image: "/images/default-picture.png",
                }}
                time={"09:00-09:20"}
              />
              <EventCard
                title={"Rejestracja"}
                location={"L128"}
                speaker={{
                  color: "red",
                  suffix: "Reset",
                  name: "Organizatorzy",
                  image: "/images/default-picture.png",
                }}
                time={"09:00-09:20"}
              />
            </div>
          </Section>
          <Section>
            <h2 className={"mb-4 text-3xl"}>Warsztaty</h2>
            <div className={"grid grid-cols-4 gap-8"}>
              <EventCard
                title={"Rejestracja"}
                location={"L128"}
                speaker={{
                  color: "red",
                  suffix: "Reset",
                  name: "Organizatorzy",
                  image: "/images/default-picture.png",
                }}
                time={"09:00-09:20"}
              />
              <EventCard
                title={"Rejestracja"}
                location={"L128"}
                speaker={{
                  color: "red",
                  suffix: "Reset",
                  name: "Organizatorzy",
                  image: "/images/default-picture.png",
                }}
                time={"09:00-09:20"}
              />
              <EventCard
                title={"Rejestracja"}
                location={"L128"}
                speaker={{
                  color: "red",
                  suffix: "Reset",
                  name: "Organizatorzy",
                  image: "/images/default-picture.png",
                }}
                time={"09:00-09:20"}
              />
              <EventCard
                title={"Rejestracja"}
                location={"L128"}
                speaker={{
                  color: "red",
                  suffix: "Reset",
                  name: "Organizatorzy",
                  image: "/images/default-picture.png",
                }}
                time={"09:00-09:20"}
              />
              <EventCard
                title={"Rejestracja"}
                location={"L128"}
                speaker={{
                  color: "red",
                  suffix: "Reset",
                  name: "Organizatorzy",
                  image: "/images/default-picture.png",
                }}
                time={"09:00-09:20"}
              />
              <EventCard
                title={"Rejestracja"}
                location={"L128"}
                speaker={{
                  color: "red",
                  suffix: "Reset",
                  name: "Organizatorzy",
                  image: "/images/default-picture.png",
                }}
                time={"09:00-09:20"}
              />
              <EventCard
                title={"Rejestracja"}
                location={"L128"}
                speaker={{
                  color: "red",
                  suffix: "Reset",
                  name: "Organizatorzy",
                  image: "/images/default-picture.png",
                }}
                time={"09:00-09:20"}
              />
            </div>
          </Section>
        </Container>
      </main>
    </div>
  );
}
