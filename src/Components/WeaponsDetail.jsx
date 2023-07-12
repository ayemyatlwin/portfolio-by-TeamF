import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Badges from "./Badges";
import Typing from "./Typing";
import { motion } from "framer-motion";
import ReactTyped from "react-typed";

const WeaponsDetail = () => {

  return (
    <div className=" basis-1/2">
      <Badges> My Weapons </Badges>
      <motion.p
        initial={{ y: 30 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="header-2 my-5"
      >
        My <span className="text-[var(--primary-color)]"><ReactTyped strings={["Favorite Tools"]} typeSpeed={150} showCursor={false} loop loopCount={3}/></span> Which I Used Everyday In My Life.
        {/* <Typing bgLight={"bg-[#fafafa]"} bgDark={"bg-[#32324c]"}>Favorite Tools</Typing> */} 
      </motion.p>
      <motion.div
        initial={{ y: 30 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
      >
        <p className=" my-10 text-[#BEBFBF]">
          I always loved those software that I use in my work, because I am very
          good at these, these are the main tools of my design career those are
          help me for make sure my Clients satisfication.
        </p>
        <div className=" flex justify-start items-center text-white hover:text-[#df5646] relative">
          <a href="#" className=" underline hover:no-underline">
            Lets See My Work Process
          </a>
          <BsArrowRight className="pl-3 hover:translate-x-3 w-[120%] lg:w-[55%] xl:w-[90%] absolute top-1 left-0 bg-transparent" />
        </div>
      </motion.div>
    </div>
  );
};

export default WeaponsDetail;
