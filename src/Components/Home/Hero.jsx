import React from "react";
import hero_img1 from "../Assets/hero-img1.png";

function Hero({ data }) {
  const { title, subtitle, description } = data;

  return (
    <section className="w-full h-full flex flex-col items-center lg:justify-start">
      <div className="flex flex-col items-center w-11/12 lg:w-3/4 text-center mb-12">
        <h1 className="text-xl lg:text-4xl font-normal">{title}</h1>
        <h1 className="text-3xl lg:text-7xl my-2 lg:my-6">{subtitle}</h1>
        <p className="text-sm lg:text-lg lg:w-3/5 my-4 ">{description}</p>
      </div>
      <div className="flex justify-center relative w-4/5 lg:w-3/6">
        <img src={hero_img1} alt="Hero Image1" className="shadow-2xl rounded" />
      </div>
    </section>
  );
}

export default Hero;
