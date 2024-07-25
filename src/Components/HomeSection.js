import React, { useEffect, useRef, useState } from "react";
import {
  FaArrowRight,
  FaCartArrowDown,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import { useScroll } from "framer-motion";
import Scroll from "./Scroll";
import VideoSection from "./VideoSection";
import Coursel from "./Coursel";
import Clothing from "./Clothes";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";

const HomeSection = () => {
  const [sidebar, setsidebar] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const [toggle, settoggle] = useState(false);
  useEffect(() => {
    scrollYProgress.onChange((val) => {
      if (val === 1) {
        settoggle(true);
      } else {
        settoggle(false);
      }
    });
  });
  const arr = [
    {
      image:
        "https://sidemenclothing.com/cdn/shop/files/HotWheelsRacingJacket1.webp?v=1714472628&width=600",
      name: "XIX ARC HOODIE",
      description: "Vintage black",
      price: "3,300.00",
      price2: "6,600.00",
    },
    {
      image:
        "https://sidemenclothing.com/cdn/shop/files/HotWheelsHoodie3.webp?v=1714472666&width=600",
      name: "KSI FOREVER HOODIE",
      description: "Vintage black",
      price: "1,700.00",
      price2: "6,600.00",
    },
    {
      image:
        "https://sidemenclothing.com/cdn/shop/files/HotWheelsT-ShirtBlack1.webp?v=1714472712&width=600",
      name: "Hot Wheels T-Shirt Black",
      description: "Vintage black",
      price: "1,000.00",
      price2: "2,000.00",
    },
    {
      image:
        "https://sidemenclothing.com/cdn/shop/files/HotWheelsT-ShirtWhite1.webp?v=1714472690&width=600",
      name: "Hot Wheels T-Shirt White",
      description: "Vintage black",
      price: "1,000.00",
      price2: "2,000.00",
    },
    {
      image:
        "https://sidemenclothing.com/cdn/shop/files/HotWheelsCap1.webp?v=1714472558&width=600",
      name: "Hot Wheels Cap",
      description: "Vintage black",
      price: "500.00",
      price2: "1,000.00",
    },
    {
      image:
        "https://sidemenclothing.com/cdn/shop/files/HotWheelsBlanket.webp?v=1714472648&width=600",
      name: "Hot Wheels Blanket",
      description: "Vintage black",
      price: "2,000.00",
      price2: "4,000.00",
    },
    {
      image:
        "https://sidemenclothing.com/cdn/shop/files/HotWheelsGamingMat1.webp?v=1714472591&width=600",
      name: "Hot Wheels Gaming Mat",
      description: "Vintage black",
      price: "1,500.00",
      price2: "3,000.00",
    },
  ];
  const arr2 = [
    {
      image:
        "//sidemenclothing.com/cdn/shop/files/ImperialVarsityCapBlackStormGrey1.webp?v=1714472940&width=200 200w, //sidemenclothing.com/cdn/shop/files/ImperialVarsityCapBlackStormGrey1.webp?v=1714472940&width=300 300w, //sidemenclothing.com/cdn/shop/files/ImperialVarsityCapBlackStormGrey1.webp?v=1714472940&width=400 400w, //sidemenclothing.com/cdn/shop/files/ImperialVarsityCapBlackStormGrey1.webp?v=1714472940&width=500 500w, //sidemenclothing.com/cdn/shop/files/ImperialVarsityCapBlackStormGrey1.webp?v=1714472940&width=600 600w",
      name: "IMPERIAL VARSITY CAP",
      description: "Vintage black",
      price: "3,300.00",
      price2: "6,600.00",
    },
    {
      image:
        "//sidemenclothing.com/cdn/shop/files/KSISkullT-Shirt1.webp?v=1714472759&width=620",
      name: "KSI FOREVER HOODIE",
      description: "Vintage black",
      price: "1,700.00",
      price2: "6,600.00",
    },
    {
      image:
        "//sidemenclothing.com/cdn/shop/files/VarsityJerseyBlue1.webp?v=1714473400&width=620",
      name: "Hot Wheels T-Shirt Black",
      description: "Vintage black",
      price: "1,000.00",
      price2: "2,000.00",
    },
    {
      image:
        "//sidemenclothing.com/cdn/shop/files/ActivewearTrainingT-ShirtGrey1.webp?v=1714471737&width=620",
      name: "Hot Wheels T-Shirt White",
      description: "Vintage black",
      price: "1,000.00",
      price2: "2,000.00",
    },
    {
      image:
        "//sidemenclothing.com/cdn/shop/files/ImperialVarsityT-ShirtWhite1.webp?v=1714473276&width=620",
      name: "Hot Wheels Cap",
      description: "Vintage black",
      price: "500.00",
      price2: "1,000.00",
    },
    {
      image:
        "//sidemenclothing.com/cdn/shop/files/SDMNCardTrickT-Shirt1.webp?v=1714472744&width=620",
      name: "Hot Wheels Blanket",
      description: "Vintage black",
      price: "2,000.00",
      price2: "4,000.00",
    },
    {
      image:
        "https://sidemenclothing.com/cdn/shop/files/HotWheelsGamingMat1.webp?v=1714472591&width=600",
      name: "Hot Wheels Gaming Mat",
      description: "Vintage black",
      price: "1,500.00",
      price2: "3,000.00",
    },
  ];
  return (
    <div className="relative overflow-x-hidden">
      <div
        className={
          toggle
            ? "z-10 py-5 flex items-center content-center justify-around w-full text-white bg-black fixed "
            : "absolute flex  items-center content-center justify-around w-full text-white bg-transparent top-12"
        }
      >
        <div className=" lg:flex hidden items-center content-center justify-around text-[0.75rem] font-bold w-fit gap-x-4">
          <p className="lg:hidden">NEW</p>
          <p>COLLECTIONS</p>
          <p>CLOTHING</p>
          <p>ACCESSORIES</p>
          <p>GIFT CARDS</p>
          <p className="text-red-500">SUMMER SALE</p>
        </div>
        <div className="flex items-center content-center justify-center align-center gap-x-6 md:hidden">
          <RxHamburgerMenu
            onClick={() => {
              setsidebar((prev) => (prev ? false : true));
            }}
            fill="white"
            color="white"
            size={32}
          ></RxHamburgerMenu>
          <FaSearch />
        </div>
        <div>
          <img
            height={20}
            width={100}
            src="//sidemenclothing.com/cdn/shop/files/NavigationClassicLogoWhite_7816ce09-0cd7-407b-9e6d-ba2a13b53178.webp?v=1704293088&width=2000"
            alt="sidemen"
          />
        </div>
        <div className="items-center hidden text-sm font-bold lg:flex gap-x-5 justify-evenly">
          <p>ABOUT</p>
          <p>STORE</p>
          <p>SUPPORT</p>
          <div>
            <FaSearch />
          </div>
          <div>
            <FaUser />
          </div>
          <div>
            <FaCartArrowDown />
          </div>
        </div>
        <div className="block md:hidden">
          <FaCartArrowDown />
        </div>
      </div>
      {sidebar && (
        <div className="fixed block w-full h-full p-4 transition-all duration-150 ease-in bg-white left-3 top-3 bottom-3 right-4 z-2 animate ">
          <button
            className="p-2 mb-4 bg-gray-200 rounded-full"
            onClick={() => {
              setsidebar(false);
            }}
          >
            <IoIosClose size={28}></IoIosClose>
          </button>
          <div className="items-center content-center justify-around text-lg font-thin w-fit gap-y-4">
            <p className="p-2 relative after:absolute after:bottom-0 after:bg-black after:left-0 after:h-[2px] after:transition-all after:duration-300 after:ease-in hover:after:w-[50%] after:ml-2">
              NEW
            </p>
            <p className="p-2">COLLECTIONS</p>
            <p className="p-2">CLOTHING</p>
            <p className="p-2">ACCESSORIES</p>
            <p className="p-2">GIFT CARDS</p>
            <p className="p-2 text-red-500">SUMMER SALE</p>
          </div>
        </div>
      )}
      <VideoSection></VideoSection>

      <div
        ref={ref}
        className="absolute top-[80vh] w-full flex justify-center items-center"
      >
        <div className="gap-y-5">
          <p className="mb-5 text-xl font-semibold tracking-wider text-white">
            SUMMER SALE
          </p>
          <u className="text-white">
            <p className="flex items-center text-sm font-semibold text-white">
              <FaArrowRight fill="white" /> UP TO 60% OFF
            </p>
          </u>
        </div>
      </div>
      <div className="w-[100%] overflow-x-hidden ">
        <Scroll></Scroll>
      </div>
      <Clothing arr={arr}></Clothing>
      <Coursel></Coursel>
      <Clothing arr={arr2}></Clothing>
      <div className="grid w-full grid-cols-2 mt-16 bg-neutral-300/40 lg:grid-cols-3 ">
        <div className="items-center justify-center mt-4 ml-20 align-center">
          <p className="text-sm font-bold tracking-tight">SITEMAP</p>
          <p className="relative p-2 text-sm text-gray-500">NEW</p>
          <p className="relative p-2 text-sm text-gray-500">
            SDMN X HOT WHEELS
          </p>
          <p className="relative p-2 text-sm text-gray-500">COLLECTIONS</p>
          <p className="relative p-2 text-sm text-gray-500">CLOTHING</p>
          <p className="relative p-2 text-sm text-gray-500">ACCESSORIES</p>
          <p className="relative p-2 text-sm text-gray-500">GIFT CARDS</p>
          <p className="relative p-2 text-sm text-gray-500">SALE</p>
        </div>
        <div className="mt-4">
          <p className="text-sm font-bold tracking-tight">SUPPORT</p>
          <p className="relative p-2 text-sm text-gray-500">RETURNS</p>
          <p className="relative p-2 text-sm text-gray-500">FAQS</p>
          <p className="relative p-2 text-sm text-gray-500">ABOUT US</p>
          <p className="relative p-2 text-sm text-gray-500">STORE</p>
          <p className="relative p-2 text-sm text-gray-500">WORK WITH US</p>
          <p className="relative p-2 text-sm text-gray-500">REPORT A FAKE</p>
          <p className="relative p-2 text-sm text-gray-500">CONTACT US</p>
        </div>
        <div className="mt-4 ml-20 lg:ml-0 w-[90%]">
          <p className="text-2xl font-bold tracking-tight">
            BE THE FIRST TO KNOW
          </p>
          <p className="relative p-2 mt-10 mb-5 text-sm text-gray-500">
            Sign up to our newsletter for 10% off your next order!
          </p>
          <input
            placeholder="Email"
            className="w-full p-2 mb-3 border shadow-sm ring-gray-600 placeholder:p-2 placeholder:text-sm ring-1"
          ></input>
          <input
            placeholder="First Name"
            className="w-full p-2 mb-3 border shadow-sm ring-gray-600 placeholder:p-2 placeholder:text-sm ring-1"
          ></input>
          <input
            placeholder="Last Name"
            className="w-full p-2 mb-3 border shadow-sm ring-gray-600 placeholder:p-2 placeholder:text-sm ring-1"
          ></input>
          <button className="px-5 py-3 font-semibold text-white bg-black rounded-full">
            Subscribe
          </button>
        </div>
      </div>
      <div className="justify-between lg:flex bg-neutral-300/40">
        <div className="flex mt-3 ml-14 gap-x-5">
          <div>
            <svg
              role="presentation"
              focusable="false"
              width="27"
              height="27"
              className="icon icon-facebook"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.183 21.85v-8.868H7.2V9.526h2.983V6.982a4.17 4.17 0 0 1 4.44-4.572 22.33 22.33 0 0 1 2.667.144v3.084h-1.83a1.44 1.44 0 0 0-1.713 1.68v2.208h3.423l-.447 3.456h-2.97v8.868h-3.57Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div>
            <svg
              role="presentation"
              focusable="false"
              width="27"
              height="27"
              className="icon icon-twitter"
              viewBox="0 0 24 24"
            >
              <path
                d="M16.94 4h2.715l-5.93 6.777L20.7 20h-5.462l-4.278-5.593L6.065 20H3.35l6.342-7.25L3 4h5.6l3.868 5.113L16.94 4Zm-.952 14.375h1.504L7.784 5.54H6.17l9.818 12.836Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div>
            <svg
              role="presentation"
              focusable="false"
              width="27"
              height="27"
              className="icon icon-instagram"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2.4c-2.607 0-2.934.011-3.958.058-1.022.046-1.72.209-2.33.446a4.705 4.705 0 0 0-1.7 1.107 4.706 4.706 0 0 0-1.108 1.7c-.237.611-.4 1.31-.446 2.331C2.41 9.066 2.4 9.392 2.4 12c0 2.607.011 2.934.058 3.958.046 1.022.209 1.72.446 2.33a4.706 4.706 0 0 0 1.107 1.7c.534.535 1.07.863 1.7 1.108.611.237 1.309.4 2.33.446 1.025.047 1.352.058 3.959.058s2.934-.011 3.958-.058c1.022-.046 1.72-.209 2.33-.446a4.706 4.706 0 0 0 1.7-1.107 4.706 4.706 0 0 0 1.108-1.7c.237-.611.4-1.31.446-2.33.047-1.025.058-1.352.058-3.959s-.011-2.934-.058-3.958c-.047-1.022-.209-1.72-.446-2.33a4.706 4.706 0 0 0-1.107-1.7 4.705 4.705 0 0 0-1.7-1.108c-.611-.237-1.31-.4-2.331-.446C14.934 2.41 14.608 2.4 12 2.4Zm0 1.73c2.563 0 2.867.01 3.88.056.935.042 1.443.199 1.782.33.448.174.768.382 1.104.718.336.336.544.656.718 1.104.131.338.287.847.33 1.783.046 1.012.056 1.316.056 3.879 0 2.563-.01 2.867-.056 3.88-.043.935-.199 1.444-.33 1.782a2.974 2.974 0 0 1-.719 1.104 2.974 2.974 0 0 1-1.103.718c-.339.131-.847.288-1.783.33-1.012.046-1.316.056-3.88.056-2.563 0-2.866-.01-3.878-.056-.936-.042-1.445-.199-1.783-.33a2.974 2.974 0 0 1-1.104-.718 2.974 2.974 0 0 1-.718-1.104c-.131-.338-.288-.847-.33-1.783-.047-1.012-.056-1.316-.056-3.879 0-2.563.01-2.867.056-3.88.042-.935.199-1.443.33-1.782.174-.448.382-.768.718-1.104a2.974 2.974 0 0 1 1.104-.718c.338-.131.847-.288 1.783-.33C9.133 4.14 9.437 4.13 12 4.13Zm0 11.07a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm0-8.13a4.93 4.93 0 1 0 0 9.86 4.93 4.93 0 0 0 0-9.86Zm6.276-.194a1.152 1.152 0 1 1-2.304 0 1.152 1.152 0 0 1 2.304 0Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div>
            <svg
              role="presentation"
              focusable="false"
              width="27"
              height="27"
              className="icon icon-youtube"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.44 5.243c.929.244 1.66.963 1.909 1.876.451 1.654.451 5.106.451 5.106s0 3.452-.451 5.106a2.681 2.681 0 0 1-1.91 1.876c-1.684.443-8.439.443-8.439.443s-6.754 0-8.439-.443a2.682 2.682 0 0 1-1.91-1.876c-.45-1.654-.45-5.106-.45-5.106s0-3.452.45-5.106a2.681 2.681 0 0 1 1.91-1.876c1.685-.443 8.44-.443 8.44-.443s6.754 0 8.438.443Zm-5.004 6.982L9.792 15.36V9.091l5.646 3.134Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div>
            <svg
              role="presentation"
              focusable="false"
              width="27"
              height="27"
              className="icon icon-tiktok"
              viewBox="0 0 24 24"
            >
              <path
                d="M20.027 10.168a5.125 5.125 0 0 1-4.76-2.294v7.893a5.833 5.833 0 1 1-5.834-5.834c.122 0 .241.011.361.019v2.874c-.12-.014-.237-.036-.36-.036a2.977 2.977 0 0 0 0 5.954c1.644 0 3.096-1.295 3.096-2.94L12.56 2.4h2.75a5.122 5.122 0 0 0 4.72 4.573v3.195"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div>
            <svg
              role="presentation"
              focusable="false"
              width="27"
              height="27"
              className="icon icon-spotify"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm4.586 14.423a.623.623 0 0 1-.857.206c-2.348-1.434-5.304-1.759-8.785-.964a.623.623 0 0 1-.277-1.215c3.809-.87 7.076-.496 9.712 1.115.294.18.387.564.207.858ZM17.81 13.7a.78.78 0 0 1-1.072.257c-2.688-1.652-6.786-2.13-9.965-1.166A.78.78 0 0 1 6.32 11.3c3.631-1.102 8.146-.568 11.233 1.329a.78.78 0 0 1 .257 1.072Zm.105-2.836c-3.223-1.914-8.54-2.09-11.618-1.156a.935.935 0 1 1-.543-1.79c3.533-1.072 9.405-.865 13.116 1.338a.934.934 0 1 1-.955 1.608Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <div className="mr-10 text-sm font-thin">
        <p className="text-md footer__copyright text-subdued"><a href="/pages/terms-conditions" style={{textDecoration: "underline"}}>Terms &amp; Conditions</a> | <a href="/pages/privacy-policy" style={{textDecoration: "underline"}}>Privacy Policy</a><br></br>© 2024, Rudra Clothing done by <a href="https://protfolio-3d-rudra.vercel.app/">rudra</a>.</p>
        </div>
      </div>
      <div className="h-[8vh] bg-neutral-300/40 block">
        </div>
    </div>
  );
};

export default HomeSection;
