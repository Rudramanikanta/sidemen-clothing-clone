import gsap from "gsap-trial";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = () => {
  const containerRef = useRef();
  const arrowRef = useRef();
  const [icon, setIcon] = useState({pos:"right"});
  const arr = [
    "https://sidemenclothing.com/cdn/shop/files/Y2KDesktopBanner.webp?v=1718973035&width=3200",
    "https://sidemenclothing.com/cdn/shop/files/TMDesktopBanner.webp?v=1718973048&width=2000",
    "https://sidemenclothing.com/cdn/shop/files/SDMN_FC_Collection_Mobile_Banner_14198ceb-f553-44b4-b156-1b0a2cad1574.jpg?v=1707274848&width=2000",
    "https://sidemenclothing.com/cdn/shop/files/ImperialVarsityMobileFeaturePiece.webp?v=1691671591&width=2000",
    "https://sidemenclothing.com/cdn/shop/files/GraffitiMobileFeaturePiece.webp?v=1691593530&width=2000",
    "https://sidemenclothing.com/cdn/shop/files/VarsityMobileSlideshow.webp?v=1691593530&width=2000"
  ];
  const [image, setImage] = useState(arr[0]);
  const [selected, setSelected] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { scrollX, scrollY } = window;
      if (window.innerWidth / 2 > e.clientX) {
        setIcon({ pos: "left", value: <FaArrowLeft /> });
      } else {
        setIcon({ pos: "right", value: <FaArrowRight /> });
      }
      gsap.to(arrowRef.current, {
        x: e.clientX + scrollX,
        y: e.clientY + scrollY,
        duration: 0.2, // add some duration for smoothness
        ease: "power2.out", // add easing for smoother animation
      });
    };
    
    const handleEnter = () => {
      intervalRef.current=setInterval(() => {
        console.log("executed")
        handleClick();
      }, 5000);
      
    };

    const handleLeave = () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };

    const container = containerRef.current;
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleEnter);
    container.addEventListener("mouseleave", handleLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleEnter);
      container.removeEventListener("mouseleave", handleLeave);
      
    };
  }); // Add icon as dependency if its state is used in handleClick

  const handleClick = () => {
    if (icon!==undefined && icon.pos === "left") {
      const newSelected = (selected - 1 + arr.length) % arr.length;
      setSelected(newSelected);
      setImage(arr[newSelected]);
    } else {
      const newSelected = (selected + 1) % arr.length;
      setSelected(newSelected);
      setImage(arr[newSelected]);
    }
  };
  
  return (
    <div ref={containerRef} id="parent" className="">
      <div ref={arrowRef} id="child" className="absolute top-0 left-0 p-4 bg-white rounded-full pointer-events-none">
        {/* <div className="w-4 h-4 bg-black rounded-full"></div> */}
        {icon && icon.value}
      </div>
      <div onClick={()=>{handleClick()}} className=" flex flex-nowrap h-[90vh] w-[100%] hover:cursor-none">
        <div className="w-[100%]  flex-shrink-0">
          <img
            className="object-cover w-full h-full"
            src={image}
            alt="image1"
          />
          <div id="toggle" onMouseOver={()=>{arrowRef.current.style.display="none"}} onMouseLeave={()=>{arrowRef.current.style.display="block"}} className="p-4 z-2 flex bg-black flex-shrink-0 flex-nowrap w-fit ml-[80%] h-[20vh] align-center items-center mt-[-20vh] gap-x-3 hover:cursor-pointer">
        {
          arr.map((value,index)=>{
            return <div onClick={()=>{
              setImage(value)
              setSelected(index)
            }} className={index===selected?"block w-10 h-4 bg-white flex-shrink-0 rounded-full":"block flex-shrink-0 w-4 h-4 bg-white rounded-full"}></div>
          })
        }
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Carousel;
