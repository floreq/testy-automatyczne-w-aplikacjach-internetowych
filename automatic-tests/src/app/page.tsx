import Image from "next/image";
import React from "react";

import { Container } from "@/components/Container/Container";
import { H2 } from "@/components/Heading/H2";
import { Hero } from "@/components/Hero/Hero";
import { Paragraph } from "@/components/Paragraph/Paragraph";
import { ProfileCard } from "@/components/ProfileCard/ProfileCard";
import { PromotionalCard } from "@/components/PromotionalCardProps/PromotionalCardProps";
import { Section } from "@/components/Section/Section";

export default function Homepage() {
  return (
    <div>
      <Hero />
      <main>
        <Section>
          <Container classNameContent={"grid grid-cols-2 gap-16"}>
            <div>
              <H2>To już 11 edycja eventu…</H2>
              <Paragraph>
                Już po raz jedenasty podjęliśmy się organizacji konferencji
                Beskid IT Academic Day na Akademii Techniczno-Humanistycznej w
                Bielsku-Białej. Nieustannie staramy się rozwijać nasz event.
              </Paragraph>
              <Paragraph>
                Jak co roku zadbamy o to, aby każdy uczestnik zarówno
                profesjonalista jak i amator wyniósł z dnia konferencji ogromne
                pokłady wiedzy i motywacji do dalszego jej zgłębiania oraz miło
                spędził czas korzystając z bogatych atrakcji, które co roku
                staramy się poszerzać.
              </Paragraph>
              <Paragraph>
                Tegoroczny event - „MaszynoweLove BITAD w chmurach” nawiązywać
                będzie do tematyki Sieci, Chmur, Cyberbezpieczeństwa oraz
                Machine Learningu. BITAD to nie tylko event, gdzie można
                porozmawiać ze specjalistami z całej Polski, ale również spędzić
                mile czas korzystając z wielu różnych atrakcji.
              </Paragraph>
            </div>
            <Image
              src={"/homepage/lectures.jpg"}
              width={560}
              height={542}
              alt={"Grupa studentów siedząca w ławkach na wykładzie"}
              className={"ml-auto shadow-2xl"}
            />
          </Container>
        </Section>
        <Section
          className={
            "bg-[url('/backgrounds/accent-rectangle.svg'),url('/backgrounds/gray-rectangle.svg')] bg-[length:16rem_auto,50%_auto]"
          }
          style={{
            backgroundRepeat: "no-repeat, repeat-y",
            backgroundPosition: "0 100%, 0 0",
          }}
        >
          <Container>
            <H2 className={"text-center"}>Czekają na was*</H2>
            <Paragraph className={"text-end"}>
              *oraz wiele innych atrakcji
            </Paragraph>
            <div className={"grid grid-cols-3 gap-14 mt-14"}>
              <PromotionalCard
                icon={{
                  src: "/icons/gift.svg",
                  height: 44,
                  width: 47,
                  alt: "Prezent",
                }}
                title={"Starter packi"}
                description={
                  "Na każdego z Was po potwierdzeniu rejestracji online będzie czekała powitalna paczka w dniu konferencji."
                }
              />
              <PromotionalCard
                icon={{
                  src: "/icons/keyboard.svg",
                  height: 44,
                  width: 81,
                  alt: "Klawiatura",
                }}
                title={"Warsztaty"}
                description={
                  "Biorąc udział w warsztatach będziesz mógł w praktyce rozwinąć się w wybranym temacie pod okiem profesjonalistów."
                }
              />
              <PromotionalCard
                icon={{
                  src: "/icons/gamepad.svg",
                  height: 44,
                  width: 89,
                  alt: "Gamepad",
                }}
                title={"Gra QR Code"}
                description={
                  "Baw się z nami i zdobywaj punkty podczas udziału w prelekcjach i warsztatach. Aplikację do Gry QR na Andrioda możesz pobrać tutaj."
                }
              />
            </div>
          </Container>
        </Section>
        <Section>
          <Container classNameContent={"grid grid-cols-2 gap-16"}>
            <Image
              src={"/homepage/workshop.jpg"}
              alt={"Zajęcia w sali komputerowej"}
              width={900}
              height={537}
              className={"shadow-2xl"}
            />
            <div>
              <H2>Ciągły rozwój to nasz priorytet</H2>
              <Paragraph>
                Dbamy, aby pobyt na konferencji był dla Was ciekawym wydarzeniem
                i mile spędzonym czasem, więc oprócz dawki wiedzy w postaci
                prelekcji i warsztatów oferujemy również rozluźnienie na strefie
                gier, zjedzenie czegoś smacznego. Ponadto uczestniczenie w grze
                QR Code doda Wam szczęścia przy losowaniu nagród.
              </Paragraph>
            </div>
          </Container>
        </Section>
        <Section>
          <Container>
            <H2 className={"text-center"}>Organizatorzy</H2>
            <Paragraph className={"mx-auto text-center"}>
              Jako zespół dokładamy wszelkich starań, aby ta konferencja była
              wspólną wspaniałą przygodą pełną niesamowitych wrażeń. Dlatego
              wszystkich serdecznie zapraszamy oraz służymy pomocą.
            </Paragraph>
            <div className={"grid grid-cols-3 gap-8 mt-14"}>
              <ProfileCard
                name={"Jan Kowalski"}
                namePrefix={"dr inż."}
                description={"Opiekun koła naukowego"}
                imageSrc={"https://source.unsplash.com/random?city"}
              />
              <ProfileCard
                name={"Agata Kosak"}
                namePrefix={"dr"}
                description={"Opiekunka sekcji programistycznej"}
                imageSrc={"https://source.unsplash.com/random?night"}
              />
              <ProfileCard
                name={"Aleksander Milecki"}
                namePrefix={"Student"}
                description={"Programista"}
                imageSrc={"https://source.unsplash.com/random?day"}
              />
              <ProfileCard
                name={"Paweł Malec"}
                namePrefix={"Student"}
                description={"Programista"}
                imageSrc={"https://source.unsplash.com/random?moon"}
              />
              <ProfileCard
                name={"Karolina Krajewska"}
                namePrefix={"Student"}
                description={"Wolontariusz"}
                imageSrc={"https://source.unsplash.com/random?sea"}
              />
              <ProfileCard
                name={"Weronika Wróbel"}
                namePrefix={"Student"}
                description={"Wolontariusz"}
                imageSrc={"https://source.unsplash.com/random?space"}
              />{" "}
              <ProfileCard
                name={"Jarosław Wróbel"}
                namePrefix={"Student"}
                description={"Wolontariusz"}
                imageSrc={"https://source.unsplash.com/random?tree"}
              />
            </div>
          </Container>
        </Section>
      </main>
    </div>
  );
}
