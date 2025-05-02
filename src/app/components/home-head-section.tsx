import React from "react";
import Image from "next/image";
// import HeadCoffee from ""
import CoffeeCup from "/coffee-cup.png";

const HomeHeadSection = () => {
  return (
    <div className="mt-40 flex flex-col items-center justify-center">
      <div className="">
        <h1 className="border-t border-b py-2 text-2xl text-black">
          Kozy Cafe
        </h1>
        <p className="text-center">hello world</p>
      </div>
      <div className="flex jucstify-between gap-x-4 mt-10">
        <Image
          src={"/head-coffee.png"}
          alt="head-coffee"
          width={300}
          height={300}
          className="hidden md:block"
        />
        <Image
          src={"/coffee-cup.png"}
          alt="head-coffee"
          width={300}
          height={300}
        />
        <Image
          src={"/head-coffee.png"}
          alt="head-coffee"
          width={300}
          height={300}
          className="hidden md:block"
        />
      </div>
    </div>
  );
};

export default HomeHeadSection;
