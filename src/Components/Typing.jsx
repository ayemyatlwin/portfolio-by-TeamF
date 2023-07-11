import React from "react";
import '../App.css'

const Typing = ({ typedText }) => {
  return (
    <>
      <span className="inline relative text-[#df5646]"> {typedText} <span className="myCursor"> </span>
      </span>
    </>
  );
};

export default Typing;
