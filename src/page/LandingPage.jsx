import React from "react";
import Button from "../moleculs/Button";
import ScrolSteak from "../components/ScrolSteak";
import CardOrderLanding from "../components/CardOrderLanding";

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
          <h1 className="flex text-7xl font-semibold">
            Moon<section className="text-Secondary">Tesse’</section>
          </h1>
          <h1 className=" flex text-7xl font-semibold ml-12">
            <section className="text-Secondary">Steak</section> House
          </h1>
          <p className="text-lg mt-5 mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
            quam soluta consectetur magni cumque ducimus ex obcaecati temporibus
            earum, commodi magnam! Corrupti rem quaerat itaque voluptatem fugiat
            mollitia iure perspiciatis?
          </p>
          <Button className=" rounded-tl-xl rounded-br-xl bg-Secondary w-fit px-16 py-1 hover:scale-105">
            Login
          </Button>
        </div>
      </div>
      {/* Menu */}
      <div className="p-5">
        <h1 className="text-center text-ne50 text-6xl font-bold mb-10">
          Lorem ipsum dolor sit amet
        </h1>
        <p className="text-center w-[34rem] m-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quae
          explicabo esse voluptatum eaque, voluptas voluptate! Voluptates
          numquam dignissimos sequi!
        </p>
        <ScrolSteak />
      </div>
      {/* order */}
      <div
        style={{
          backgroundImage: "url('/bg-menu.jpeg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-[47rem]"
      >
        <div className="h-[47rem] flex justify-between w-full backdrop-brightness-50 bg-white/15">
          <div className="ml-10">
            <h1 className="text-3xl text-white font-bold pt-10">
              Lorem ipsum dolor sit amet
            </h1>
            <img src="/ilustrasi1.png" alt="" className="ml-10" />
            <h2 className="text-xl text-white font-semibold text-center w-fit pl-24 mt-5">
              Lorem ipsum dolor sit
            </h2>
            <p className="w-96 text-center text-white pl-7 mt-5 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              vel sed cupiditate dolorem culpa eum quibusdam repudiandae
              consectetur quasi quis?
            </p>
          </div>
          <div className="items-center flex flex-col gap-5 ">
            <p className="w-96 pt-10 text-white pl-10 pb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              reiciendis ea repellat consequuntur. Rerum ut neque autem!
              Voluptatibus, eaque ipsa.
            </p>
            <CardOrderLanding
              color={"bg-Secondary"}
              title={"Lorem ipsum dolor sit"}
              description={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus deserunt beatae eligendi, voluptatibus corrupti corporis! Cupiditate laborum asperiores incidunt ipsum!"
              }
            />
            <CardOrderLanding
              color={"bg-Secondary-brief22"}
              title={"Lorem ipsum dolor sit"}
              description={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus deserunt beatae eligendi, voluptatibus corrupti corporis! Cupiditate laborum asperiores incidunt ipsum!"
              }
            />
            <CardOrderLanding
              color={"bg-Secondary-brief22"}
              title={"Lorem ipsum dolor sit"}
              description={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus deserunt beatae eligendi, voluptatibus corrupti corporis! Cupiditate laborum asperiores incidunt ipsum!"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
