import React from "react";
import { motion } from "framer-motion";


const ContactMeImg = () => {
  return (
      <div className="h-screen md:h-fit basis-2/4 flex justify-center items-center ">
        <motion.img
        initial={{opacity:0,x:-200}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.6}}
        viewport={{once:false}}
          src="https://wordpressriverthemes.com/HTML/itsme/assets/images/contact/contact.png"
          alt="" className=" flex flex-col self-center h-[80%] w-[90%] px-10"
        />
      </div>
  );
};

export default ContactMeImg;
// w-[350px] h-[500px]