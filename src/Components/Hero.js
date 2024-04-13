import React from "react";
import { Button } from "@material-tailwind/react";
import hero_img1 from "./Assets/hero-img1.png";

function Hero({ data }) {
  const { title, subtitle, description, buttonText } = data;

  return (
    <section className="w-full h-full flex flex-col items-center lg:justify-start pb-[15%] relative bg-[rgba(200,228,178,0.4)] z-[10]">
      <div className="flex flex-col items-center w-11/12 lg:w-3/4 text-center mt-32 mb-12">
        <h1 className="text-xl lg:text-4xl font-normal">{title}</h1>
        <h1 className="text-3xl lg:text-7xl my-2 lg:my-6">{subtitle}</h1>
        <p className="text-sm lg:text-lg lg:w-3/5 my-4 ">{description}</p>
        <Button className="mt-4 hover:bg-white hover:text-black hover:border-black">
          {buttonText}
        </Button>
      </div>
      <div className="flex justify-center relative w-4/5 lg:w-3/6">
        <img src={hero_img1} alt="Hero Image1" className="shadow-2xl rounded" />
        {/* <div className="flex place-center absolute top-[63%] w-[25%] right-[85%] bg-white p-[4%] rounded-lg shadow-lg">
          <img src={hero_img2} alt="Hero Image2" className="" />
        </div>
        <div className="flex place-center absolute top-[32%] w-2/6 left-[75%] bg-white p-[4%] rounded-lg shadow-lg">
          <img src={hero_img3} alt="Hero Image3" className="" />
        </div> */}
      </div>
    </section>
  );
}

export default Hero;
