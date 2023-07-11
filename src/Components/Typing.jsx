import React from "react";
import '../App.css'

const Typing = ({ children}) => {
  return (
      <span className="inline relative text-[#df5646]">{children}<span className="myCursor"> </span>
      </span>
  );
};

export default Typing;
