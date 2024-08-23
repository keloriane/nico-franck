import React from "react";

const Card = ({
  title,
  number,
  description,
}: {
  title: string;
  number: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col gap-2 items-start justify-start w-full max-w-[613px] m-auto">
      <div className="flex text-accent text-lg font-serif text-xl flex-col items-start justify-start ">
        <span>{number} /</span>
        <h4 className="font-serif">{title}</h4>
      </div>
      <p
        className="font-inter xl:text-xl  md:text-lg text-lg font-[300]"
        style={{ lineHeight: "39px" }}
      >
        {description}
      </p>
    </div>
  );
};

export default Card;
