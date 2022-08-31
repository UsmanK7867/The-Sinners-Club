// import "./App.css";

import Tilt from "react-parallax-tilt";
import React, { useEffect, useState, Fragment, useRef } from "react";
import { ethers } from "ethers";
import { Link } from "react-router-dom";
import sinnersClubABI from "./../sinnersClubABI.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Menu, Dialog, Transition } from "@headlessui/react";
import { BiDownArrow } from "react-icons/bi";

function Mint() {
  const [isConnected, setIsConnected] = useState(false);
  const [hasMetaMask, setHasMetaMask] = useState(false);

  const [account, setAccount] = useState("");
  const [owner, setOwner] = useState("");
  const [show, setShow] = useState(true);
  const [chainId, setChainId] = useState(true);
  // counter
  const [counter, setCounter] = useState(1);

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    if (counter > 1) setCounter((count) => count - 1);
  };

  // Dialog

  let [isOpen, setIsOpen] = useState(false);
  let [isOpen1, setIsOpen1] = useState(false);
  let [isOpen2, setIsOpen2] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  function closeModal1() {
    setIsOpen1(false);
  }

  function openModal1() {
    setIsOpen1(true);
  }
  function closeModal2() {
    setIsOpen2(false);
  }

  function openModal2() {
    setIsOpen2(true);
  }

  // Get Whitelisted Input Values

  let addAddress = useRef();
  let checkAddress = useRef();
  // Whitlisting Functions
  const addToWhiteList = async () => {
    console.log("Address", addAddress.current.value.split(","));

    if (isConnected) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // const signer = provider.getSigner();

      const sinnersClubContract = new ethers.Contract(
        sinnersClubContractAddress,
        sinnersClubABI,
        provider.getSigner()
      );

      // await sinnersClubContract.addWL(addAddress.current.value);
      await sinnersClubContract.addWL(addAddress.current.value.split(","));
    } else {
      connect();
    }
  };

  const checkIsWhiteListed = async () => {
    console.log(checkAddress.current.value);
    if (isConnected) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // const signer = provider.getSigner();

      const sinnersClubContract = new ethers.Contract(
        sinnersClubContractAddress,
        sinnersClubABI,
        provider.getSigner()
      );

      let res = await sinnersClubContract.isWW(checkAddress.current.value);
      alert(res);
    } else {
      connect();
    }
  };

  // Transaction Maeesage
  // Message After Trasaction
  const Msg = ({ closeToast, toastProps, hash }) => (
    <div className="w-[100%] mx-auto relative">
      {/* Token Minted to ${account} <br /> Block URI: */}
      <a
        className=" break-words text-underline  text-blue-900"
        href={`https://etherscan.io/tx/${hash}`}
        target="_blank"
      >
        https://etherscan.io/tx/${hash}
      </a>
      {/* <button>Retry</button> */}
      {/* <button onClick={closeToast}>Close</button> */}
    </div>
  );
  // error msg
  const ErrorMsg = ({ closeToast, toastProps, e }) => (
    <div className="w-[100%] mx-auto relative">
      {/* Token Minted to ${account} <br /> Block URI: */}
      {e}
      {/* <button>Retry</button> */}
      {/* <button onClick={closeToast}>Close</button> */}
    </div>
  );

  // const displayMsg = () => {
  //   toast(<Msg />)
  //   // toast(Msg) would also work
  // }
  const notify = (hash) =>
    toast(
      <Msg hash={hash} />,

      {
        position: "top-center",

        autoClose: 5000,
        hideProgressBar: false,
        // closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  const notifyError = (e) =>
    toast(
      <ErrorMsg e={e} />,

      {
        position: "top-center",

        autoClose: 5000,
        hideProgressBar: false,
        // closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );

  //COntract
  const [isAdmin, setIsAdmin] = useState(false);

  const [totalSupply, setTotalSupply] = useState();
  const [maxTokens, setMaxTokens] = useState();
  const [isRevealed, setIsRevealed] = useState(false);
  const [isPreSale, setIsPreSale] = useState(false);
  // tESTNET
  // const sinnersClubContractAddress =
  //   "0x4FFED19F3358c985882907E2d033a8Df01618790";
  // const sinnersClubContractAddress =
  //   "0xA3a5d1285C9171c9f31503E71b61dfAC305096FC";
  // Main Net
  const sinnersClubContractAddress =
    "0x2B7F8024684DB9C85BcB58829e38AbcDc8ecFa1B";
  const transaction = async () => {
    console.log("in");

    if (isConnected) {
      // Mint
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const sinnersClubContract = new ethers.Contract(
        sinnersClubContractAddress,
        sinnersClubABI,
        provider.getSigner()
      );
      let options;
      let c;
      if (!isAdmin) {
        if (isPreSale) {
          // console.log(await cyberShareContract.preSaleCost());
          // options = { value: ethers.utils.parseEther("0.001") };
          let p = await sinnersClubContract.PricePS();
          console.log(p);
          let ethValue = ethers.utils.formatEther(p);
          console.log(ethValue);
          let t = ethValue * counter;
          console.log(t);

          options = { value: ethers.utils.parseEther(t + "") };
        } else {
          // options = { value: ethers.utils.parseEther("0.01") };
          let p = await sinnersClubContract.Price();
          console.log(p);
          let ethValue = ethers.utils.formatEther(p);
          console.log(ethValue);
          let t = ethValue * counter;
          console.log(t);

          options = { value: ethers.utils.parseEther(t + "") };
        }
        try {
          c = await sinnersClubContract.mint(counter, options);
          setTotalSupply(totalSupply + counter);
        } catch (e) {
          notifyError(e.message.split(" ").slice(0, 5).join(" "));
          // console.log("Error:", e.message.split(" ").slice(0, 10).join(" "));
          // alert(e.message);
        }
      } else {
        try {
          c = await sinnersClubContract.mint(1);
          setTotalSupply(totalSupply + 1);
        } catch (e) {
          notifyError(e.message.split(" ").slice(0, 5).join(" "));
          // console.log("Error:", e.message.split(" ").slice(0, 10).join(" "));
          // alert(e.message);
        }
      }

      console.log(c);
      if (c != undefined) notify(c.hash);

      // const provider = new ethers.providers.Web3Provider(window.ethereum);
      // //Send Ethers Transaction Exapmle
      // const signer = provider.getSigner();
      // const tx = signer.sendTransaction({
      //   to: account,
      //   value: ethers.utils.parseEther("0.09"),
      // });
      // // console.log(addr)
      // console.log(tx);
      //   let params = [
      //     {
      //       from: account[0],
      //       to: "0xDd5eB059128Eb4E8956B482eB09A196ee5333BD9",
      //       gas: Number(21000).toString(16),
      //       gasPrice: Number(2500000).toString(16),
      //       value: Number(1000000000000000000).toString(16),
      //       //   value: Number(100000).toString(16),
      //       //   value: ethers.utils.parseEther(0.2).toString(16),
      //       //   value: "0x9184e72a",
      //     },
      //   ];
      //   let result = await window.ethereum.request({
      //     method: "eth_sendTransaction",
      //     params,
      //   });
      //   console.log(result);
    } else {
      connect();
    }
  };

  const reveal = async () => {
    if (isConnected) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // const signer = provider.getSigner();

      const sinnersClubContract = new ethers.Contract(
        sinnersClubContractAddress,
        sinnersClubABI,
        provider.getSigner()
      );
      try {
        await sinnersClubContract.RevealMode();
        setIsRevealed(!isRevealed);
      } catch (e) {
        notifyError(e.message.split(" ").slice(0, 5).join(" "));
        // console.log("Error:", e.message.split(" ").slice(0, 10).join(" "));
        // alert(e.message);
      }
    } else {
      connect();
    }
  };
  const preSale = async () => {
    if (isConnected) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // const signer = provider.getSigner();

      const sinnersClubContract = new ethers.Contract(
        sinnersClubContractAddress,
        sinnersClubABI,
        provider.getSigner()
      );
      try {
        await sinnersClubContract.PresalesMode(!isPreSale);
        setIsPreSale(!isPreSale);
      } catch (e) {
        notifyError(e.message.split(" ").slice(0, 5).join(" "));
        // console.log("Error:", e.message.split(" ").slice(0, 10).join(" "));
        // alert(e.message);
      }
    } else {
      connect();
    }
  };
  // Withdraw
  const withdraw = async () => {
    if (isConnected) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // const signer = provider.getSigner();

      const sinnersClubContract = new ethers.Contract(
        sinnersClubContractAddress,
        sinnersClubABI,
        provider.getSigner()
      );
      try {
        await sinnersClubContract.withdraw();
      } catch (e) {
        notifyError(e.message.split(" ").slice(0, 5).join(" "));
        // console.log("Error:", e.message.split(" ").slice(0, 10).join(" "));
        // alert(e.message);
      }
    } else {
      connect();
    }
  };
  // BLockchain COnnectionn
  const connect = async () => {
    if (window.ethereum) {
      //   alert("detected");
      setHasMetaMask(true);

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        if (accounts.length) {
          setIsConnected(true);
          setAccount(accounts[0]);
          // console.log(accounts);
        }
      } catch (e) {
        console.log("Error Connecting...", e.message);
      }
    } else {
      console.log("install Metamast extension to continue");
      setHasMetaMask(false);
    }
  };
  // console.log(totalSupply);
  useEffect(async () => {
    connect();
    if (window.ethereum) {
      setChainId(await window.ethereum.request({ method: "eth_chainId" }));

      //   alert("detected");
      // setHasMetaMask(true);

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // const signer = provider.getSigner();
      // if (window.ethereum.isConnected()) {
      //   setIsConnected(true);
      // }
      // let wallet = await provider.getSigner().getAddress();

      // let owner = "0x488A8CA56f29BFbe28e6f4cf898D5c3C1455deDa";
      // if (wallet === owner) {
      //   setIsAdmin(true);
      // }
      const sinnersClubContract = new ethers.Contract(
        sinnersClubContractAddress,
        sinnersClubABI,
        provider.getSigner()
      );
      let wallet = await provider.getSigner().getAddress();
      let owner1 = ethers.BigNumber.from(await sinnersClubContract.owner());
      console.log(owner1._hex);
      setOwner(owner1._hex);
      // console.log(wallet + "   " + owner._hex);

      if (wallet == owner1._hex) {
        setIsAdmin(true);
        // console.log(wallet + "   " + owner._hex);
      }
      setTotalSupply(
        ethers.BigNumber.from(
          await sinnersClubContract.totalSupply()
        ).toNumber()
      );
      setMaxTokens(
        ethers.BigNumber.from(await sinnersClubContract.MaxToken()).toNumber()
      );
      console.log(
        ethers.BigNumber.from(await sinnersClubContract.Price()).toString()
      );
      // console.log(await sinnersClubContract.baseURI());
      // setAccount1(BigNumber.from(await cyberShareContract.ownerOf(count)));
      setIsPreSale(await sinnersClubContract.isPresales());
      setIsRevealed(await sinnersClubContract.isReveal());
      // console.log(await cyberShareContract.owner);
      // console.log(typeof count);
      // console.log(account1._hex);
    }
  }, [chainId]);

  console.log(chainId);
  if (window.ethereum) {
    // setHasMetaMask(true);
    window.ethereum.on("chainChanged", (chainId) => {
      setChainId(chainId);
    });
    window.ethereum.on("accountsChanged", (accounts) => {
      // If user has locked/logout fromMMetaMask, this resets the accounts array to empty
      if (!accounts.length) {
        setAccount("");
        setIsAdmin(false);
        setIsConnected(false);
        // logic to handle what happens once MetaMask is locked
      } else {
        if (accounts[0] == owner) {
          setIsAdmin(true);
          setAccount(accounts[0]);
        } else if (account[0] != owner) {
          setIsAdmin(false);
          setAccount(accounts[0]);
        }
      }
      //  else {
      //   setAccount(accounts[0]);
      // }
    });
  }

  return (
    <div className="Mint bg-black py-4  px-8 h-full md:h-[100vh] lg:h-{100%} w-[100%]">
      <ToastContainer />

      {/* Dialog add Whitlist */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Add to Whitelist
                </Dialog.Title>
                <div className="mt-2">
                  <input
                    ref={addAddress}
                    type="text"
                    className="border-2 border-black px-4 py-2 w-full rounded-2xl "
                    placeholder="Address"
                  />
                </div>

                <div className="mt-4 ">
                  <button
                    type="button"
                    className=" button ml-[70%] inline-flex justify-center px-8 py-2 text-sm font-medium hover:border-white hover:border-2 bg-black text-white cursor-pointer border border-transparent rounded-2xl   focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={addToWhiteList}
                  >
                    Add
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      {/* Dialog ENd */}

      {/* Dialog check is Whitlist */}
      <Transition appear show={isOpen2} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal2}
        >
          <div className="min-h-screen w-[90%] mx-auto  text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Is Whitelisted
                </Dialog.Title>
                <div className="mt-2">
                  <input
                    ref={checkAddress}
                    type="text"
                    className="border-2 border-black px-4 py-2 w-full rounded-2xl "
                    placeholder="Address"
                  />
                </div>

                <div className="mt-4 ">
                  <button
                    type="button"
                    className=" button ml-[70%] inline-flex justify-center px-8 py-2 text-sm font-medium hover:border-white hover:border-2 bg-black text-white cursor-pointer border border-transparent rounded-2xl   focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={checkIsWhiteListed}
                  >
                    Check
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      {/* Dialog ENd */}

      <div
        className={` nav transition duration-300 ease-in-out bg-black bg-opacity-40 py-3 fixed w-full ${
          !show && "hidden"
        } `}
      >
        <div className="flex  sm:w-[90%]   mx-auto text-white items-center tracking-wide text-[0.7rem] md:text-xs lg:text-base ">
          <div className="font-bold tracking-widest mr-auto  text-center md:mx-0 sm:text-left">
            {/* THE SINNERS <br />
          <span className="font-normal tracking-wide mx-auto">Club</span> */}
            <Link to="/">
              <img
                src="./imgs/main_logo.png"
                className="h-[50px] pt-2 w-[80%] sm:w-[70%] md:w-[80%] "
                alt=""
              />
            </Link>
          </div>
          {/* <div className=" hidden sm:inline-block hover:text-[#0291BE] ml-auto mr-6 underline">
          ABOUT US
        </div> */}

          <div className=" active:text-xl md:text-xs lg:text-lg active:text-rose-200 cursor-pointer hidden ml-auto md:inline-block hover:text-[#0291BE]  mr-6">
            <Link to="/"> HOME</Link>
          </div>
          {/* {network.chainID != 4?"" } */}
          {/* {isAdmin ? (
            <div
              className=" hidden md:inline-block button  rounded-2xl py-2 mr-4 px-4 hover:border-white hover:border-2 bg-black text-white cursor-pointer"
              onClick={isAdmin ? reveal : null}
            >
              REVEAL {isRevealed ? "(ON)" : "(OFF)"}
              
            </div>
          ) : null}
          {isAdmin ? (
            <div
              className=" hidden md:inline-block button  rounded-2xl py-2 mr-4 px-4 hover:border-white hover:border-2 bg-black text-white cursor-pointer"
              onClick={isAdmin ? preSale : null}
            >
              PRESALE {isPreSale ? "(ON)" : "(OFF)"}
            </div>
          ) : null}
          {isAdmin ? (
            <div
              className=" hidden md:inline-block button  rounded-2xl py-2 mr-4 px-4 hover:border-white hover:border-2 bg-black text-white cursor-pointer"
              onClick={isAdmin ? withdraw : null}
            >
              WITHDRAW
            </div>
          ) : null}
          {isAdmin ? (
            <div
              className=" hidden md:inline-block button  rounded-2xl py-2 mr-4 px-4 hover:border-white hover:border-2 bg-black text-white cursor-pointer"
              onClick={isAdmin ? openModal : null}
            >
              UPDATE WHITELIST
            </div>
          ) : null}
          {isAdmin ? (
            <div
              className=" hidden md:inline-block button  rounded-2xl py-2 mr-4 px-4 hover:border-white hover:border-2 bg-black text-white cursor-pointer"
              onClick={isAdmin ? openModal2 : null}
            >
              IS WHITELISTED
            </div>
          ) : null} */}

          {/* <div className="active:text-xl md:text-xs lg:text-lg active:text-rose-200 cursor-pointer hidden  md:inline-block hover:text-[#0291BE]  mr-6">
            <Link to="/#roadmap"> ROADMAP</Link>
          </div>
          <div className="active:text-xl min-w-[120px] md:text-xs lg:text-lg active:text-rose-200 cursor-pointer hidden md:inline-block hover:text-[#0291BE]  mr-6">
            TEAM PRESENTATION
          </div>
          <div className="active:text-xl md:text-xs lg:text-lg active:text-rose-200 cursor-pointer hidden md:inline-block hover:text-[#0291BE]  mr-6">
            FAQ
          </div> */}
          <div
            className="hidden md:inline-block button  rounded-2xl py-2 mr-4 px-4 border-white border-2 bg-black text-white cursor-pointer"
            onClick={isConnected ? null : connect}
          >
            {hasMetaMask ? (
              isConnected ? (
                "Connected"
              ) : (
                "Connect"
              )
            ) : (
              <a
                href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
                target="_blank"
              >
                Install MetaMask
              </a>
            )}
          </div>
          {/* Mobile DropDown */}

          <Menu
            as="div"
            style={{ zIndex: "3" }}
            className={`${
              !isAdmin ? "md:hidden" : ""
            } relative inline-block text-left`}
          >
            <div>
              <Menu.Button className="mr-16 button rounded-[100%]  inline-flex justify-center  p-3  text-sm font-medium text-white   border-white border-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                <BiDownArrow />
                {/* <ChevronDownIcon
                      className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                      aria-hidden="true"
                    /> */}
              </Menu.Button>
            </div>

            <Menu.Items
              style={{ zIndex: "100 !impotant" }}
              className=" absolute right-10 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <Link to="/">
                      {" "}
                      <button
                        // onClick={openModal}
                        className={`${
                          active ? "bg-black text-white" : "text-gray-900"
                        } md:hidden group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        HOME
                      </button>
                    </Link>
                  )}
                </Menu.Item>
                {isAdmin ? (
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={isAdmin ? reveal : null}
                        className={`${
                          active ? "bg-black text-white" : "text-gray-900"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Reveal {isRevealed ? "(ON)" : "(OFF)"}
                      </button>
                    )}
                  </Menu.Item>
                ) : null}
                {isAdmin ? (
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={isAdmin ? preSale : null}
                        className={`${
                          active ? "bg-black text-white" : "text-gray-900"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        PreSale {isPreSale ? "(ON)" : "(OFF)"}
                      </button>
                    )}
                  </Menu.Item>
                ) : null}
                {isAdmin ? (
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={isAdmin ? withdraw : null}
                        className={`${
                          active ? "bg-black text-white" : "text-gray-900"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        WITHDRAW
                      </button>
                    )}
                  </Menu.Item>
                ) : null}
                {isAdmin ? (
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={openModal}
                        className={`${
                          active ? "bg-black text-white" : "text-gray-900"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Add to WHITELIST
                      </button>
                    )}
                  </Menu.Item>
                ) : null}
                {isAdmin ? (
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={openModal2}
                        className={`${
                          active ? "bg-black text-white" : "text-gray-900"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Is WHITELISTED
                      </button>
                    )}
                  </Menu.Item>
                ) : null}
              </div>
              <div className="px-1 py-1 md:hidden">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={isConnected ? null : connect}
                      className={`${
                        isConnected ? "bg-black text-white" : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {hasMetaMask ? (
                        isConnected ? (
                          "Connected"
                        ) : (
                          "Connect"
                        )
                      ) : (
                        <a
                          href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
                          target="_blank"
                        >
                          Install MetaMask
                        </a>
                      )}
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Menu>

          {/* Mobile DropDown End */}
        </div>
      </div>

      {/* <div className="flex sm:w-[90%] mx-auto justify-between items-center">
        <Link to="/">
          <img
            src="./imgs/main_logo.png"
            className=" h-[50px] cursor-pointer pt-2 w-[70%] sm:w-[50%] md:w-[190%]"
            alt=""
          />
        </Link>
        <Link to="/">
          {" "}
          <div className=" active:text-xl md:text-xs lg:text-lg active:text-rose-200 cursor-pointer hidden ml-auto sm:inline-block hover:text-[#0291BE]  mr-6">
            HOME
          </div>
        </Link>
        <Link to="/">
          {" "}
          <div className="active:text-xl md:text-xs lg:text-lg active:text-rose-200 cursor-pointer hidden  sm:inline-block hover:text-[#0291BE]  mr-6">
            ROADMAP
          </div>
        </Link>
        <Link to="/">
          {" "}
          <div className="active:text-xl min-w-[120px] md:text-xs lg:text-lg active:text-rose-200 cursor-pointer hidden sm:inline-block hover:text-[#0291BE]  mr-6">
            TEAM PRESENTATION
          </div>
        </Link>
        <Link to="/">
          {" "}
          <div className="active:text-xl md:text-xs lg:text-lg active:text-rose-200 cursor-pointer hidden sm:inline-block hover:text-[#0291BE]  mr-6">
            FAQ
          </div>
        </Link>

        <div
          className=" button  rounded-2xl py-2 px-4 border-white border-2 bg-black text-white cursor-pointer"
          onClick={isConnected ? null : connect}
        >
          {isConnected ? "Connected" : "Connect"}
        </div>
      </div> */}

      <div className="md:flex mt-20 mx-auto w-[100%] py-20">
        {/* <Tilt style={{ zIndex: "-1 !impotant" }}> */}
        <div className="md:pl-36  pt-2">
          <img
            src="./imgs/main_nft.gif"
            className="w-[60%] md:w-[80%] md:h-[100%] min-h-[350px] min-w-[300px] mx-auto "
            alt=""
          />
        </div>
        {/* </Tilt> */}
        <div className=" w-[90%] md:w-[80%] mx-auto lg:pl-28 lg:pr-40 lg:py-12">
          <img
            src="./imgs/main_logo.png"
            className=" mx-auto h-[60px] w-[100%] "
            alt=""
          />
          <div
            className={`text-center mx-auto text-2xl lg:text-3xl tracking-widest text-white pb-4 italic ${
              isConnected ? "hidden " : "block "
            }`}
          >
            <br /> Waiting for connection with Metamask <br /> Any Problems?
            Refresh the page & open Metamask{" "}
          </div>
          {chainId != "0x1" ? (
            <p className="text-center text-red-800 p-4">
              Connect to Etherium Main Network
            </p>
          ) : null}
          <div className="text-white flex justify-center mt-4  ">
            <button
              className="control__btn border-2 text-lg border-white px-3 rounded-xl"
              onClick={decrease}
            >
              -
            </button>{" "}
            <button className="mx-4">{counter}</button>
            <button
              className="control__btn border-2 text-lg border-white px-3 rounded-xl"
              onClick={increase}
            >
              +
            </button>
          </div>
          <button
            className="button tracking-widest text-white px-12 py-4 border-2 w-[100%] font-bold italic mt-4"
            onClick={isConnected ? transaction : null}
          >
            {isConnected ? `Mint` : "Waiting.."}
            {/* {isConnected
              ? `Mint (   ${totalSupply != undefined ? totalSupply : 0}/${
                  maxTokens != undefined ? maxTokens : 0
                }          ) `
              : "Waiting.."} */}
          </button>
        </div>
      </div>
      <div className="sm:hidden h-[100px]"></div>
    </div>
  );
}

export default Mint;
