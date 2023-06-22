import Image from "next/image";
import React from "react";

import { Card } from "@/components/Card/Card";

export function EventCard({
  location,
  time,
  title,
  speaker,
}: {
  location: string;
  time: string;
  title: string;
  speaker: { name: string; suffix: string; color: string; image: string };
}) {
  return (
    <Card className={"flex flex-col gap-4 p-4"}>
      <div className={"flex"}>
        <span>{location}</span>
        <span className={"flex-auto text-center"}>{time}</span>
      </div>
      <strong className={"text-lg"}>{title}</strong>
      <div
        className={
          "flex items-center gap-1 -mr-4 rounded-l-full p-1 bg-red-200"
        }
      >
        <Image
          src={speaker.image}
          width={44}
          height={44}
          alt={""}
          className={"border-2 border-red-600 rounded-full w-12 h-12"}
        />
        <div>
          <span className={"block text-lg"}>{speaker.name}</span>
          <span className={"block"}>{speaker.suffix}</span>
        </div>
      </div>
    </Card>
  );
}
