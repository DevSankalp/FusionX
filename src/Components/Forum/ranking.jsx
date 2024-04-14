import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Ranks({ addData, activeRank, setActiveRank }) {
  const { rankData } = addData;
  const ranksRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ranksRef.current && !ranksRef.current.contains(event.target)) {
        setActiveRank(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeRank, setActiveRank]);

  return (
    <section
      className={`md:mt-1 px-0 md:pr-4 order-1 md:order-2 fixed md:static z-20 md:z-10 w-full top-0 right-0 h-[100vh] md:h-auto md:translate-x-0 transition-all duration-500 md:border-[#ccc] md:border-l-[1px] ${
        activeRank ? "translate-x-0" : "translate-x-full"
      } `}
    >
      <div
        className="absolute md:static w-2/3 md:w-full h-full flex flex-col items-center md:gap-4 bg-[#fff] glassmorph md:shadow-none right-0"
        ref={ranksRef}
      >
        <div className="w-full md:rounded-lg">
          <h1 className="text-md md:text-xl font-bold md:rounded-t-lg mb-2 pl-4 py-1 ">
            Ranking
          </h1>
          <div className="flex flex-col justify-center gap-1 px-2 pb-2 text-sm md:text-md">
            {rankData.companies.map((company, index) => (
              <a
                key={index}
                href={company.url}
                target="_blank"
                className="p-2 hover:bg-[#9f70fd] hover:text-white rounded-lg cursor-pointer transition-all duration-500"
                onClick={() => setActiveRank(!activeRank)}
              >
                {company.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ranks;
