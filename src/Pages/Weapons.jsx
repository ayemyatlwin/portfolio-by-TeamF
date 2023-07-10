import React from "react";
import WeaponsDetail from "../Components/WeaponsDetail";
import WeaponsImg from "../Components/WeaponsImg";


const Weapons = () => {
  return (
    <>

      <div className="container mx-auto h-fit lg:h-screen flex flex-col lg:flex-row  justify-center items-center px-10 lg:px-32 border-b-2 border-b-gray-200 py-10">

        <WeaponsDetail/>
        <WeaponsImg/>
      </div>
    </>
  );
};

export default Weapons;
