import React from "react";
import Badges from "../Components/Badges";

const Skills = () => {
  return (
    <>
      <div className=" container mx-auto  px-10 lg:px-20 lg:pt-20  h-screen   ">
        <div className="flex flex-col lg:flex-row">
          <div className=" basis-5/12 w-full px-5 ">
            <Badges>Skills</Badges>
            <h1 className="text-white font-serif text-6xl font-extrabold leading-relaxed">
              As A Developer, I Am Good At Fit With Few Skills.
            </h1>
            <p>
              All developers have good skills to make sure satisfied their
              clients, As a web-developer I am also specialized in few skills.
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

          <div className=" basis-7/12 ">
            <div className="relative mt-10">
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
    </>
  );
};

export default Skills;
