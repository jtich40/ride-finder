import React from "react";
import Autocomplete from "./Autocomplete";
import Cars from "./Cars";

const Booking = () => {
  const screenHeight =
    typeof window !== "undefined" ? window.innerHeight * 0.72 : 0;
  return (
    <div className="p-5">
      <h2 className="text-[20px] font-semibold">Booking</h2>
      <div
        className="border-[1px] p-5 rounded-md"
        style={{ height: screenHeight }}
      >
        <Autocomplete />
        <Cars />
      </div>
    </div>
  );
};

export default Booking;
