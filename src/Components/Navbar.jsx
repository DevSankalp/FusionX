import React,{useState,useEffect} from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Logo2 from "./Assets/navLogo2.png";
import {auth} from '../Firebase';

const Navbar1 = ({ navbarData }) => {
  const { logoText, navItems, buttonText } = navbarData;
  const [openNav, setOpenNav] = React.useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // This effect runs on component mount
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    // Clean up the observer when component unmounts
    return () => unsubscribe();
  }, []);

  const isLoggedIn = () => {
    return !!user; // Returns true if user is logged in, false otherwise
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 p-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navItems.map((navbarData, index) => (
        <Typography
          key={index}
          as="li"
          variant="small"
          color="blue-gray"
          className={`p-1 font-normal relative before:absolute before:bg-black before:bottom-0 before:left-0 before:w-full before:h-[1.5px] lg:before:hover:scale-x-100 before:origin-left before:duration-500
          ${navbarData.active ? "before:scale-x-100" : "before:scale-x-0"}
            `}
        >
          <Link to={navbarData.link} className="flex items-center text-[16px]">
            {navbarData.text}
          </Link>
        </Typography>
      ))}
      {isLoggedIn() ? (
        <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`p-1 font-normal relative before:absolute before:bg-black before:bottom-0 before:left-0 before:w-full before:h-[1.5px] lg:before:hover:scale-x-100 before:origin-left before:duration-500
        ${navbarData.active ? "before:scale-x-100" : "before:scale-x-0"}
          `}
      >
        <Link to='/Profile' className="flex items-center text-[16px]">
          Profile
        </Link>
      </Typography>
      ) : (
        <></>
      )}
    </ul>
  );

  return (
    <Navbar className="text-['inherit'] top-0 sticky z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 border-0">
      <div className="flex items-center justify-between pl-4 text-blue-gray-900">
        <div className="flex items-center gap-4">
          <Typography
            as="a"
            href=""
            className="cursor-pointer flex items-center lg:text-2xl font-['poppins']"
          >
            {/* <img
            className="w-12"
            src={logo_img}
            alt="logo-image"
          /> */}
            {logoText}
          </Typography>
          <div className="mr-4 hidden lg:block">{navList}</div>
        </div>
        {/* <img src={Logo2} className="w-32" /> */}
        <div className="flex items-center gap-4">
        {navbarData.link != null ? (
            isLoggedIn() ? ( // Show Log Out button if user is logged in
              <button
                className="flex items-center text-[16px] relative p-1 before:absolute before:bg-black before:bottom-0 before:left-0 before:w-[100%] before:h-[4%] lg:before:hover:scale-x-100 before:origin-left before:duration-500 before:scale-x-0"
                onClick={() => auth.signOut()}
              >
                Log Out
              </button>
            ) : (
              <Link
                to={navbarData.link}
                className="flex items-center text-[16px] relative p-1 before:absolute before:bg-black before:bottom-0 before:left-0 before:w-[100%] before:h-[4%] lg:before:hover:scale-x-100 before:origin-left before:duration-500 before:scale-x-0"
              >
                Log In
              </Link>
            )
          ) : (
            <></>
          )}
          <Button
            size="sm"
            className="hidden lg:inline-block bg-black hover:bg-white hover:text-black duration-300 shadow-[0_0_2px_#000]"
          >
            <span>{buttonText}</span>
          </Button>
          <IconButton
            variant="text"
            className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden flex"
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
      <MobileNav open={openNav}>
        {navList}
        <Button variant="gradient" size="sm" fullWidth className="">
          <span>{buttonText}</span>
        </Button>
      </MobileNav>
    </Navbar>
  );
};

export default Navbar1;
