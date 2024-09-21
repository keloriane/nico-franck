"use client";
import React from "react";
import Container from "../common/Col";
import Col from "../common/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ParallaxSlider from "../common/Slider";
import Image1 from "@/../public/images/karolina.jpg";
import Image2 from "@/../public/images/raspberry.jpg";
import Image3 from "@/../public/images/fruits.jpg";
import Image4 from "@/../public/images/karolina.jpg";
import Image5 from "@/../public/images/raspberry.jpg";
import Image6 from "@/../public/images/fruits.jpg";

type Props = {};

const FAQ = (props: Props) => {
  const imagesArray = [Image1, Image2, Image3, Image4, Image5, Image6];

  return (
    <section className="bg-mainLight text-mainGreen pt-[150px]">
      <Container>
        <Col colStart={[2, 2, 3, 3]} colEnd={[25, 25, 27, 27]}>
          <h2 className="text-[3.2rem] sm:text-[3.5rem] md:text-3xl xl:text-3xl  font-serif leading-[100%]">
            Pourquoi travailler <br /> avec moi ?
          </h2>
        </Col>
        <Col
          colStart={[2, 2, 4, 4]}
          colEnd={[27, 27, 24, 24]}
          className="mt-[100px]"
        >
          <p className="text-xl font-serif leading-[39px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor
          </p>
        </Col>
        <Col
          colStart={[4, 4]}
          colEnd={[27, 27]}
          className="mt-[100px] h-[300px]"
        >
          <ParallaxSlider />
        </Col>
      </Container>
    </section>
  );
};

export default FAQ;
