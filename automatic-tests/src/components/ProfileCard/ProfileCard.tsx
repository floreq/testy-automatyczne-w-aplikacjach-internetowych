import Image from "next/image";
import React from "react";

import { Card } from "@/components/Card/Card";

export function ProfileCard({
  imageSrc,
  namePrefix,
  name,
  description,
}: {
  imageSrc: string;
  namePrefix: string;
  name: string;
  description: string;
}) {
  return (
    <Card className={"flex flex-col gap-4"}>
      <div className={"flex gap-4 justify-center"}>
        <Image
          src={imageSrc}
          alt={""}
          width={64}
          height={64}
          className={"w-16 h-16 object-cover rounded-full"}
        />
        <div>
          <span className={"block text-base"}>{namePrefix}</span>
          <span className={"block text-2xl"}>{name}</span>
        </div>
      </div>
      <span className={"block text-base text-center"}>{description}</span>
    </Card>
  );
}
