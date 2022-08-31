import React from "react";

function Card() {
  return (
    <>
      <div className="w-[90%] h-[250px]  relative mx-auto sm:flex justify-between pr-4 hidden">
        <div className=" absolute  w-[150px] h-[150px] bg-[#0291BE]"></div>
        <div className=" absolute bottom-0 right-0  w-[150px] h-[150px] bg-[#0291BE]"></div>
        <div className=" relative top-2 left-2 bottom-2 right-2  w-[19%] h-[95%] ">
          <img
            className=" h-[95%] w-full"
            src="./imgs/avatar_kurtis.png"
            alt=""
          />
          <div className="mt-4">Co-Founder┃Ryan</div>
          <div className="my-2 text-xs text-[grey] w-[80%] mx-auto">
            I’m an investor and businessman passionate about blockchain. I have
            invested in crypto, capital markets, real estate and online casinos
            start-ups since 2017
          </div>
        </div>
        <div className=" relative top-2 left-2 bottom-2 right-2  w-[19%] h-[95%] ">
          <img
            className=" h-[95%] w-full"
            src="./imgs/avatar_travis.png"
            alt=""
          />
          <div className="mt-4">Co-Founder┃Jeff</div>
          <div className="my-2 text-xs text-[grey] w-[80%] mx-auto">
            I'm an real estate entrepreneur, and one of my goals is to combine
            my NFT passion with my passion for Real Estate. I´ve been into NFTs
            since 2019. The SinnersClub is here to stay
          </div>
        </div>
        <div className=" relative top-2 left-2 bottom-2 right-2  w-[19%] h-[95%] ">
          <img
            className=" h-[95%] w-full"
            src="./imgs/avatar_chris.png"
            alt=""
          />
          <div className="mt-4">Software Developer┃Patrick</div>
          <div className="my-2 text-xs text-[grey] w-[80%] mx-auto">
            I’ve worked in software development and I started investing on NFTs
            in 2016. We’ve worked endless nights to develop this project and to
            bring this idea to you!
          </div>
        </div>
        <div className=" relative top-2 left-2 bottom-2 right-2  w-[19%] h-[95%] ">
          <img
            className=" h-[95%] w-full"
            src="./imgs/avatar_kurtis.png"
            alt=""
          />
          <div className="mt-4">Marketing Expert┃ Joe</div>
          <div className="my-2 text-xs text-[grey] w-[80%] mx-auto">
            I’m a driven product marketing manager who has been involved in
            strategic and innovative campaigns for different products in
            different industries.
          </div>
        </div>
        <div className=" relative top-2 left-2 bottom-2 right-2  w-[19%] h-[95%] ">
          <img
            className=" h-[95%] w-full"
            src="./imgs/avatar_kurtis.png"
            alt=""
          />
          <div className="mt-4">Artist┃ Rafa: </div>
          <div className="my-2 text-xs text-[grey] w-[80%] mx-auto">
            I’m a self-taught plastic artist and illustration is my main field.
            I've worked as a character designer before in multiple
          </div>
        </div>
      </div>
      <div className="w-[90%] h-[350px] relative mx-auto  justify-between pr-4 sm:hidden">
        <div className=" absolute  w-[150px] h-[150px] bg-[#0291BE]"></div>
        <div className=" absolute bottom-0 right-0  w-[150px] h-[150px] bg-[#0291BE]"></div>
        <div className=" relative top-3 left-2 bottom-3 right-2  w-[98%] h-[98%] ">
          <img
            className=" h-[95%] w-full"
            src="./imgs/avatar_chris.png"
            alt=""
          />
          <div className="mt-4">CHRIS DAWE</div>
          <div className="my-2 text-[0.6rem] text-[grey] w-[90%] mx-auto">
            THE PROJECT'S LEAD ARTIST HAS BEEN THE TOP PICK FOR MOVIE INDUSTRY
            VETERANS FOR OVER 14 YEARS.
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
