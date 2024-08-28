import React from "react";
import Card from "../UI/Card";
import circles from "@/../public/images/circles.svg";
import Image from "next/image";

const process = [
  {
    title: "Consultation",
    number: "01",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
  },
  {
    title: "Planification",
    number: "02",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
  },
  {
    title: "Suivi",
    number: "03",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
  },
  {
    title: "Résultats",
    number: "04",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
  },
];

const Process = () => {
  return (
    <div className=" mb-[80px] mt-[200px] min-h-[80vh]  w-[95%] m-auto relative">
      <div className="grid  sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 sm:grid-rows-4 md:grid-rows-2 xl:grid-rows-2 items-start justify-center gap-[100px]">
        {process.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            number={item.number}
            description={item.description}
          />
        ))}
      </div>
      <div className="w-full max-w-[1200px] h-full absolute top-0 left-[15%]">
        <Image
          src={circles.src}
          alt="Circles"
          className="absolute bottom-0 left-1"
          fill
        />
      </div>
    </div>
  );
};

export default Process;
