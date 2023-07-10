import React from "react";
import '../App.css'

const Typing = ({ typedText }) => {
  return (
    <>
      <p className="inline relative text-[#df5646]"> {typedText} <span className="myCursor"> </span>
      </p>
    </>
  );
};

export default Typing;
