import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Sidebar({ filterData, activeFilter, setActiveFilter }) {
  const { filters, featured } = filterData;
  const [selectedValues, setSelectedValues] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);
  const filtersRef = useRef(null);

  const handleValueChangeCheckBox = (e) => {
    const { value, checked } = e.target;

    setSelectedValues((prevValues) => {
      if (checked) {
        return [...prevValues, value];
      } else {
        return prevValues.filter((item) => item !== value);
      }
    });
  };

  const handleValueChangeRadio = (e) => {
    setSelectedValue(e.target.value);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (filtersRef.current && !filtersRef.current.contains(event.target)) {
        setActiveFilter(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeFilter, setActiveFilter]);

  function handleVisibility(content) {
    const filterId = `filter${content}`;
    const filterId_head = `head${content}`;

    const filterElement = document.getElementById(filterId);
    const filterHead = document.getElementById(filterId_head);
    if (filterElement) {
      filterElement.classList.toggle("hidden");
      filterElement.classList.toggle("flex");
      filterHead.classList.toggle("before:-rotate-45");
      filterHead.classList.toggle("before:rotate-45");
    }
  }

  return (
    <section
      className={`md:mt-1 px-0 md:pl-4 fixed md:static z-20 md:z-10 w-full top-0 h-[100vh] md:h-auto md:translate-x-0 transition-all duration-500 overflow-scroll md:border-[#ccc] md:border-r-[1px]  ${
        activeFilter ? "translate-x-0" : "-translate-x-full"
      } `}
    >
      <div
        className="flex flex-col h-full w-2/3 md:w-full bg-[#fff] glassmorph"
        ref={filtersRef}
      >
        <div className="mr-4 border-b-[1px] border-[#ccc]">
          <h1 className="text-md md:text-xl font-bold md:rounded-t-lg py-1 mb-2 pl-4 before:absolute before:w-full before:h-[1px] before:bottom-0 before:left-0 before:bg-[#ccc] relative">
            Filters
          </h1>
          {Object.keys(filters).map((filter, key) => (
            <div className="w-full flex flex-col pl-4" key={key}>
              <div className="">
                <h1
                  className="font-bold hover:bg-[#9f70fd] hover:text-white rounded p-1 pl-4 mb-2 z-10 flex items-center transition duration-500 cursor-pointer relative before:absolute before:w-[5px] before:h-[5px] before:right-[10%] before:border-b-[1px] before:border-r-[1px] before:border-black before:-rotate-45 before:duration-200 before:transition"
                  onClick={() => handleVisibility(key + 1)}
                  id={`head${key + 1}`}
                >
                  {filter}
                </h1>
                <div
                  className="pl-4 mb-2 hidden origin-top transition duration-500 flex-col"
                  id={`filter${key + 1}`}
                >
                  {filters[filter].title.map((title, index) => (
                    <label
                      key={index}
                      className={`relative flex items-center pl-6 cursor-pointer w-[min-content] z-10 ${
                        filter === "Domain" ? "container" : "checkbox-container"
                      }`}
                    >
                      {filter !== "Content" ? (
                        <input
                          type="radio"
                          checked={selectedValue === title}
                          onChange={handleValueChangeRadio}
                          value={title}
                          className="mr-2 absolute cursor-pointer h-0 w-0 opacity-0"
                        />
                      ) : (
                        <input
                          type="checkbox"
                          checked={selectedValues.includes(title)}
                          onChange={handleValueChangeCheckBox}
                          value={title}
                          className="mr-2 absolute cursor-pointer h-0 w-0 opacity-0"
                        />
                      )}
                      <span
                        className={`hover:bg-[#9f70fd] hover:text-white cursor-pointer after:absolute ${
                          filter === "Domain"
                            ? "checkmark"
                            : "checkbox-checkmark"
                        }`}
                      ></span>
                      {title}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mr-4 border-b-[1px] border-[#ccc]">
          <h1 className="text-md md:text-xl font-bold md:rounded-t-lg py-1 mb-2 pl-4 before:absolute before:w-full before:h-[1px] before:bottom-0 before:left-0 before:bg-[#ccc] relative">
            Featured
          </h1>

          <div className="w-full flex flex-col pl-4">
            {Object.keys(featured).map((title, index) => (
              <div key={index} className="">
                <h1
                  className="font-bold hover:bg-[#9f70fd] hover:text-white rounded p-1 pl-4 mb-2 z-10 flex items-center transition duration-500 cursor-pointer relative before:absolute before:w-[5px] before:h-[5px] before:right-[10%] before:border-b-[1px] before:border-r-[1px] before:border-black before:-rotate-45 before:duration-200 before:transition"
                  onClick={() => handleVisibility(index + 3)}
                  id={`head${index + 3}`}
                >
                  {title}
                </h1>
                <div
                  className="text-[14px] md:text-[16px] hidden origin-top transition duration-500 flex-col gap-2 ml-4 mb-2"
                  id={`filter${index + 3}`}
                >
                  {featured[title].title.map((title, index) => (
                    <Link
                      key={index}
                      className="relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1.5px] lg:before:hover:scale-x-100 before:origin-left before:duration-500 before:bg-[#C7F2A4] before:scale-x-0 hover:before:scale-x-100 rounded-lg cursor-pointer transition-all duration-500 w-max"
                    >
                      {title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
