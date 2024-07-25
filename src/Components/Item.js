import React from "react";
import {  motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IoMdAdd } from "react-icons/io";
const Item = (props) => {
  const { value, index } = props;
  const animationdelay = 0.1;
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const animation = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <motion.div
    ref={ref}
    initial="hidden"
    custom={index}
    variants={animation}
    transition={{ delay: index * animationdelay }}
    animate={inView ? "visible" : "hidden"}
      className="flex-shrink-0 group"
    >
      <div className="h-[175px] w-[175px] object-contain relative">
        <img className="object-cover" src={value.image} alt={index}></img>
        <button className="absolute right-0 flex items-center justify-center px-3 py-2 text-sm font-semibold transition-all duration-150 ease-in rounded-full opacity-0 animate bg-white align-center gap-x-1 group-hover:translate-y-0 bottom-0 translate-y-[-4] mr-3 mb-3   group-hover:opacity-100"><IoMdAdd></IoMdAdd> Quick add</button>
      </div>
      <div className="items-center content-center mt-4 text-center bg-white align-center gap-y-4">
        <p className="text-sm font-bold tracking-tight text-center text-gray-600 ">
          {value.name}
        </p>
        <p className="items-center content-center text-sm font-semibold tracking-tight text-center ">
          {value.description}
        </p>
        <p className="text-sm ">
          <span className="mr-2 text-red-500">Rs. {value.price}</span>
          <del className="text-gray-400 ">Rs. {value.price2}</del>
        </p>
      </div>
    </motion.div>
  );
};

export default Item;
