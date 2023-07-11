import React from "react";
import Badges from "../Components/Badges";

const Skills = () => {
  return (
    <>
      <div className=" container mx-auto   lg:px-20 lg:py-20 my-10 lg:h-screen   ">
        <div className="flex flex-col lg:flex-row">
          <div className=" lg:basis-5/12 w-full px-5 ">
            <Badges>Skills</Badges>
            <h1 className=" font-serif text-3xl font-extrabold leading-relaxed">
              As A Developer, I Am Good At Fit With Few  <span className="text-[#DF5646]">Skills.</span>
            </h1>
            <p>
              All developers have good skills to make sure satisfied their
              clients, As a web-developer I am also specialized in few <span className="text-[#DF5646]">skills.</span>
            </p>
            <ul>
              <li>
                <p className="mb-1 text-base font-medium ">
                Web Design
                </p>
                <p className="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
                  <span
                    className="bg-blue-600 h-2.5 rounded-full "
                    style={{width:'45%'}}
                  ></span>
                </p>
              </li>
              <li>
                <p className="mb-1 text-base font-medium ">
                Creative
                </p>
                <p className="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
                  <span
                    className="bg-blue-600 h-2.5 rounded-full "
                    style={{width:'45%'}}
                  ></span>
                </p>
              </li>
              <li>
                <p className="mb-1 text-base font-medium ">
                Maintenance
                </p>
                <p className="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
                  <span
                    className="bg-blue-600 h-2.5 rounded-full "
                    style={{width:'45%'}}
                  ></span>
                </p>
              </li>
              <li>
                <p className="mb-1 text-base font-medium ">
                Problem Solving
                </p>
                <p className="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
                  <span
                    className="bg-blue-600 h-2.5 rounded-full "
                    style={{width:'45%'}}
                  ></span>
                </p>
              </li>
            </ul>
          </div>

          <div className=" lg:basis-7/12 ">
            <div className=" mt-10">
              <div className=" ">
                <img
                  src="https://wordpressriverthemes.com/HTML/itsme/assets/images/about/about-dark.png"
                  className=""
                  alt="aboutIamage"
                />
              </div>
              {/* <div className=" w-10 lg:w-16 h-4  ">
                <img
                  src="https://wordpressriverthemes.com/HTML/itsme/assets/images/about/shape-one-dark.png"
                  className=" "
                  alt=""
                />
              </div>
              <div className=" ">
                <img
                  src="https://wordpressriverthemes.com/HTML/itsme/assets/images/about/shape-two-dark.png"
                  alt=""
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
