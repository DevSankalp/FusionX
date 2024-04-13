import React from "react";
import { Button } from "@material-tailwind/react";
import listLogo from "./Assets/list-logo.webp";

function About({ aboutData }) {
  const { section1, section2, section3, heading, subHeading, buttonText } =
    aboutData;

  return (
    <section className="flex flex-col items-center pb-24 pt-8 overflow-x-hidden">
      <div className="md:w-3/5 flex flex-col items-center text-center">
        <h4 className="text-xl md:text-4xl py-6">{heading}</h4>
        <h2 className="text-3xl md:text-6xl leading-70 w-[90%]">
          {subHeading}
        </h2>
      </div>
      <div className="w-full lg:h-[80vh] flex flex-col md:flex-row items-center mt-24">
        <div className="md:w-2/5 h-[50vh] md:h-full relative flex items-start md:items-center justify-center md:justify-end before:absolute before:bottom-10 md:before:bottom-0 before:w-[100%] md:before:w-[90%] before:h-4/5 md:before:h-full before:bg-[rgba(79,111,82,0.5)] glassmorph1 md:before:right-[25%] md:before:rounded-xl before:z-[-1]">
          <img
            src={section1.Image[0]}
            alt=""
            className="w-1/2 md:w-3/5 rounded-xl shadow-[1px_1px_5px_rgba(0,0,0,1)]"
          />
          {/* <img
            src={section1.Image[1]}
            alt=""
            className="w-3/5 md:w-2/5 rounded-2xl absolute top-[35%] md:top-[60%] md:left-[50%]"
          /> */}
        </div>
        <div className="md:w-1/2 flex justify-center text-justify md:text-left">
          <div className="w-5/6 md:w-[65%]">
            <h1 className="text-2xl md:text-5xl">{section1.title}</h1>
            <p className="md:text-2xl mt-8">{section1.description}</p>
            <ul className="text-sm md:text-lg my-8">{section1.paragraph}</ul>
            <Button className="hover:text-black hover:bg-white">
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full lg:h-[80vh] flex flex-col md:flex-row items-center mt-32 md:mt-16">
        <div className="md:w-1/2 flex justify-center order-2 md:order-1">
          <div className="w-5/6 md:w-[65%]">
            <h1 className="text-2xl md:text-5xl">{section2.title}</h1>
            <p className="md:text-2xl mt-8">{section2.description}</p>
            <ul className="text-sm md:text-lg my-8">
              <li className="flex items-center gap-6">
                <img alt="" src={listLogo} />
                {section2.paragraph[0]}
              </li>
              <li className="flex items-center gap-6">
                <img alt="" src={listLogo} />
                {section2.paragraph[1]}
              </li>
            </ul>
            <Button className="border-0 hover:text-black hover:bg-white">
              {buttonText}
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 h-[50vh] md:h-full relative flex justify-center items-start md:items-center md:justify-start order-1 md:order-2 before:absolute before:w-[100%] md:before:w-[90%] before:h-4/5 md:before:h-full before:bottom-10 md:before:bottom-0 before:bg-[rgba(79,111,82,0.5)] md:before:bg-[rgb(112,98,51,0.8)] glassmorph1 md:before:left-[25%] md:before:rounded-xl before:z-[-1]">
          <img src={section2.Image[0]} alt="" className="w-1/2 rounded-xl" />
          {/* <img
            src={section2.Image[1]}
            alt=""
            className="w-3/6 md:w-2/5 rounded-2xl absolute top-[15%] md:top-[10%] right-[1%] md:right-[40%] md:z-[-1]"
          /> */}
        </div>
      </div>
      <div className="w-full lg:h-[80vh] flex flex-col md:flex-row items-center mt-24">
        <div className="md:w-1/3 h-[50vh] md:h-full relative flex items-start md:items-center justify-center md:justify-end before:absolute before:bottom-10 md:before:bottom-0 before:w-[100%] md:before:w-[90%] before:h-4/5 md:before:h-full before:bg-[rgba(79,111,82,0.5)] md:before:right-[25%] glassmorph1 md:before:rounded-xl before:z-[-1]">
          <img
            src={section3.Image[0]}
            alt=""
            className="w-3/5 md:w-3/4 rounded-xl"
          />
          <img
            src={section3.Image[1]}
            alt=""
            className="w-3/6 rounded-2xl absolute top-[10%] left-[5%] md:left-[72%]"
          />
        </div>
        <div className="md:w-2/3 flex justify-center">
          <div className="w-5/6 md:w-[65%]">
            <h1 className="text-2xl md:text-5xl">{section3.title}</h1>
            <p className="md:text-2xl mt-8">{section3.description}</p>
            <ul className="text-sm md:text-md my-8 flex flex-col md:gap-12">
              <li className="flex flex-col md:flex-row md:items-center md:gap-6">
                <div className="flex items-center">
                  <img alt="" src={listLogo} />
                  {section3.paragraph[0]}
                </div>
                <div className="flex items-center">
                  <img alt="" src={listLogo} />
                  {section3.paragraph[1]}
                </div>
              </li>
              <li className="flex flex-col md:flex-row md:items-center md:gap-6">
                <div className="flex items-center">
                  <img alt="" src={listLogo} />
                  {section3.paragraph[2]}
                </div>
                <div className="flex items-center">
                  <img alt="" src={listLogo} />
                  {section3.paragraph[3]}
                </div>
              </li>
            </ul>
            <Button className="hover:text-black hover:bg-white">
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
