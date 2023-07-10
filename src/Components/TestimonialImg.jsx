import React from "react";
import { motion } from "framer-motion";

const TestimonialImg = () => {
  return (
    <div className=" h-screen basis-1/2 relative flex justify-start items-center my-10">
      <motion.img
      initial={{ scale: 0.3 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
        src="https://wordpressriverthemes.com/HTML/itsme/assets/images/testimonials/shape-one.png"
        alt=""
        className=" w-[80px] h-[65px] absolute top-5 -left-5 lg:left-0 lg:top-24 xl:top-60 xl:-left-5 bg-transparent"
      />
      <motion.img
      initial={{ scale: 0.3,x:-200,y:-100 }}
      whileInView={{ scale: 1,x:0,y:0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
        src="https://wordpressriverthemes.com/HTML/itsme/assets/images/testimonials/shape-two.png"
        alt=""
        className=" w-[150px] h-[150px] absolute -top-10 -right-14 md:-right-28 lg:right-16 lg:top-10 xl:top-44 bg-transparent"
      />
      <img
        src="https://wordpressriverthemes.com/HTML/itsme/assets/images/testimonials/testimonial.png"
        className="w-[250px] lg:w-[350px]  h-[500px]"
        alt=""
      />
    </div>
  );
};

export default TestimonialImg;
