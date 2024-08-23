"use client";
import React, { useEffect, useRef } from "react";
import MarqueeImage from "@/../public/images/marquee.svg";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Marquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    const marqueeWidth = marqueeElement?.scrollWidth;

    if (!marqueeElement || !marqueeWidth) return;
    gsap.to(marqueeElement, {
      x: () => -marqueeElement.scrollWidth + window.innerWidth + 600,
      ease: "easeIn",
      scrollTrigger: {
        trigger: marqueeElement,
        start: "top+-=200px bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="w-full relative h-[200px] mt-[200px] overflow-hidden hidden md:block">
      <div ref={marqueeRef} className="flex gap-[30px]">
        <Image
          src={MarqueeImage.src}
          alt="Marquee"
          width={1500}
          height={200}
          className="object-cover"
        />
        <Image
          src={MarqueeImage.src}
          alt="Marquee"
          width={1500}
          height={200}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Marquee;
