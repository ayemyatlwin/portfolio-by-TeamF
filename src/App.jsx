
import React from "react";
import "./App.css";
import Testimonial from "./Pages/Testimonial";
import Weapons from "./Pages/Weapons";
import StayConnected from "./Pages/StayConnected";
import ContactMe from "./Pages/ContactMe";
import About from "./Pages/About";
import Services from "./Pages/Services";

const App = () => {
  return (
    <div className=" scrollbar-thin scrollbar-thumb-rose-500 scrollbar-track-slate-300">
      <About/>
      <Services/>
      {/* တခုကျန် right here */}
      <Testimonial />
      <Weapons />
      <ContactMe />
      <StayConnected />
    </div>
  );
};

export default App;

