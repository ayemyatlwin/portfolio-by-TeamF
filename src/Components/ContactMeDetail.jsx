import React from "react";
import Label from "./Label";
import { BiSolidPaperPlane } from "react-icons/bi";
import { motion } from "framer-motion";

const ContactMeDetail = () => {
  return (
    <div className=" w-full basis-1/2 lg:mr-20">
      <Label mytext={"Contact Me"} />

      <motion.p
        initial={{ y: 30 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="text-3xl font-medium mb-5"
      >
        Estimate Your Project?
        <br />
        Let Me Know Here.
      </motion.p>
      <motion.div
        initial={{ y: 30 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
        className=" flex flex-col gap-3"
      >
        <input
          type="text"
          className=" border-b-2 focus:border-[#df5646] outline-none h-10 w-full"
          placeholder="What's your name?"
          name=""
          id=""
        />
        <input
          type="text"
          className=" border-b-2 focus:border-[#df5646] outline-none h-10 w-full"
          placeholder="Your email?"
          name=""
          id=""
        />
        <input
          type="text"
          className=" border-b-2 focus:border-[#df5646] outline-none h-10 w-full"
          placeholder="Tell me about your project"
          name=""
          id=""
        />
        <button className="w-fit my-5 flex self-end	 text-[#df5646]">
          <BiSolidPaperPlane size={"2rem"} />
        </button>
      </motion.div>
    </div>
  );
};

export default ContactMeDetail;
