"use client";
import React from "react";
import Col from "../common/Container";
import Container from "../common/Col";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
  return (
    <section className="pt-[600px]">
      <Container className="w-[90vw] m-auto">
        <Col colStart={3}>
          <h2 className="text-accent text-3xl">Témoignages</h2>
        </Col>
        <Col colStart={4}>
          <Swiper slidesPerView={2} spaceBetween={30}>
            <SwiperSlide className="testimonials-item">
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                esse laborum enim, sapiente voluptate totam voluptates quo
                aperiam explicabo rem facere incidunt exercitationem eveniet,
                natus unde possimus sequi, ea consectetur?
              </p>
              <div className="flex">
                <p>
                  <em>Kevin </em>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="testimonials-item">
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                esse laborum enim, sapiente voluptate totam voluptates quo
                aperiam explicabo rem facere incidunt exercitationem eveniet,
                natus unde possimus sequi, ea consectetur?
              </p>
              <div className="flex">
                <p>
                  <em>Junior Silva Braga</em>
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </Col>
      </Container>
    </section>
  );
};

export default Testimonial;
