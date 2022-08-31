import React from "react";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Main({ toHome }) {
  return (
    <>
      <div ref={toHome} className="h-[20px] sm:h-[80px]"></div>
      <div className="main_bg  p-4 w-full  sm:mb-0 sm:h-[80%] ">
        <div className=" mx-auto w-[90%] mt-20 sm:mt-0  sm:h-[80vh] ">
          <div className=" mt-4 md:mt-20 ">
            {/* <img className="w-[70%]" src="./imgs/text-v1.svg" alt="" /> */}
            <div className="right sm:hidden w-[10%] justify-between min-w-[200px] mb-8 mx-auto mt-5 lg:mt-0 lg:mr-0 flex ">
              <a href="https://discord.gg/PG6wPHuX7t" target={"_blank"}>
                <div className="icon bg-white rounded-full w-12 h-12 flex justify-center pt-3 hover:bg-gray-300 ">
                  {" "}
                  <FaDiscord color="black" size={"70%"} />{" "}
                </div>
              </a>
              <a
                href="https://twitter.com/thesinners_nft?s=21"
                target={"_blank"}
              >
                <div className="icon bg-white rounded-full w-12 h-12 flex justify-center pt-3 hover:bg-gray-300 ">
                  {" "}
                  <FaTwitter color="black" size={"70%"} />{" "}
                </div>
              </a>
              <a
                href="https://instagram.com/thesinnersnft?utm_medium=copy_link"
                target={"_blank"}
              >
                <div className="icon bg-white rounded-full w-12 h-12 flex justify-center pt-3 hover:bg-gray-300 ">
                  {" "}
                  <FaInstagram color="black" size={"70%"} />
                </div>
              </a>
            </div>
            <img
              className="sm:w-[50%] my-4 rounded-lg mx-auto box1 px-4 py-2 hidden "
              src="./imgs/main_logo.png"
              alt=""
            />
            {/* <div className="text-white text-5xl mb-4">
            THE PRIME APE
            <br /> PLANET
          </div> */}
            <Link to="/mint">
              <div className=" border-2 sm:border-0 border-white rounded-xl mx-auto text-white bg-gradient-to-r from-[black] to-[#121212] hover:from-[#121212] hover:to-[#0000009c] italic text-center   tracking-widest  w-[90%] sm:w-[50%] lg:w-[30%] p-4 font-bold text-lg ">
                Mint a Sinner
              </div>
            </Link>
          </div>
          <div className=" mx-auto md:w-[40%] xl:w-[35%]">
            <img
              src="./imgs/main_nft.png"
              className="w-[100%]   h-[65%]"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
