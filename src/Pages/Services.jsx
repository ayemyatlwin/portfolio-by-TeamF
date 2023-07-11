import React from "react";
import Badges from "../Components/Badges";
import { MdWeb } from "react-icons/md";
import { DiResponsive } from "react-icons/di";
import { GoVersions, GoTools } from "react-icons/go";

const Services = () => {
  return (
    <>
      <div className=" container mx-auto px-10 my-10 lg:my-32 overflow-auto scrollbar-none    h-screen  ">
      <Badges>Services</Badges>
        <div className="flex flex-col lg:flex-row ">
          <div className="  lg:basis-5/12 w-full  px-5 ">
          {/* <div className="">
                <img
                  src="https://wordpressriverthemes.com/HTML/itsme/assets/images/services/shape-two-dark.png"
                  alt=""
                />
              </div>
              <div className="absolute">
                <img
                  src="https://wordpressriverthemes.com/HTML/itsme/assets/images/services/shape-one-dark.png"
                  alt=""
                />
              </div> */}
              <div className="absolute">
                <img
                  src="https://wordpressriverthemes.com/HTML/itsme/assets/images/services/services-dark.png"
                  alt=""
                />
              </div>
          </div>
          <div className="   lg:basis-7/12    ">
            <h1 className=" font-serif text-2xl  lg:text-4xl font-extrabold leading-relaxed">
              What <b className="text-[#DF5646]">Services</b> I Provide To My
              Clients In Here.
            </h1>
            <p className=" tracking-wider my-3 text-[18px] text-[#bebfbf] font-sans leading-relaxed">
              I always want to be able to meet the goals of my clients, <br /> I
              value my services as a developer through my work. <br /> You may
              like my <span className="text-[#DF5646]">services</span>.
            </p>
            <div className="flex flex-col lg:flex-row justify-start lg:gap-20 w-full mt-12 lg:mt-20 leading-relaxed">
              <div className=" flex flex-col ">
                <div className="flex flex-row gap-3">
                  <button className="text-[#bebfbf]">
                    <MdWeb className=" w-10 h-10  cursor-pointer  " />
                  </button>
                  <span className=" self-center text-xl font-sans font-medium tracking-wider">
                    Web Design
                  </span>
                </div>
                <div className="flex flex-row gap-3">
                  <button className="text-[#bebfbf]">
                    <DiResponsive className=" w-10 h-10  cursor-pointer" />
                  </button>
                  <span className=" self-center text-xl font-sans font-medium tracking-wider">
                    Responsive Design
                  </span>
                </div>
              </div>
              <div className=" flex flex-col">
                <div className="flex flex-row gap-3">
                  <button className="text-[#bebfbf]">
                    <GoVersions className=" w-7 h-10  cursor-pointer" />
                  </button>
                  <span className=" self-center text-xl font-sans font-medium tracking-wider">
                    Version Controls
                  </span>
                </div>
                <div className="flex flex-row gap-3">
                  <button className="text-[#bebfbf]">
                    <GoTools className=" w-7 h-10  cursor-pointer text-[#bebfbf]" />
                  </button>
                  <span className=" self-center text-xl font-sans font-medium tracking-wider">
                    Maintenance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
