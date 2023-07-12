import React from "react";
import Badges from "./Badges";
import { motion } from "framer-motion";
import { HiArrowSmRight } from "react-icons/hi";

const PortfolioText = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6">
      <div className=" w-full lg:w-2/4">
        <div className="mb-11">
          <Badges>Portfolio</Badges>
          <motion.h2
            initial={{ y: 80 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
            className="header-2"
          >
            some of my creative
            <span className="text-[var(--primary-color)]"> works.</span>
          </motion.h2>
        </div>
        <motion.p
          initial={{ y: 110 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
          className="paragraph-1 w-full lg:w-[80%]"
        >
          As a designer I have been working few years in this sector, and i have
          completed lot's of project
          <a
            href="#Portfolio"
            className="text-[var(--primary-color)] font-semibold"
          >&nbsp;
            see here.
          </a>
        </motion.p>
        <motion.a
         initial={{ y: 70 }}
         whileInView={{ y: 0 }}
         transition={{ duration: 1, delay: 0.1}}
         viewport={{ once: false }}
          href=""
          className="text-[var(--primary-color)] mt-11 inline-block underline"
        >
          <span className="hover:mr-3 ">Explore More </span>
          <HiArrowSmRight className="inline-block " />
        </motion.a>
      </div>
      <div className="w-full lg:w-2/4 pl-0 lg:pl-20 2xl:pl-28 ">
        <motion.div
        initial={{ y: 120 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.2, delay: 0.4}}
        viewport={{ once: false }}
        className="flex flex-col md:flex-row">
          <div className="flex flex-wrap md:justify-center items-center mt-12 md:mr-12 md:pr-12 md:border-r md:border-[#B7B7B7]">
            <span
              className=" text-5xl font-normal mr-4 text-[var(--primary-color)]"
              data-speed="3000"
              data-stop="7"
            >
              07
            </span>
            <h5 className="header-5 w-20">Years of Experience</h5>
          </div>
          <div className="flex flex-wrap md:justify-center items-center mt-12 ">
            <span
              className=" text-5xl font-normal mr-4 text-[var(--primary-color)]"
              data-speed="3000"
              data-stop="7"
            >
              120+
            </span>
            <h5 className="header-5 w-20">Satisfied Clients</h5>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioText;
