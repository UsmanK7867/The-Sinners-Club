import React from "react";

function Roadmap({ toRoad }) {
  return (
    <div
      ref={toRoad}
      className="roadmap   mx-auto w-full py-20  "
      styles={{ backgroundImage: `url(${"./imgs/man-v1.png"})` }}
    >
      {/* <div className=" h-[80px]"></div> */}

      <div className="relative wrap overflow-hidden p-10 h-full">
        {/* <img src="./imgs/man-v1.png" className="bg" alt="" /> */}

        <div className="mb-12 text-4xl md:text-6xl text-white text-center font-bold tracking-widest ">
          ROADMAP
        </div>
        {/* <button className=" font-bold w-[70%] md:w-[30%] my-12 py-4 bg-white text-black hover:text-white hover:bg-[#0291BE] border-radius rounded-xl rounded-br-sm  relative left-[50%] translate-x-[-50%]">
          LAUNCH ROADMAP
        </button> */}

        <div
          className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border sm:left-[50%]"
          //   style={{ left: "50%" }}
        ></div>
        {/* <!-- right timeline --> */}
        <div className="mb-8 flex sm:justify-between items-center w-full right-timeline">
          <div className="order-1  sm:w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800  w-8 h-8 rounded-full ml-[-20px] mr-4 sm:mx-0">
            <h1 className="mx-auto font-semibold text-lg text-white ">1</h1>
          </div>
          <div className="box1 order-1  rounded-lg  w-[90%] sm:w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">The Story</h3>
            <p className="text-sm md:text-lg italic leading-snug tracking-wide text-white text-opacity-100">
              The Sinners Club comes from an idea of a group of entrepreneurs
              and investors that loathe getting comfortable with repetitive
              activities and are in search of a thrilling life and profitable
              activities. This club is not just for people who know how to live
              their life but the ambitious ones who know how to invest their
              free time. The Sinners Club is a DAO NFT collection dedicated to
              utility NFT enthusiasts and a leader & community-driven project.
            </p>
          </div>
        </div>

        {/* <!-- left timeline --> */}
        <div className="mb-8 flex sm:justify-between sm:flex-row-reverse items-center w-full left-timeline ">
          <div className="order-1 sm:w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800  w-8 h-8 rounded-full ml-[-20px] mr-4 sm:mx-0">
            <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
          </div>
          <div className=" box1 order-1  rounded-lg  w-[90%] sm:w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">
              {" "}
              Welcome to The Sinners Club:
            </h3>
            <p className="text-sm md:text-lg italic font-medium leading-snug tracking-wide text-white text-opacity-100">
              The Sinners Club is for the people who want to get out of their
              comfort zone, those who are willing to take a risk, there are tons
              of great things out and we believe that sometimes you need a boost
              to take that step you're looking for, we want to be that
              motivation for our community.
            </p>
          </div>
        </div>
        <div className="mb-8 flex sm:justify-between items-center w-full right-timeline">
          <div className="order-1  sm:w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800  w-8 h-8 rounded-full ml-[-20px] mr-4 sm:mx-0">
            <h1 className="mx-auto font-semibold text-lg text-white ">3</h1>
          </div>
          <div className=" box1 order-1  rounded-lg  w-[90%] sm:w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">
              Rewards and Passive Income:
            </h3>
            <p className="text-sm md:text-lg italic leading-snug tracking-wide text-white text-opacity-100">
              Within our 5000 NFT Collection there will be 777 special and rare
              NFTs called THE DEADLY SINNERS. These exclusive NFTs will have
              special benefits, but the greatest benefit will be that the 50% of
              the profits of our club (gambling games, horse races, inside-club
              consumables profits and more) will be split between the holders of
              the 777 Deadly Sinners as PASSIVE INCOME. If you didn’t get one of
              the Deadly Sinners, the rest of the collection will benefit from
              the 20% of the profits.
            </p>
          </div>
        </div>

        {/* <!-- left timeline --> */}
        <div className="mb-8 flex sm:justify-between sm:flex-row-reverse items-center w-full left-timeline ">
          <div className="order-1 sm:w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800  w-8 h-8 rounded-full ml-[-20px] mr-4 sm:mx-0">
            <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
          </div>
          <div className="box1 order-1 rounded-lg  w-[90%] sm:w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">
              Nightlife development :
            </h3>
            <p className="text-sm md:text-lg italic font-medium leading-snug tracking-wide text-white text-opacity-100">
              The nightlife is the main core of this project, simply because
              this will be the place in which Sinners all over the world will
              meet to chat, drink, and play betting games, but mainly to build a
              community.
              <br /> <br />
              Our club will consist of different areas in which there will be
              different activities, including: <br />
              - Gambling hall (poker,blackjack,roulette, etc.)
              <br />
              - Sports and horse races betting lounge
              <br />
              - Wheel of Fortune
              <br />
              - NightClub
              <br />
              - Buisness Lounge
              <br />
              - VIP areas (Deadly Sinners Holders)
              <br />
              - And much more to come
              <br />
              <br />
              <br />
              Our plan is buying a 3x3 parcel in the Sandbox or Decentraland
              metaverse. The community will decide which one to buy. We will
              show our business projections.
            </p>
          </div>
        </div>

        {/* 5,6 */}

        <div className="mb-8 flex sm:justify-between items-center w-full right-timeline">
          <div className="order-1  sm:w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800  w-8 h-8 rounded-full ml-[-20px] mr-4 sm:mx-0">
            <h1 className="mx-auto font-semibold text-lg text-white ">5</h1>
          </div>
          <div className="box1 order-1  rounded-lg  w-[90%] sm:w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">
              Charity/Donations:
            </h3>
            <p className="text-sm md:text-lg italic leading-snug tracking-wide text-white text-opacity-100">
              The Sinners Club will contribute to building the leaders of
              tomorrow. As people who have been in that situation and have
              experienced the challenges that can be faced, we want to help and
              give back to the community. That is why we have decided to support
              these two neglected sectors so that students can focus on getting
              ahead without economic concerns and so that entrepreneurs have the
              momentum to start. <br /> <br />
              We will give a percentage of profits to holders with student debt
              and to those entrepreneurs who need that little boost in order to
              make things happen.
            </p>
          </div>
        </div>

        {/* <!-- left timeline --> */}
        <div className="mb-8 flex sm:justify-between sm:flex-row-reverse items-center w-full left-timeline ">
          <div className="order-1 sm:w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800  w-8 h-8 rounded-full ml-[-20px] mr-4 sm:mx-0">
            <h1 className="mx-auto text-white font-semibold text-lg">6</h1>
          </div>
          <div className="box1 order-1  rounded-lg  w-[90%] sm:w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">
              Sold out spending:
            </h3>
            <p className="text-sm md:text-lg italic font-medium leading-snug tracking-wide text-white text-opacity-100">
              When we sell out our plan is to: <br /> <br />
              -Buy land in the Sandbox/Decentraland and develop the core of the
              project for approx. $100,000
              <br />
              -Giveaway $200,000 in ETH
              <br />
              -We will host events for holders in Puerto Rico, Miami and Los
              Angeles
              <br />
              -Giveaway of $200,000 USD in prizes between holders with 5+ NFTs
              of our collection
              <br />
              -Keep hosting poker/blackjack tournaments with BIG Cash prizes
              <br />
              -Most importantly, we will use the funds to help our holders in
              their entrepreneurial and education needs
            </p>
          </div>
        </div>

        {/* <!-- right timeline --> */}

        {/* <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800  w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
          </div>
          <div className="order-1 bg-gray-400 rounded-lg  w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">
              Lorem Ipsum
            </h3>
            <p className="text-sm md:text-lg italic leading-snug tracking-wide text-gray-900 text-opacity-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div> */}

        {/* <!-- left timeline --> */}
        {/* <div className="mb-8 flex justify-between sm:flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800  w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
          </div>
          <div className="order-1 bg-red-400 rounded-lg  w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
            <p className="text-sm md:text-lg italic font-medium leading-snug tracking-wide text-white text-opacity-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Roadmap;
