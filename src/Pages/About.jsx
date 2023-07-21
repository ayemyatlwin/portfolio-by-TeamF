import React from "react";
import Badges from "../Components/Badges";
import {BsArrowRightShort} from "react-icons/bs"
import {FaLinkedinIn,FaFacebookF,FaGithub,FaTwitter} from "react-icons/fa"
import Buttons from "../Components/Buttons";
import ReactTyped from "react-typed";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full md:max-w-3xl lg:max-w-screen-2xl my-40 md:my-0 px-1 md:px-4 lg:px-10 mx-auto"> 
      <div className=" container  "> 
        <div className="flex flex-col lg:flex-row lg:justify-center">
          <div className=" basis-5/12 w-full pl-0 lg:pl-12 ">
            <Badges>About me</Badges>
            <motion.h1
            initial={{ y: 80 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.1}}
            viewport={{ once: false }}
            className=" font-serif text-4xl  lg:text-6xl font-extrabold leading-relaxed ">
              Hi,
              <br />
              I'm <span className=" tracking-wider text-[#DF5646] "> 
              <ReactTyped strings={["Niharika"]} typeSpeed={150} showCursor={false} loop loopCount={3}/>
               </span>
            </motion.h1>
            <motion.h3
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.1}}
            viewport={{ once: false }}
            className=" tracking-wide  leading-relaxed text-2xl font-sans ">
              Frontend Web Developer
            </motion.h3>
            <motion.p
            initial={{ y: 120 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.1}}
            viewport={{ once: false }}
            className=" tracking-wider my-3 text-[18px] paragraph-1 font-sans">
              Hey are you looking for developer to build your
              <br />
              <b className="text-[#DF5646]">
                 website and  grow your business?
              </b>
              <br />
              let's shake hands with me.
            </motion.p>
            {/* <button
              type="button"
              className="text-white tracking-wider bg-[#DF5646] hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300  rounded-lg  px-5 py-3 my-10 text-center inline-flex items-center capitalize "
            >
              Hire me
              <BsArrowRightShort className=" bg-inherit w-7 h-7 text-white ms-3"/>
            </button> */}
            <motion.div
            initial={{ y: 130 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.1}}
            viewport={{ once: false }}
            className="py-3 my-10">
              <Buttons> <a href="#ContactMe" className="hover:text-white">hire me</a> <BsArrowRightShort className=" right-arrow w-7 h-7 text-white ms-3"/></Buttons>
            </motion.div>
            
            <motion.div
            initial={{ y: 140 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.1}}
            viewport={{ once: false }}
            className=" flex flex-row gap-3 items-end">
              <a href="#" target="_blank" type="button" className=" text-base hover:text-[#DF5646] hover:transition-all " >
                <FaFacebookF className="w-5 h-5 my-2 mx-2 cursor-pointer  "/>
              </a>
              <a href="#" target="_blank" type="button" className=" text-base hover:text-[#DF5646] hover:transition-all  " >
              <FaLinkedinIn className="w-5 h-5 my-2 mx-2 cursor-pointer"/>
              </a>
              <a href="#" target="_blank" type="button" className=" text-base hover:text-[#DF5646] hover:transition-all " >
                <FaGithub className="w-5 h-5 my-2 mx-2 cursor-pointer"/>
              </a>
              <a href="#" target="_blank" type="button" className=" text-base hover:text-[#DF5646] hover:transition-all  " >
                <FaTwitter className="w-5 h-5 my-2 mx-2 cursor-pointer"/>
              </a>
            </motion.div>
          </div>

          <div className=" basis-7/12">
            <div className="relative pt-[60px] pl-0 lg:pl-14">
              <div className="absolute ">
                <img
                  src="https://wordpressriverthemes.com/HTML/itsme/assets/images/about/about-dark.png"
                  className="w-[100%]"
                  alt="aboutIamage"
                />
              </div>
              <motion.div
              initial={{ y: 80 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.1}}
              viewport={{ once: false }}
              className="absolute w-10 lg:w-16 h-4 left-16 top-16 md:left-40 md:top-20 lg:left-56 ">
                <img
                  src="https://wordpressriverthemes.com/HTML/itsme/assets/images/about/shape-one-dark.png"
                  className=" "
                  alt=""
                />
              </motion.div>
              <motion.div
              initial={{ y: 80 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.1}}
              viewport={{ once: false }}
              className="absolute top-10 right-20 md:top-14 md:right-44 2xl:right-64 2xl:top-16">
                <img
                  src="https://wordpressriverthemes.com/HTML/itsme/assets/images/about/shape-two-dark.png"
                  alt=""
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
