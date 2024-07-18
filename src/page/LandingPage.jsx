import React from "react";
import Button from "../moleculs/Button";

const LandingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div id="herosection" className="h-screen relative pl-10">
        <img
          src="/hero.png"
          alt="hero"
          className="absolute right-0 bottom-0 h-[29rem] w-[39rem]"
        />
        <div className="relative flex flex-col text-white w-1/2 h-full justify-center">
          <h1 className="flex text-7xl font-semibold">Moon<section className="text-Secondary">Tesse’</section></h1>
          <h1 className=" flex text-7xl font-semibold ml-12"><section className="text-Secondary">Steak</section> House</h1>
          <p className="text-lg mt-5 mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
            quam soluta consectetur magni cumque ducimus ex obcaecati temporibus
            earum, commodi magnam! Corrupti rem quaerat itaque voluptatem fugiat
            mollitia iure perspiciatis?
          </p>
          <Button className=" rounded-tl-xl rounded-br-xl bg-Secondary w-fit px-16 py-1 hover:scale-105">Login</Button> 
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
