import React from "react";
import Container from "../common/Col";
import Col from "../common/Container";

const Contact = () => {
  return (
    <section className="w-full">
      <Container>
        <Col colStart={3} colEnd={10}>
          <h2 className="">Prennons contact</h2>
        </Col>
      </Container>
      <form className="mt-[100px]">
        <Container className="gap-[24px]">
          <Col colStart={3} colEnd={10}>
            <label htmlFor="name">
              <p className="text-[1.5rem]">Nom</p>
              <input
                type="text"
                name="name"
                placeholder="nom"
                className="w-full"
              />
            </label>
          </Col>
          <Col colStart={14} colEnd={21}>
            <label htmlFor="lastName">
              <p className="text-[1.5rem]">Prénom</p>
              <input
                type="text"
                name="lastName"
                placeholder="nom"
                className="w-full"
              />
            </label>
          </Col>
          <Col colStart={3} colEnd={14}>
            <label htmlFor="name">
              <p className="text-[1.5rem]">Sujet</p>
              <input
                type="text"
                name="subject"
                placeholder="subject"
                className="w-full"
              />
            </label>
          </Col>
          <Col colStart={3} colEnd={25}>
            <label htmlFor="name">
              <p className="text-[1.5rem]">Nom</p>
              <textarea
                name="name"
                placeholder="nom"
                className="w-full h-[200px]"
              />
            </label>
          </Col>
        </Container>
      </form>
    </section>
  );
};

export default Contact;
