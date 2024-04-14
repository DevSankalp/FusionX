import React, { useEffect, useState } from "react";
import { MobileNav, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaFilter } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";

function Nav({
  navData,
  activeRank,
  setActiveRank,
  activeFilter,
  setActiveFilter,
}) {
  const [openNav, setOpenNav] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [content, setContent] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const toggleFilter = () => {
    setActiveFilter(!activeFilter);
  };

  const toggleAdd = () => {
    setActiveRank(!activeRank);
  };

  const navList = (
    <div className="flex items-center justify-end gap-4 md:p-3 w-full">
      {navData.title.map((title, index) => (
        <span
          key={index}
          className="relative neo-icon w-[40px] h-[40px] flex items-center justify-center rounded-full"
          onMouseOver={() => setContent(true)}
          onMouseLeave={() => setContent(false)}
          onClick={() => setOpenModal(true)}
        >
          <span
            className={`absolute bg-[#a6f962] px-2 top-12 flex items-center rounded-md duration-100 origin-top text-black z-20 ${
              content ? "scale-y-100 delay-1000" : "scale-y-0"
            }`}
          >
            {title}
          </span>
          {navData.name[index]}
        </span>
      ))}
      <Link
        to="/Login"
        className="neo-icon flex items-center justify-center px-4 p-2 rounded-lg"
      >
        Log In
      </Link>
    </div>
  );

  return (
    <>
      <nav className="bg-transparent h-max max-w-full rounded-none shadow-none">
        <div className="flex items-center justify-between px-3 py-3 md:p-0 md:pl-2 text-black border-b-[1px] border-[#ccc] md:mx-2">
          <Link
            to="/"
            className="relative neo-btn py-2 px-4 rounded-lg before:content-['Home'] before:bg-[#a6f962] before:px-2 before:absolute before:top-12 before:left-[15%] before:scale-y-0 md:hover:before:scale-y-100 before:flex before:items-center before:rounded-lg before:duration-100 before:origin-top hover:before:delay-1000 hover:before:text-black before:z-20"
          >
            FusionX
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav
          className="w-auto text-black flex justify-center mx-2 border-b-[1px] border-[#ccc]"
          open={openNav}
        >
          <div className="flex items-center h-[60px] gap-4">
            <div className="flex gap-4">
              <div
                className="relative neo-icon w-[40px] h-[40px] rounded-full flex items-center justify-center"
                onClick={toggleFilter}
              >
                <FaFilter />
              </div>
              <div
                className="relative neo-icon w-[40px] h-[40px] rounded-full flex items-center justify-center"
                onClick={toggleAdd}
              >
                <FaRankingStar />
              </div>
            </div>
            {navList}
          </div>
        </MobileNav>
      </nav>
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-[rgba(0,0,0,0.4)]">
          <div className="bg-white p-6 rounded-xl flex flex-col gap-4">
            <label htmlFor="title" className="flex flex-col">
              <span className="text-xl font-black">Title</span>
              <input
                type="text"
                className="min-w-[400px] px-2 border-2 border-[#e0dbdb] rounded-sm text-lg"
              />
            </label>
            <label htmlFor="link" className="flex flex-col">
              <span className="text-xl font-black">Image Url</span>
              <input
                type="text"
                className="min-w-[400px] px-2 border-2 border-[#e0dbdb] rounded-sm text-lg"
              />
            </label>
            <label htmlFor="description" className="flex flex-col">
              <span className="text-xl font-black">Description</span>
              <textarea className="min-w-[400px] px-2 min-h-[200px] border-2 border-[#e0dbdb] rounded-sm text-md" />
            </label>
            <div className="flex items-center justify-between">
              <button
                onClick=""
                className="bg-[#9f70fd] text-white w-max px-4 py-2 rounded-lg hover:bg-[#b8b5b5] duration-500"
              >
                Confirm
              </button>
              <button
                onClick={() => setOpenModal(false)}
                className="bg-[#eee9e9] w-max px-4 py-2 rounded-lg hover:bg-[#b8b5b5] duration-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
