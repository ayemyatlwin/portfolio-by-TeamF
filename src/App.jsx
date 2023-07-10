
import React from "react";
import "./App.css";
import Testimonial from "./Pages/Testimonial";
import Weapons from "./Pages/Weapons";
import StayConnected from "./Pages/StayConnected";
import ContactMe from "./Pages/ContactMe";

const App = () => {
  return (
    <div className="overflow-hidden screenScroll scrollbar-thin scrollbar-thumb-rose-500 scrollbar-track-slate-300">
      <Testimonial />
      <Weapons />
      <ContactMe />
      <StayConnected />
    </div>
  );
};

export default App;

