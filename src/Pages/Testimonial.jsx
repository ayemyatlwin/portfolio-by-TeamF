import React from "react";
import TestimonialImg from "../Components/TestimonialImg";
import TestimonialDetail from "../Components/TestimonialDetail";

const Testimonial = () => {
  return (
      <div className="container mx-auto lg:h-screen flex flex-col lg:flex-row justify-center items-center px-10 py-10 lg:px-32 border-b-2 border-b-gray-200">
        <TestimonialImg />
        <TestimonialDetail />
      </div>
  );
};

export default Testimonial;
