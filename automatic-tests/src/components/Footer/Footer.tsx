import Image from "next/image";
import React from "react";

import { Container } from "@/components/Container/Container";
import { FooterCopyright } from "@/components/Footer/FooterCopyright";
import { FooterSection } from "@/components/Footer/FooterSection";
import { Link } from "@/components/Links/Link/Link";

export function Footer() {
  return (
    <Container
      className={
        "pt-24 pb-6 bg-black-400 bg-[url('/backgrounds/gray-white.svg')] bg-[length:95rem_auto] bg-no-repeat bg-bottom"
      }
    >
      <footer className={"flex flex-col gap-16"}>
        <div className="grid grid-cols-2 gap-x-24 gap-y-10">
          <FooterSection title={"Reset"}>
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
          </FooterSection>
          <FooterSection title={"Partnerzy"}>
            <ul className={"grid grid-cols-3 gap-8"}>
              <li>
                <Link href={"https://ath.bielsko.pl/"} target={"_blank"}>
                  <Image
                    src={"/logos/ath-logo.svg"}
                    alt={"FabLab logo"}
                    width={213}
                    height={66}
                  />
                </Link>
              </li>
            </ul>
          </FooterSection>
          <FooterSection title={"Dane kontaktowe"}>
            <p>
              Reset, <br />
              Willowa 2, <br />
              Bielsko-Biała 43-300
            </p>
            <Link href={"mailto:reset@ath.bielsko.pl"} className={"block mt-8"}>
              reset@ath.bielsko.pl
            </Link>
          </FooterSection>
          <FooterSection title={"Poznaj nas bliżej!"}>
            <p>Znajdziesz nas również w mediach społecznościowych.</p>
            <ul className={"flex gap-4 mt-4"}>
              <li>
                <Link href={"https://www.facebook.com/ResetATH"}>
                  <Image
                    src={"/icons/fb.svg"}
                    alt={"Facebook koła naukowego Reset"}
                    width={32}
                    height={32}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href={
                    "https://www.youtube.com/channel/UCBiN0uFfdjb-Q0gtqqwCgWw"
                  }
                >
                  <Image
                    src={"/icons/yt.svg"}
                    alt={"YouTube koła naukowego Reset"}
                    width={32}
                    height={32}
                  />
                </Link>
              </li>
              <li>
                <Link href={"https://twitter.com/resetath"}>
                  <Image
                    src={"/icons/tw.svg"}
                    alt={"Twitter koła naukowego Reset"}
                    width={32}
                    height={32}
                  />
                </Link>
              </li>
            </ul>
          </FooterSection>
        </div>
        <FooterCopyright />
      </footer>
    </Container>
  );
}
