import React from "react";
import Button from "../moleculs/Button";

const CardOrderLanding = ({ color, title, description }) => {
  return (
    <div className={`${color} h-40 w-[40rem] rounded-l-full pl-10 flex items-center gap-5 `}>
      <div className="flex flex-col justify-center text-center w-[27em]">
        <h1 className="indent-7 text-xl text-ne50 font-semibold">
          {title}
        </h1>
        <p className="text-sm">
          {description}
        </p>
      </div>
      <Button className="bg-white h-fit  text-ne50 rounded-bl-2xl rounded-tr-2xl px-2 py-1 w-fit hover:scale-110 hover:shadow-xl">
        Order Now
      </Button>
    </div>
  );
};

export default CardOrderLanding;
