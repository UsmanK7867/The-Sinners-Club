import React, { useEffect, useState } from "react";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";

function Nav({ toHomee, toTPP, toRoadd, toFaqq }) {
  // nav Hide/show
  const [show, setShow] = useState(true);
  // const controlNavbar = () => {
  //   if (window.scrollY > 700) {
  //     setShow(false);
  //   } else {
  //     setShow(true);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", controlNavbar);

  //   return () => {
  //     window.removeEventListener("scroll", controlNavbar);
  //   };
  // }, []);

  return (
    <div
      className={` nav transition duration-300 ease-in-out py-3 fixed w-full ${
        !show && "hidden"
      } `}
    >
      <div className="flex  md:w-[90%]  lg:w-[80%] mx-auto text-white items-center tracking-wide text-[0.7rem] md:text-base ">
        <div className="font-bold tracking-widest mx-auto  text-center sm:mx-0 sm:text-left">
          {/* THE SINNERS <br />
          <span className="font-normal tracking-wide mx-auto">Club</span> */}
          <img
            src="./imgs/main_logo.png"
            className="h-[50px] pt-2 w-[80%] sm:w-[70%] md:w-[80%] mx-auto"
            alt=""
          />
        </div>
        {/* <div className=" hidden sm:inline-block hover:text-[#0291BE] ml-auto mr-6 underline">
          ABOUT US
        </div> */}

        <div
          onClick={toHomee}
          className=" active:text-xl md:text-xs lg:text-lg active:text-rose-200 cursor-pointer hidden ml-auto sm:inline-block hover:text-[#0291BE]  mr-6"
        >
          HOME
        </div>
        <div
          onClick={toRoadd}
          className="active:text-xl md:text-xs lg:text-lg active:text-rose-200 cursor-pointer hidden  sm:inline-block hover:text-[#0291BE]  mr-6"
        >
          ROADMAP
        </div>
        <div
          onClick={toTPP}
          className="active:text-xl min-w-[120px] md:text-xs lg:text-lg active:text-rose-200 cursor-pointer hidden sm:inline-block hover:text-[#0291BE]  mr-6"
        >
          TEAM PRESENTATION
        </div>
        <div
          onClick={toFaqq}
          className="active:text-xl md:text-xs lg:text-lg active:text-rose-200 cursor-pointer hidden sm:inline-block hover:text-[#0291BE]  mr-6"
        >
          FAQ
        </div>
        <div className="right sm:flex w-[10%] justify-between min-w-[150px] mx-auto mt-5 lg:mt-0 lg:mr-0 hidden ">
          <a href="https://discord.gg/PG6wPHuX7t" target={"_blank"}>
            <div className="icon bg-white rounded-full w-10 h-10 flex justify-center pt-2 hover:bg-gray-300 ">
              {" "}
              <FaDiscord color="black" size={"70%"} />{" "}
            </div>
          </a>
          <a href="https://twitter.com/thesinners_nft?s=21" target={"_blank"}>
            <div className="icon bg-white rounded-full w-10 h-10 flex justify-center pt-2 hover:bg-gray-300 ">
              {" "}
              <FaTwitter color="black" size={"70%"} />{" "}
            </div>
          </a>
          <a
            href="https://instagram.com/thesinnersnft?utm_medium=copy_link"
            target={"_blank"}
          >
            <div className="icon bg-white rounded-full w-10 h-10 flex justify-center pt-2 hover:bg-gray-300 ">
              {" "}
              <FaInstagram color="black" size={"70%"} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
