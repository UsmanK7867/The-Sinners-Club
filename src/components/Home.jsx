import { useRef } from "react";

import About from "./About";
import About1 from "./About1";
import Artist from "./Artist";
import Faq from "./Faq";
import Main from "./Main";
import Nav from "./Nav";
import Roadmap from "./Roadmap";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import { Routes, Route, Link } from "react-router-dom";
import Mint from "./Mint";

function Home() {
  const toRoad = useRef(null);
  const toFaq = useRef(null);
  const toTP = useRef(null);
  const toHome = useRef(null);

  const toRoadd = () => toRoad.current.scrollIntoView();
  const toFaqq = () => toFaq.current.scrollIntoView();
  const toTPP = () => toTP.current.scrollIntoView();
  const toHomee = () => toHome.current.scrollIntoView();
  return (
    <div className="home  w-full  ">
      {/* <img src="./imgs/bg-banner-v12.png" className="bg" alt="" /> */}
      {/* Nav */}
      <Nav toHomee={toHomee} toTPP={toTPP} toFaqq={toFaqq} toRoadd={toRoadd} />
      <div className="">
        {/* Main */}
        <Main toHome={toHome} />
        {/* About */}
        {/* </div> */}
        <div className="h-[100px]"></div>
        <About1 />
      </div>
      {/* <About /> */}
      <Roadmap id="roadmap" toRoad={toRoad} />

      {/* Artist */}
      <Artist toTP={toTP} />
      {/* Roadmap */}
      {/* <Roadmap /> */}
      {/* Faq */}
      <div className="lounge">
        <Faq toFaq={toFaq} />
        {/* <div className="w-[80%] text-white text-2xl font-bold tracking-widest mx-auto  text-center sm:text-left">
          THE SINNER
          <br />
          <span className="font-normal tracking-wide">CLUB</span>
        </div> */}
        <div className=" px-4 py-4 md:py-2 w-[80%] mx-auto footer mb-[83px] sm:mb-2 md:flex justify-between mt-28 md:mt-3 lg:mt-[-40px] items-center ">
          <div className="text-white left text-[0.7rem]  sm:font-normal md:font-bold sm:text-[0.6rem] w-[100%] sm:w-[80%] max-w-[500px] sm:max-w-[350px] sm:min-w-[340px] min-w-[200px] mx-auto lg:mx-0 lg:w-[40%]   font-lighter flex   justify-between items-center ">
            <h4 className="mr-1 sm:mr-0">TERMS & CONDITIONS</h4>
            <h4 className="mr-1 sm:mr-0">PRIVACY POLICY</h4>
            <h4 className="mr-1 sm:mr-0">2022 SINNER CLUB</h4>
          </div>
          <div className="right flex w-[10%] justify-between min-w-[200px] mx-auto mt-5 lg:mt-0 lg:mr-0 ">
            <a href="https://discord.gg/PG6wPHuX7t" target={"_blank"}>
              <div className="icon bg-white rounded-full w-12 h-12 flex justify-center pt-3 hover:bg-gray-300 ">
                {" "}
                <FaDiscord color="black" size={"70%"} />{" "}
              </div>
            </a>
            <a href="https://twitter.com/thesinners_nft?s=21" target={"_blank"}>
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
        </div>
        <div className="mt-10 line my-2 w-full h-[1px] bg-gray-300 rounded-lg"></div>

        <div className="text:lg md:text-2xl  text-center text-white pb-4 font-light tracking-widest">
          ©COPYRIGHT-2022 THE SINNERS CLUB. ALL RIGHTS RESERVED.
        </div>
      </div>

      {/* <SimpleSlider /> */}
    </div>
  );
}

export default Home;
