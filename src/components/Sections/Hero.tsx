"use client";
import React, { useEffect, useRef } from "react";
import Col from "../common/Container";
import Container from "../common/Col";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import raspBerry from "@/../public/images/raspberry.jpg";
import karolina from "@/../public/images/karolina.jpg";
import Image from "next/image";
import { gsap } from "gsap";
import styles from "@/styles/hero.module.css";
import TextAnimation from "../common/TextAnimation";

const Hero = () => {
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const imageWrapperRefs = useRef<HTMLDivElement[]>([]);
  const imageItemRefs = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    // GSAP animations for image wrappers and items
    imageWrapperRefs.current.forEach((wrapper, index) => {
      const image = imageItemRefs.current[index];

      if (wrapper && image) {
        // Animate the wrapper
        gsap.to(wrapper, {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 2,
          ease: "expo.out",
          delay: 0.5,
        });

        // Animate the image inside the wrapper
        gsap.fromTo(
          image,
          {
            scale: 1.5,
          },
          {
            scale: 1,
            duration: 2,
            delay: 0.4,
            ease: "expo.out",
          }
        );
      }
    });
  }, []);

  // Helper function to set refs in the array
  const addToRefs = (refArray: any, el: any) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };

  return (
    <section
      id="hero-container"
      className="w-screen h-[30vh] md:h-[45vh] xl:h-[70vh] flex items-center"
    >
      <Container className="flex items-center">
        <Col colStart={[2, 2, 2, 2]} colEnd={[27, 27, 14, 14]}>
          <TextAnimation
            text="COACH BIEN ÊTRE NUTRITION ET SPORT"
            splitType="word"
            className="text-[3rem] sm:text-2xl md:text-2xl lg:text-3xl font-serif leading-[100%]"
            as={"h3"}
          />

          <Link
            href={"#"}
            className="bg-none border border-accent text-accent px-2 py-1 mt-4 max-w-[174px] text-center rounded-full flex items-center justify-center"
          >
            En savoir plus
          </Link>
        </Col>
        <Col
          colStart={[1, 1, 15, 15]}
          colEnd={[26, 26, 26, 26]}
          className=" hidden md:block xl:block xxl:block"
        >
          <div className="flex w-full gap-5 items-center">
            <div
              className={twMerge(
                "w-full md:max-w-[311px] md:h-[508px] sm:h-[300px] sm:max-w-[200px] relative",
                styles.imageWrapper
              )}
              ref={(el) => addToRefs(imageWrapperRefs, el)}
            >
              <Image
                src={raspBerry.src}
                alt="Raspberry"
                fill
                className="object-cover"
                ref={(el) => addToRefs(imageItemRefs, el)}
              />
            </div>

            <div
              className={twMerge(
                "w-full md:max-w-[311px] md:h-[508px] sm:h-[300px] sm:max-w-[200px] relative mt-[200px]",
                styles.imageWrapper
              )}
              ref={(el) => addToRefs(imageWrapperRefs, el)}
            >
              <Image
                src={karolina.src}
                alt="Karolina"
                fill
                className="object-cover"
                ref={(el) => addToRefs(imageItemRefs, el)}
              />
            </div>
          </div>
        </Col>
      </Container>
    </section>
  );
};

export default Hero;
