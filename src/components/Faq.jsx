import React from "react";
import { Disclosure } from "@headlessui/react";

function Faq({ toFaq }) {
  return (
    <div className=" ">
      <div
        ref={toFaq}
        className="pt-80 pb-28 sm:pt-10 max-w-[80%] mx-auto text-white "
      >
        {/* <div className=" w-[50%] text-white border-r-4 border-[#0291BE] text-5xl pb-2 my-8 md:my-32 text-center">
        {" "}
        - - - - - - - - - - -
      </div> */}
        <div className=" h-[100px]"></div>

        <div className="text-5xl mb-4 font-bold tracking-widest">FAQ</div>
        <div className="box3 p-2">
          {" "}
          <Disclosure>
            <Disclosure.Button className="py-2 w-full text-left text-xl">
              - DOES THE SINNERS CLUB NFT HAVE ANY UTILITY?{" "}
              <a class="arrow-down-close" onclick="openDropdown(this)"></a>
            </Disclosure.Button>
            <Disclosure.Panel className="text-white text-lg font-[400] italic">
              With The Sinners Club NFT you won´t only get a unique hand-drawn
              piece of art made by our high profiled artist but you will also
              get a profit-share of our club accompanied by other exclusive
              benefits.
            </Disclosure.Panel>
          </Disclosure>
        </div>

        <div className="line my-2 w-full h-[1px] bg-gray-300 rounded-lg"></div>
        <div className="box3 p-2">
          <Disclosure>
            <Disclosure.Button className="py-2 w-full text-left text-xl">
              - HOW MUCH CAN I EARN HOLDING THE SINNERS CLUB NFT{" "}
            </Disclosure.Button>
            <Disclosure.Panel className="text-white text-lg font-[400] italic">
              Within our 5000 NFT Collection there will be 777 special and rare
              NFTs called THE DEADLY SINNERS. The 50% of the club’s profits will
              be distributed to these 777 deadly sinners, the rest of the
              collection will benefit from the 20%. We will constantly drop more
              dynamics in order to earn more benefits.
            </Disclosure.Panel>
          </Disclosure>
        </div>
        <div className="line my-2 w-full h-[1px] bg-gray-300 rounded-lg"></div>
        <div className="box3 p-2">
          <Disclosure>
            <Disclosure.Button className="py-2 w-full text-left text-xl">
              - WHEN WILL THE SINNERS CLUB LAUNCH TAKE PLACE?
            </Disclosure.Button>
            <Disclosure.Panel className="text-white text-lg font-[400] italic">
              The launch date is to be announced. The plan is to have them take
              over the Metaverse by the end of April . Further updates will be
              revealed to the exclusive Discord community of early supporters
            </Disclosure.Panel>
          </Disclosure>{" "}
        </div>
        <div className="line my-2 w-full h-[1px] bg-gray-300 rounded-lg"></div>
        <div className="box3 p-2">
          <Disclosure>
            <Disclosure.Button className="py-2 w-full text-left text-xl">
              - HOW CAN I JOIN THE SINNERS CLUB?
            </Disclosure.Button>
            <Disclosure.Panel className="text-white text-lg font-[400] italic">
              Over 10,000 members compete for a White List spot on our Discord.
              Although we still have spots left, they will all be filled by
              early supporters of the project who are ready to mint once we
              announce the launch. We will be launching different dynamics to
              earn a spot in our WL across our official social media links. Stay
              alert.
            </Disclosure.Panel>
          </Disclosure>
        </div>
        <div className="line my-2 w-full h-[1px] bg-gray-300 rounded-lg"></div>
        <div className="box3 p-2">
          <Disclosure>
            <Disclosure.Button className="py-2 w-full text-left text-xl">
              - WHAT IS THE DIFFERENCE BETWEEN THE SINNERS CLUB AND OTHER NFT
              PROJECTS?{" "}
            </Disclosure.Button>
            <Disclosure.Panel className="text-white text-lg font-[400] italic">
              We are a COMMUNITY centered project, rest assured to know we’re
              right there with you for the long haul. We are keen on building a
              strong and united community, where you’ll be making decisions as a
              community. With that being said, our project will reward those
              holders with student debt and also those entrepreneurs with
              grandiose ideas.
            </Disclosure.Panel>
          </Disclosure>
        </div>
        <div className="line my-2 w-full h-[1px] bg-gray-300 rounded-lg"></div>
        <div className="box3 p-2">
          <Disclosure>
            <Disclosure.Button className="py-2 w-full text-left text-xl">
              - HOW MANY SINNERS WILL BE LAUNCHED OVER THE METAVERSE?
            </Disclosure.Button>
            <Disclosure.Panel className="text-white text-lg font-[400] italic">
              5000. That’s the number of Sinners we have commited to create by
              accentuating exclusiveness over quantity. As we expect the demand
              to overpass the supply.
            </Disclosure.Panel>
          </Disclosure>{" "}
        </div>
        <div className="line my-2 w-full h-[1px] bg-gray-300 rounded-lg"></div>
        <div className="box3 p-2">
          <Disclosure>
            <Disclosure.Button className="py-2 w-full text-left text-xl">
              - WHAT BLOCKCHAIN IS THE PROJECT HOSTED ON?
            </Disclosure.Button>
            <Disclosure.Panel className="text-white text-lg font-[400] italic">
              The Sinners Club is on the Ethereum Blockchain.
            </Disclosure.Panel>
          </Disclosure>{" "}
        </div>
        <div className="line my-2 w-full h-[1px] bg-gray-300 rounded-lg"></div>
        <div className="box3 p-2">
          <Disclosure>
            <Disclosure.Button className="py-2 w-full text-left text-xl">
              - WHERE CAN I GET THE SINNERS CLUB NFT?
            </Disclosure.Button>
            <Disclosure.Panel className="text-white text-lg font-[400] italic">
              You can buy them on{" "}
              <a className="text-[#0291BE] uppercase" href="#">
                OpenSea
              </a>{" "}
              .
            </Disclosure.Panel>
          </Disclosure>{" "}
        </div>
        <div className="line my-2 w-full h-[1px] bg-gray-300 rounded-lg"></div>

        {/* <div className="text-2xl mt-16  mb-4 font-light">
        OK, ENOUGH… I CAN’T WAIT TO GET MYSELF A PRIME AP
      </div>
      <div className="mb-[8rem]">
        Once you’re ready to embark on this journey to secure your own piece of
        iconic digital art,{" "}
        <span className="text-[#0291BE] uppercase">
          {" "}
          <a href="#">head over to the Official Discord channel.</a>
        </span>{" "}
        If you’re reading this before the launch, you’ll still have a chance to
        get your hands on a rare Prime Ape.
      </div> */}
      </div>
    </div>
  );
}

export default Faq;
