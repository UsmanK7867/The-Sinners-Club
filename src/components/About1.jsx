import React from "react";

function About1() {
  return (
    <div className=" about pt-2 w-[90%] sm:w-[50%] mx-auto  pb-8 shadow">
      {/* <div className="mb-12 text-3xl sm:text-4xl md:text-6xl text-white text-center font-bold tracking-widest ">
        Mission And Vision
      </div> */}
      <div className=" w-full   ">
        <h3 className="mb-6 font-bold text-white text-3xl ">Mission</h3>
        <p className="box1 p-4  text-xl  italic tracking-wide text-white text-opacity-100 ml-1 ">
          To build an ambitious community with the goal of helping students and
          entrepreneurs of their own community, by enjoying top-notch
          speculative and fun activities.
        </p>
        <h3 className="mb-6 font-bold text-white text-3xl mt-12">Vision</h3>
        <p className="box1 p-4 p-4text-xl  italic tracking-wide text-white text-opacity-100 ml-1 ">
          We want to build an exclusive club in the metaverse, where you can
          enjoy an amazing nightlife, and at the same time you’ll be earning
          your share of the profits by holding our NFT. This is a club for those
          who fear being average and want to stand out.
        </p>
      </div>
    </div>
  );
}

export default About1;
