import React from "react";
import Badges from "../Components/Badges";
import {BsArrowRightShort} from "react-icons/bs"
import {FaLinkedinIn,FaFacebookF,FaGithub,FaTwitter} from "react-icons/fa"

const About = () => {
  return (
    <>
      <div className=" container mx-auto px-10 mt-10 lg:mt-32 overflow-auto scrollbar-none   h-screen   ">
        <div className="flex flex-col lg:flex-row  ">
          <div className=" lg:basis-5/12 ">
            <Badges>About me</Badges>
            <h1 className=" font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold leading-relaxed ">
              Hi,
              <br />
              I'm <span className=" tracking-wider text-[#DF5646] "> Niharika </span>
            </h1>
            <h3 className=" tracking-wide  leading-relaxed text-2xl font-sans ">
              Frontend Web Developer
            </h3>
            <p className=" tracking-wider my-3 text-[18px] text-[#bebfbf] font-sans">
              Hey are you looking for developer to build your
              <br />
              <b className="text-[#DF5646]">
                 website and  grow your business?
              </b>
              <br />
              let's shake hands with me.
            </p>
            <button
              type="button"
              className="text-white tracking-wider bg-[#DF5646] hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300  rounded-lg  px-5 py-3 my-10 text-center inline-flex items-center capitalize "
            >
              Hire me
              <BsArrowRightShort className=" bg-inherit w-7 h-7 text-white ms-3"/>
            </button>
            <div className=" flex flex-row gap-3 items-end">
              <button type="button" className=" text-[#bebfbf] " >
                <FaFacebookF className="w-5 h-5 my-2 mx-2 rounded-md cursor-pointer "/>
              </button>
              <button type="button" className=" text-[#bebfbf]  " >
              <FaLinkedinIn className="w-5 h-5 my-2 mx-2 rounded-md cursor-pointer"/>
              </button>
              <button type="button" className=" text-[#bebfbf] " >
                <FaGithub className="w-5 h-5 my-2 mx-2 rounded-md cursor-pointer"/>
              </button>
              <button type="button" className=" text-[#bebfbf] " >
                <FaTwitter className="w-5 h-5 my-2 mx-2 rounded-md cursor-pointer"/>
              </button>
            </div>
          </div>

          <div className="relative lg:basis-7/12 mt-10 ">
          <div className=" absolute w-7 md:w-20 lg:w-16 h-4 z-50 left-5  -top-1 md:-top-5 lg:top-3">
                <img
                  src="https://wordpressriverthemes.com/HTML/itsme/assets/images/about/shape-one-dark.png"
                  className=" ms-auto "
                  alt=""
                />
              </div>
              <div className=" absolute z-50 left-3/4 -top-2 md:top-0 ">
                <img
                  src="https://wordpressriverthemes.com/HTML/itsme/assets/images/about/shape-two-dark.png"
                  alt=""
                />
              </div>
              <div className="absolute ">
                <img
                  src="https://wordpressriverthemes.com/HTML/itsme/assets/images/about/about-dark.png"
                  className=""
                  alt="aboutIamage"
                />
              </div>
              
           
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
