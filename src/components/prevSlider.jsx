import React, { Component } from "react";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
export default class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="text-white h-[250px] w-[90%]  mx-auto pt-4">
        {/* <div className=" absolute  w-[150px] h-[150px] bg-[#0291BE]"></div> */}
        {/* <div className=" absolute bottom-0 right-0  w-[150px] h-[150px] bg-[#0291BE]"></div> */}
        <Slider {...settings}>
          <div className=" p-2 ml-2  ">
            <img
              className=" h-[95%] w-full rounded-lg shadow-lg shadow-gray-500 "
              src="./imgs/avatar_ryan.png"
              alt=""
            />
            <div className="box2">
              <div className="pt-4 text-xl flex ml-6 items-center">
                Co-Founder ┃ Ryan
              </div>
              <div className=" my-2 text-md text-left italic text-gray-100 w-[80%] mx-auto">
                I’m an investor and businessman passionate about blockchain. I
                have invested in crypto, capital markets, real estate and online
                casinos start-ups since 2017
              </div>
            </div>
          </div>
          <div className=" p-2  ">
            <img
              className=" h-[95%] w-full rounded-lg shadow-lg shadow-gray-500"
              src="./imgs/avatar_jeff.png"
              alt=""
            />
            <div className="box2">
              <div className="pt-4 text-xl flex ml-6 items-center">
                Co-Founder ┃ Jeff
              </div>
              <div className="my-2 text-md text-left italic text-gray-100 w-[80%] mx-auto">
                I'm an real estate entrepreneur, and one of my goals is to
                combine my NFT passion with my passion for Real Estate. I´ve
                been into NFTs since 2019. The SinnersClub is here to stay
              </div>
            </div>
          </div>
          <div className=" p-2   ">
            <img
              className=" h-[95%] w-full rounded-lg shadow-lg shadow-gray-500"
              src="./imgs/avatar_patrick.png"
              alt=""
            />
            <div className="box2">
              <div className="pt-4 text-lg flex ml-6 text-left items-center">
                Software Developer ┃ Patrick
              </div>
              <div className="my-2 text-md text-left italic text-gray-100 w-[80%] mx-auto">
                I’ve worked in software development and I started investing on
                NFTs in 2016. We’ve worked endless nights to develop this
                project and to bring this idea to you!
              </div>
            </div>
          </div>
          <div className=" p-2 ">
            <img
              className=" h-[95%] w-full rounded-lg shadow-lg shadow-gray-500"
              src="./imgs/avatar_joe.png"
              alt=""
            />
            <div className="box2">
              <div className="pt-4 text-xl flex ml-6 items-center">
                Marketing Expert ┃ Joe
              </div>
              <div className="my-2 text-md text-left italic text-gray-100 w-[80%] mx-auto">
                I’m a driven product marketing manager who has been involved in
                strategic and innovative campaigns for different products in
                different industries.
              </div>
            </div>
          </div>
          <div className=" p-2 ">
            <img
              className=" h-[95%] w-full rounded-lg shadow-lg shadow-gray-500"
              src="./imgs/avatar_rafa.png"
              alt=""
            />
            <div className="box2">
              <div className="pt-4 text-xl flex ml-6 items-center">
                Artist ┃ Rafa
              </div>
              <div className="my-2 text-md text-left italic text-gray-100 w-[80%] mx-auto sm:text-sm  ">
                I’ve been a 2D animator in various companies/projects, but where
                I’ve learned and enjoyed it the most is animating characters for
                Cartoon Network. I hope you connect with our design but most
                importantly, connect with the whole community and become one of
                us. Follow me on Instagram:{" "}
                <a
                  className="text-[#0C98C5]"
                  href="https://www.instagram.com/rafa.modern.art/"
                  target="_blank"
                >
                  @rafa.modern.art
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
