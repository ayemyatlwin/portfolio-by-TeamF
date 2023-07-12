import React from "react";
import Badges from "../Components/Badges";
import ReactTyped from "react-typed";

const Skills = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full md:max-w-3xl lg:max-w-screen-2xl px-3 md:px-4 lg:px-14 mx-auto">
      <div className="container  ">
        <div className="flex flex-col lg:flex-row">
          <div className=" basis-5/12 w-full ">
            <Badges>Skills</Badges>
            <h1 className=" font-serif text-2xl lg:text-3xl font-extrabold leading-relaxed">
              As A Developer, I Am Good At Fit With Few  <span className="text-[#DF5646]">
              <ReactTyped strings={["Skills."]} typeSpeed={150} showCursor={false} loop loopCount={3}/>

                </span>
            </h1>
            <p>
              All developers have good skills to make sure satisfied their
              clients, As a web-developer I am also specialized in few <span className="text-[#DF5646]">skills.</span>
            </p>
            <div className=" flex flex-col my-5">
              <div>
                <div className="mb-1 text-base font-medium ">
                Web Design
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full animated "
                    style={{width:'80%'}}
                  ></div>
                </div>
              </div>
              <div>
                <div className="mb-1 text-base font-medium ">
                Creative
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full animated "
                    style={{width:'65%'}}
                  ></div>
                </div>
              </div>
              <div>
                <div className="mb-1 text-base font-medium ">
                Maintenance
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full animated "
                    style={{width:'75%'}}
                  ></div>
                </div>
              </div>
              <div>
                <div className="mb-1 text-base font-medium ">
                Problem Solving
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full animated "
                    style={{width:'85%'}}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className=" basis-7/12 ">
            <div className="relative mt-10 pl-0 lg:pl-14">
              <div className="absolute ">
                <img
                  src="https://wordpressriverthemes.com/HTML/itsme/assets/images/about/about-dark.png"
                  className=""
                  alt="aboutIamage"
                />
              </div>
              <div className="absolute w-10 lg:w-16 h-4 left-40 top-1 lg:left-40 ">
                <img
                  src="https://wordpressriverthemes.com/HTML/itsme/assets/images/about/shape-one-dark.png"
                  className=" "
                  alt=""
                />
              </div>
              <div className="absolute top-5 left-96 lg:top-0">
                <img
                  src="https://wordpressriverthemes.com/HTML/itsme/assets/images/about/shape-two-dark.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
