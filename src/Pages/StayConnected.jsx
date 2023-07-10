import React from "react";
import { motion } from "framer-motion";

const StayConnected = () => {
  return (
    <section className="container mx-auto h-full lg:h-screen lg:px-32 relative xl:pt-44">
      <motion.img
        initial={{ opacity: 0, scale: 0, x: -100 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        src="https://wordpressriverthemes.com/HTML/itsme/assets/images/contact/footer-bottom-girl.png"
        alt=""
        className="w-[250px] h-[400px] mt-10 md:h-[500px] absolute bottom-0 left-20 lg:left-56"
      />
      <div className="w-full h-full flex flex-col justify-between items-center">
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="my-20 flex flex-col justify-center items-center mb-5"
        >
          <h1 className=" text-2xl mb-5 font-bold">Stay Connected</h1>
          <p className=" text-gray-500 mb-2">Bangladesh</p>
          <h3 className=" text-xl font-semibold mb-2 hover:text-[#df5646]">
            hello_niharik@gmail.com
          </h3>
          <p className=" text-gray-500 mb-2">(+778) 675-0765</p>
          <div className=" flex gap-3 justify-center items-center my-5">
            <button className=" w-10 h-10 rounded-full shadow-lg flex self-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                className="p-2"
                alt=""
              />
            </button>
            <button
              alt=""
              className=" w-10 h-10 rounded-full shadow-lg object-center flex self-center"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png"
                className="p-2"
                alt=""
              />
            </button>
            <button className=" w-10 h-10 rounded-full shadow-lg flex self-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
                className="p-2"
                alt=""
              />
            </button>
          </div>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{once:false }}
          src="https://wordpressriverthemes.com/HTML/itsme/assets/images/contact/footer-bottom-shape.png"
          className="h-[50px]"
          alt=""
        />
      </div>
    </section>
  );
};

export default StayConnected;