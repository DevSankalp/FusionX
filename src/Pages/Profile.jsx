import React from "react";
import Navbar1 from "../Components/Navbar";
import { MdOutlineHomeWork } from "react-icons/md";
import {
  SlSocialFacebook,
  SlSocialGithub,
  SlSocialInstagram,
} from "react-icons/sl";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import image1 from "../Components/Assets/profile1.webp";
import image2 from "../Components/Assets/demo1.png";

function Profile() {
  const navbarData = {
    navbarData: {
      logoText: "FusionX",
      navItems: [
        { text: "Home", link: "/" },
        { text: "Listings", link: "/List" },
        { text: "Forums", link: "/Forums" },
        { text: "FX Careers", link: "/" },
        // Add more navigation items as needed
      ],
      link: null,
      buttonText: "Get Started",
    },
  };

  const userData = {
    name: "Random Banda",
    organization: "SDE at Amazon",
    location: "UK, London",
    tags: ["UI/UX", "AI/ML", "Cloud Development"],
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, corrupti, omnis mollitia fuga iste eligendi soluta veritatis quam sequi magnam repellat porro est ratione tempora laboriosam perferendis possimus, veniam suscipit quibusdam iusto aliquam! Nobis nulla vero deleniti reiciendis accusantium, quos quam iusto minima repellat rem commodi placeat vel aliquid vitae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, corrupti, omnis mollitia fuga iste eligendi soluta veritatis quam sequi magnam repellat porro est ratione tempora laboriosam perferendis possimus, veniam suscipit quibusdam iusto aliquam! Nobis nulla vero deleniti reiciendis accusantium, quos quam iusto minima repellat rem commodi placeat vel aliquid vitae.",
    work: "Amazon",
    socials: [
      { platform: "facebook", url: "https://facebook.com/demoprofile" },
      { platform: "github", url: "https://github.com/demoprofile" },
      { platform: "instagram", url: "https://instagram.com/demoprofile" },
    ],
    recommendations: ["John Doe", "Jane Smith"],
  };

  const icons = [SlSocialFacebook, SlSocialGithub, SlSocialInstagram];

  return (
    <section>
      <Navbar1 navbarData={navbarData.navbarData} />
      <div className="grid md:grid-cols-[83%_16%] gap-4 h-full w-full bg-[#e9e7e7] px-4 pt-2">
        <section className="flex flex-col min-h-[40vh] gap-2">
          <div className="w-full min-h-1/3 bg-white rounded-2xl">
            <div className="relative">
              <img
                src={image2}
                alt="banner_image"
                className="max-w-[1250px] max-h-[360px] w-full  rounded-2xl"
              />
              <img
                src={image1}
                alt="profile_image"
                className="absolute -bottom-20 left-8 rounded-full max-w-36 w-full border-4 border-white"
              />
            </div>
            <div className="flex flex-col md:ml-48 md:mt-8 ml-6 mt-20">
              <span className="md:text-3xl text-2xl font-bold">
                {userData.name}
              </span>
              <span className="text-sm font-bold text-[#999797] my-1">
                {userData.organization}
              </span>
              <span className="text-sm font-bold text-[#999797]">
                {userData.location}
              </span>
              <span className="flex items-center gap-2 my-6">
                {userData.tags.map((tags, index) => (
                  <span
                    key={index}
                    className="bg-[#dfdddd] rounded-lg px-2 text-sm font-bold"
                  >
                    {tags}
                  </span>
                ))}
              </span>
            </div>
          </div>
          <div className="w-full bg-white rounded-2xl p-6 flex flex-col ">
            <span className="font-black mb-3">About</span>
            <p className="text-[#545151] font-bold">{userData.about}</p>
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <div className="w-full bg-white p-4 rounded-2xl flex flex-col justify-center gap-2">
            <span className="font-black text-lg">Organization</span>
            <span className="flex items-center gap-2 opacity-80">
              <MdOutlineHomeWork />
              {userData.work}
            </span>
          </div>
          <div className="w-full bg-white p-4 rounded-2xl flex flex-col justify-center gap-2">
            <span className="font-black text-lg">Connect</span>
            {userData.socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="bg-[#dfdddd] rounded-lg px-2 text-md font-bold w-max flex items-center gap-2"
              >
                {React.createElement(icons[index])}
                {social.platform}
              </a>
            ))}
          </div>
          <div className="w-full bg-white p-4 rounded-2xl flex flex-col justify-center gap-2 md:m-0 mb-8">
            <span className="font-black text-lg">Similar Profiles</span>
            <span className="flex flex-col justify-center gap-2 opacity-80">
              {userData.recommendations.map((rec, index) => (
                <span key={index}>{rec}</span>
              ))}
            </span>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Profile;
