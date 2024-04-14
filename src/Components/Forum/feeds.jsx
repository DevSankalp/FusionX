import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHeart,
  AiOutlineComment,
  AiOutlineShareAlt,
} from "react-icons/ai";

function Feeds({ feedData, tabs }) {
  // const [activeTab, setActiveTab] = useState(1);
  // var currentTab = (activeTab - 1) * 20;
  return (
    <section
      className="flex flex-col gap-4 md:gap-6 relative"
      data-lenis-prevent
    >
      {/* <div className="grid grid-rows-1 grid-cols-5 items-center justify-between sticky top-0 z-10 w-full bg-white">
        <div
          className={`absolute w-1/5 h-full bg-[#a6f962] rounded-lg transition-all ease-linear duration-300`}
          style={{ left: `${currentTab}%` }}
        ></div>
        {Object.keys(tabs).map((tabKey) => (
          <Link
            key={tabKey}
            className={`flex items-center justify-center text-center z-[1] p-2 duration-500 text-[12px] md:text-[16px] mx-2 ${
              activeTab === tabKey ? "" : "hover:bg-[#C7F2A4] hover:rounded-lg"
            }`}
            onClick={() => setActiveTab(tabKey)}
          >
            {tabs[tabKey].title}
          </Link>
        ))}
      </div> */}
      {Object.keys(feedData).map((key, index) => {
        const data = feedData[key];
        return (
          <div
            className="flex flex-col items-start border-[#9399ab] mt-2 md:mt-0 hover:bg-[rgba(204,204,204,.4)] rounded-lg duration-500 relative before:absolute before:-bottom-3 before:w-full before:h-[1px] before:bg-[#ccc]"
            key={index}
          >
            {/* User-Info */}
            <div className="w-full p-2 md:p-4 flex items-center gap-2 cursor-pointer">
              <img
                src={data.proImage}
                className="rounded-full w-[40px]"
                alt={data.username}
              />
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 text-[#646e8a]">
                  <p className="text-[12px] md:text-[14px]">{data.name}</p>
                  <Link
                    to=""
                    className="text-[12px] md:text-[14px] text-blue-400 hover:text-blue-700 hover:underline"
                  >
                    {data.username}
                  </Link>
                  <p className="text-[10px] md:text-[14px]">{data.timestamp}</p>
                </div>
                <p className="text-[#646e8a] text-[10px] md:text-[12px]">
                  {data.tags}
                </p>
              </div>
            </div>
            {/* Post-Images */}
            <div className="relative p-2 md:p-4 flex flex-col w-full overflow-hidden">
              {data.image !== null && (
                <div className="w-full h-[200px] overflow-clip">
                  <img
                    src={data.image}
                    alt={`post${index}`}
                    className="rounded-xl w-full"
                  />
                </div>
              )}
              <div className="mt-4">
                <h1 className="text-lg md:text-2xl">{data.title}</h1>
                <p>{data.description}</p>
              </div>
            </div>
            <div className="flex p-4 w-full md:w-4/6 text-sm md:text-md">
              {/* Likes */}
              <Link
                to=""
                className="neo-btn w-full flex gap-1 items-center justify-center rounded-lg"
              >
                <AiOutlineHeart />
                <span className="">{data.actions.likes}</span>
              </Link>
              {/* Comments */}
              <Link
                to=""
                className="neo-btn mx-2 w-full flex gap-1 items-center justify-center rounded-lg"
              >
                <AiOutlineComment />
                <span className="">{data.actions.comments}</span>
              </Link>
              {/* Share */}
              <Link
                to=""
                className="neo-btn py-2 md:p-2 w-full flex gap-1 items-center justify-center rounded-lg"
              >
                <AiOutlineShareAlt />
                {data.actions.share !== 0 && (
                  <span className="">{data.actions.share}</span>
                )}
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Feeds;
