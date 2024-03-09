import CardsList from "@/data/CardsList";
import Image from "next/image";
import React, { useState } from "react";

const Cards = () => {
  const [activeCard, setActiveCard] = useState<any>();
  return (
    <div>
      <h2 className="text-[14px] font-medium">Payment Methods</h2>
      <div className="grid grid-cols-5 mt-2 pl-2">
        {CardsList.map((item, index) => (
          <div
            className={`w-[50px] border-[1px] flex items-center justify-center rounded-md cursor-pointer hover:border-yellow-400 hover:scale-110 transition-all ${
              activeCard == index ? "border-yellow-400 border-[2px]" : null
            } `}
            onClick={() => setActiveCard(index)}
          >
            <Image src={item.image} alt={item.name} width={30} height={50} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
