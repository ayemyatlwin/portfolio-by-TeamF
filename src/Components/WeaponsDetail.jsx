import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Label from "./Label";
import Typing from "./Typing";
import { motion } from "framer-motion";


const WeaponsDetail = () => {
  const [show,setShow]=useState(false);

  return (
    <div className=" basis-1/2"  >
      <Label mytext={"My Weapons"} />
      <motion.p
      initial={{ y: 30 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
       className="text-3xl font-medium mb-5">
        My
        <Typing typedText={" Favorite Tools "} className={`${show?'':'hidden'}`}/>
        Which I Used Everyday In My Life.
      </motion.p>
      <motion.div 
       initial={{ y: 30 }}
       whileInView={{ y: 0 }}
       transition={{ duration: 0.6, delay: 0.2 }}
       viewport={{ once: false }}>
      <p className=" mb-5">
        I always loved those software that I use in my work, because I am very
        good at these, these are the main tools of my design career those are
        help me for make sure my Clients satisfication.
      </p>
      <div className=" flex justify-start items-center hover:text-[#df5646] relative">
        <a href="#" className=" underline hover:no-underline ">Lets See My Work Process</a>
          <BsArrowRight className="pl-3 hover:translate-x-3 w-[120%] lg:w-[55%] xl:w-[90%] absolute top-1 left-0"/>
      </div>
      </motion.div>

    </div>
  );
};

export default WeaponsDetail;
