import React from "react";
import { Button } from "@material-tailwind/react";

function Features({ featuresData }) {
  const { title, subtitle, description, buttonLabel, image1Src, image2Src } =
    featuresData;
  return (
    <section className="flex flex-col items-center">
      <div className="w-4/5 flex flex-col items-center">
        <h1 className="text-2xl md:text-4xl">{title}</h1>
        <h1 className="text-4xl md:text-6xl text-center md:w-[70%] my-6">
          {subtitle}
        </h1>
        <p className="text-md text-center">{description}</p>
        <Button className="hover:text-black hover:bg-white my-16">
          {buttonLabel}
        </Button>
      </div>
      <div className="relative flex justify-center w-[100%]">
        <img
          src={image1Src}
          alt=""
          className="absolute top-[20%] md:top-[25%] left-[35%] md:left-[41%] rounded-lg shadow-xl w-2/6 md:w-1/5"
        />
        <img src={image2Src} alt="" className="w-5/6 md:w-3/5" />
      </div>
    </section>
  );
}

export default Features;
