import Image from "next/image";
import React from "react";
import { User } from "lucide-react";
const PopularDrinkSection = () => {
  return (
    <div className="text-center my-50 ">
      <h1 className="text-2xl">Our Popular Drink</h1>
      <div className="flex items-center justify-center text-around gap-3 mt-10">
      <div className="space-y-20">
          <div className="ps-10 text-start w-[300px] flex justify-center ">
            <User width={50} height={50} />
            <div>
              <h1 className="text-lg">Lorem ipsum dolor</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam, obcaecati consectetur?{" "}
              </p>
            </div>
          </div>
          <div className=" text-start w-[300px] flex justify-center ">
            <User width={50} height={50} />
            <div>
              <h1 className="text-lg">Lorem ipsum dolor</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam, obcaecati consectetur?{" "}
              </p>
            </div>
          </div>
          <div className="ps-10 text-start w-[300px] flex justify-center ">
            <User width={50} height={50} />
            <div>
              <h1 className="text-lg">Lorem ipsum dolor</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam, obcaecati consectetur?{" "}
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image src={"/popular-drink.png"} width={200} height={100} alt="" />
        </div>
        <div className="space-y-20">
          <div className=" text-start w-[300px] flex justify-center ">
            <User width={50} height={50} />
            <div>
              <h1 className="text-lg">Lorem ipsum dolor</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam, obcaecati consectetur?{" "}
              </p>
            </div>
          </div>
          <div className="ps-10 text-start w-[300px] flex justify-center ">
            <User width={50} height={50} />
            <div>
              <h1 className="text-lg">Lorem ipsum dolor</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam, obcaecati consectetur?{" "}
              </p>
            </div>
          </div>
          <div className="text-start w-[300px] flex justify-center ">
            <User width={50} height={50} />
            <div>
              <h1 className="text-lg">Lorem ipsum dolor</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam, obcaecati consectetur?{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDrinkSection;
