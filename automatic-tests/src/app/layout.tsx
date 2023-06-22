import "./globals.css";

import React from "react";

import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";

export const metadata = {
  title: "Konferencja Beskid IT Academic Day",
  description:
    "Przez pandemię ominęła nas rok temu nauka i dobra zabawa, więc tym bardziej inkrementacyjna edycja 2020++ konferencji jest wyjątkowa. Powracamy jeszcze bardziej zmotywowani do działania przy organizacji Beskid IT Academic Day (Bitad) na Akademii Techniczno-Humanistycznej w Bielsku-Białej. Zadbaliśmy, aby każdy uczestnik wyniósł z tego dnia ogromne pokłady wiedzy oraz motywacji do dalszego rozwijania się, poprzez liczne warsztaty oraz wykłady. Dbamy również aby spędzony czas z nami był jak najlepiej spożytkowany.",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo192.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={"text-black-900"}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
