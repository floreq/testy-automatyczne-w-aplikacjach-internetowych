import Image from "next/image";
import React from "react";

import { Card } from "@/components/Card/Card";

interface PromotionalCardProps {
  title: string;
  description: string;
  icon: { src: string; width: number; height: number; alt: string };
}

export function PromotionalCard({
  title,
  description,
  icon,
}: PromotionalCardProps) {
  return (
    <Card>
      <Image {...icon} alt={icon.alt} className={"m-auto"} />
      <span className={"block my-6 text-3xl text-center"}>{title}</span>
      <p className={"mb-4 text-base text-center"}>{description}</p>
    </Card>
  );
}
