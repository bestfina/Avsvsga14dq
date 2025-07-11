"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const PartnersScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const technologies = [
    "/assets/icons/meteorex.svg",
    "https://denissanko.com/wp-content/themes/Sanko/land-strategy/images/common/logo.svg",
    "/assets/icons/bisovet.svg",
    "https://www.zolotarevka.ru/public/icons/logo-black.svg",
    "https://runabeton.ru/wp-content/themes/twentytwentyone/img/logo.svg",
    "https://cdn.tbank.ru/static/pfa-multimedia/images/e888870a-f15a-4684-968e-256ad5694e46.svg",
    "/assets/icons/TAXIPRO.svg",
    "/assets/images/parthers/klikmi.png",
    "https://bz-titan.ru/wp-content/themes/titan/img/logo.svg",
  ];
  useEffect(() => {
    if (scrollRef.current) {
      const element = scrollRef.current;
      const width = element.scrollWidth / 4;

      gsap.fromTo(
        element,
        { x: 0 },
        {
          x: -width,
          repeat: -1,
          duration: 20,
          ease: "linear",
        }
      );
    }
  }, []);
  return (
    <div className="relative overflow-hidden w-full">
      <div ref={scrollRef} className="flex gap-md sm:gap-xs sm:w-36 sm:h-16" style={{ display: "inline-flex" }}>
        {[...technologies, ...technologies].map((tech, index) => (
          <Image key={index} className="object-contain" alt="" src={tech} width={200} height={80}></Image>
        ))}
      </div>
    </div>
  );
};

export default PartnersScroll;
