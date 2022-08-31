import React from "react";
import Card from "./Card";
import SimpleSlider from "./SimpleSlideer";

function Artist({ toTP }) {
  return (
    <div ref={toTP} className="horse_track artist  w-full pb-12 ">
      <div className=" h-[100px]"></div>
      <div className="  text-white  max-w-[90%] mx-auto md:h-screen text-center">
        <div className=" box1 w-[80%] sm:w-[50%] md:w-[30%] mx-auto py-2 text-4xl md:text-6xl font-bold tracking-widest">
          Our Team
        </div>
        <br />
        <div>
          {/* Meet The Artists Taking Their 3D Art From The Screen Of Blockbusters
          Into The Metaverse <br />
          <br />
          Prime Ape Planet is brought to you by three world-renowned digital
          artists. <br />
          <br />
          You may not know it, but you’ve probably seen and maybe even admired
          their work… <br />
          <br />
          As they became the top choice for the most influential media companies
          in the world. */}
          <br />
          <br />
          {/* <Card /> */}
          <SimpleSlider />
        </div>
      </div>
    </div>
  );
}

export default Artist;
