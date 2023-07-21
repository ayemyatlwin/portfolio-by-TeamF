import React from "react";
import Badges from "../Components/Badges";
import ReactTyped from "react-typed";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="flex justify-center items-center lg:h-screen w-full md:max-w-3xl lg:max-w-screen-2xl my-40 md:my-0  px-3 md:px-4 lg:px-14 mx-auto">
      <div className="container  ">
        <div className="flex flex-col lg:flex-row">
          <div className=" basis-5/12 w-full ">
            <Badges>Skills</Badges>
            <motion.h1
            initial={{ y: 80 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.1}}
            viewport={{ once: false }}
            className="mt-11 mb-7 text-3xl md:text-4xl font-bold font-serif leading-loose">
              As A Developer, I Am Good At Fit With Few  <span className="text-[#DF5646]">
              <ReactTyped strings={["Skills."]} typeSpeed={150} showCursor={false} loop loopCount={3}/>

                </span>
            </motion.h1>
            <motion.p
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.1}}
            viewport={{ once: false }}
            className="paragraph-1 my-[2.7rem]">
              All developers have good skills to make sure satisfied their
              clients, As a web-developer I am also specialized in few <span className="text-[#DF5646] font-medium">skills.</span>
            </motion.p>
            <div className=" flex flex-col ">
              <div>
                <div className="mb-1 text-base flex justify-between font-medium ">
                <span> Web Design </span>
                <span>80% </span>
                
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
                  <motion.div
                  initial={{ x: -10,width:"0" }}
                  whileInView={{ x: 0,width:"80%" }}
                  transition={{ duration: 0.5, delay: 0.1}}
                  viewport={{ once: false }}
                    className="bg-[#75a9d6] h-2.5 rounded-full animated "
                    style={{width:'80%'}}
                  ></motion.div>
                </div>
              </div>
              <div>
                <div className="mb-1 text-base flex justify-between font-medium ">
                <span>Creative</span>
                <span>65%</span>
                
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
                  <motion.div
                  initial={{ x: -10,width:"0" }}
                  whileInView={{ x: 0,width:"65%" }}
                  transition={{ duration: 0.5, delay: 0.1}}
                  viewport={{ once: false }}
                    className="bg-[#75a9d6] h-2.5 rounded-full animated "
                    style={{width:'65%'}}
                  ></motion.div>
                </div>
              </div>
              <div>
                <div className="mb-1 text-base flex justify-between font-medium ">
                <span>Maintenance</span>
                <span>75%</span>
                
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
                  <motion.div
                  initial={{ x: -10,width:"0" }}
                  whileInView={{ x: 0,width:"75%" }}
                  transition={{ duration: 0.5, delay: 0.1}}
                  viewport={{ once: false }}
                    className="bg-[#75a9d6] h-2.5 rounded-full animated "
                    style={{width:'75%'}}
                  ></motion.div>
                </div>
              </div>
              <div>
                <div className="mb-1 text-base flex justify-between font-medium ">
                <span>Problem Solving</span>
                <span>85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
                  <motion.div
                  initial={{ x: -10,width:"0" }}
                  whileInView={{ x: 0,width:"85%" }}
                  transition={{ duration: 0.5, delay: 0.1}}
                  viewport={{ once: false }}
                    className="bg-[#75a9d6] h-2.5 rounded-full animated "
                    style={{width:'85%'}}
                  ></motion.div>
                </div>
              </div>
            </div>
          </div>

          <div className=" basis-7/12 ">
            <div className="relative ps-0 lg:ps-20">
              <div className="absolute ">
                <img
                  src="https://wordpressriverthemes.com/HTML/itsme/assets/images/about/about-dark.png"
                  className=""
                  alt="aboutIamage"
                />
              </div>
              <motion.div
              initial={{ y: 80 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.1}}
              viewport={{ once: false }}
              className="absolute w-10 lg:w-16 h-4 left-40 top-1 lg:left-40 ">
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
              className="absolute top-5 left-96 lg:top-0">
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

export default Skills;
