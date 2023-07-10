import React from "react";
import ContactMeDetail from "../Components/ContactMeDetail";
import ContactMeImg from "../Components/ContactMeImg";

const ContactMe = () => {
  return (
      <section
        className="container mx-auto lg:h-screen flex flex-col lg:flex-row justify-center items-center px-10 py-10 lg:px-32 border-b-2 border-b-gray-200">
        <ContactMeDetail />
        <ContactMeImg />
      </section>
  );
};

export default ContactMe;
