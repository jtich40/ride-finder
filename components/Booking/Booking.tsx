import React, { useContext, useState } from "react";
import Autocomplete from "./Autocomplete";
import Cars from "./Cars";
import Cards from "./Cards";
import { useRouter } from "next/navigation";
import { SelectedCarAmountContext } from "@/context/SelectedCarAmountContext";

const Booking = () => {
  //   const screenHeight =
  //     typeof window !== "undefined" ? window.innerHeight * 0.72 : 0;
  const { carAmount, setCarAmount } = useContext(SelectedCarAmountContext);
  const router = useRouter();

  return (
    <div className="p-5">
      <h2 className="text-[20px] font-semibold">Booking</h2>
      <div
        className="border-[1px] p-5 rounded-md"
        // style={{ height: screenHeight }}
      >
        <Autocomplete />
        <Cars />
        <Cards />
        <button
          className={`w-full bg-yellow-400 p-1 rounded-md mt-4 ${
            !carAmount ? "bg-gray-200" : null
          } `}
          //   disabled={!carAmount}
          onClick={() => router.push("/payment")}
        >
          Book
        </button>
      </div>
    </div>
  );
};

export default Booking;
