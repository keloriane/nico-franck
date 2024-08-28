import React from "react";
import Col from "../common/Container";
import Container from "../common/Col";

const About = () => {
  return (
    <Container className="w-[90vw] m-auto sm:pt-50px md:pt-[328px] xl:pt-[228px] md:pb-[130px] xs:pb-[50px]">
      <Col colStart={[2, 2, 3, 3]} colEnd={[26, 26, 25, 25]}>
        <h3 className="text-accent sm:text-2xl md:text-[42px] font-serif font-semibold">
          Nicolas Franck
        </h3>
        <div>
          <p className="sm:text-xl md:text-2xl font-[300] ">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
            expedita suscipit ab esse excepturi? Laboriosam quibusdam facere
            consectetur, delectus repellendus quam, voluptate vero numquam porro
            incidunt rem odit at molestias!
          </p>
        </div>
      </Col>
    </Container>
  );
};

export default About;
