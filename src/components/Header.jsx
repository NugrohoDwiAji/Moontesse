import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../moleculs/Navbar";
import Button from "../moleculs/Button";

const Header = () => {
  return (
    <div className="h-24">
      <div className="flex h-24 bg-Primary items-center px-5 justify-between border-b-2 fixed z-50 right-0 left-0 top-0">
        <div className="flex gap-5 items-center">
          <img src="/Logo.png" alt="Logo" className="h-[4rem]" />
          <Navbar />
        </div>
        <div className="flex gap-2">
          <Button>Login</Button>
          <Button className="bg-white text-Secondary rounded-md px-4 py-1 hover:scale-105">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
