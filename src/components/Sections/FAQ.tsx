"use client";
import React from "react";
import Container from "../common/Col";
import Col from "../common/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type Props = {};

const FAQ = (props: Props) => {
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
          colEnd={[24, 24]}
          className="mt-[100px] h-[300px]"
        >
          <Swiper slidesPerView={4} spaceBetween={30} className="mySwiper">
            <SwiperSlide>1</SwiperSlide>
            <SwiperSlide>2</SwiperSlide>
            <SwiperSlide>3</SwiperSlide>
            <SwiperSlide>4</SwiperSlide>
          </Swiper>
        </Col>
      </Container>
    </section>
  );
};

export default FAQ;
