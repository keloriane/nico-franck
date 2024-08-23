"use client";
import Hero from "@/components/Sections/Hero";

import { Darker_Grotesque, Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import About from "@/components/Sections/About";
import Process from "@/components/Sections/Process";
import Marquee from "@/components/Sections/Marquee";
import FAQ from "@/components/Sections/FAQ";
import Testimonial from "@/components/Sections/Testimonial";

const grotesque = Darker_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--grotesque",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export default function Home() {
  return (
    <main
      className={twMerge(
        "bg-mainGreen text-mainLight",
        inter.className,
        grotesque.variable
      )}
    >
      <Hero />
      <About />
      <Marquee />
      <Process />
      <FAQ />
      <Testimonial />
    </main>
  );
}
