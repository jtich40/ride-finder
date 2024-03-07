import React, { useEffect, useState } from "react";

const Autocomplete = () => {
  const [source, setSource] = useState<any>();
  const [sourceChange, setSourceChange] = useState<any>(false);
  const [destinationChange, setDestinationChange] = useState<any>(false);

  const [addressList, setAddressList] = useState<any>([]);
  const [destination, setDestination] = useState<any>();

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      getAddressList();
    }, 1000);
    return () => clearTimeout(delayDebounce);
  }, [source, destination]);

  const getAddressList = async () => {
    const query = sourceChange ? source : destination;
    const res = await fetch("/api/search-address?q=" + query, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();
    setAddressList(result);
  };

  return (
    <div className="mt-5">
      <div className="relative">
        <label className="text-gray-400">Where From?</label>
        <input
          type="text"
          className="bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-300"
          value={source}
          onChange={(e) => {
            setSource(e.target.value);
            setSourceChange(true);
          }}
        />
        {addressList?.suggestions && sourceChange ? (
          <div className="shadow-md p-1 rounded-md absolute w-full bg-white">
            {addressList?.suggestions.map((item: any, index: number) => (
              <h2
                key={index}
                className="p-3 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSource(item.full_address);
                  setAddressList([]);
                  setSourceChange(false);
                }}
              >
                {item.full_address}
              </h2>
            ))}
          </div>
        ) : null}
      </div>
      <div className="mt-3">
        <label className="text-gray-400">Where To?</label>
        <input
          type="text"
          className="bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-300"
          value={destination}
          onChange={(e) => {
            setDestination(e.target.value);
            setDestinationChange(true);
          }}
        />
        {addressList?.suggestions && destinationChange ? (
          <div className="shadow-md p-1 rounded-md absolute w-full bg-white">
            {addressList?.suggestions.map((item: any, index: number) => (
              <h2
                key={index}
                className="p-3 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setDestination(item.full_address);
                  setAddressList([]);
                  setDestinationChange(false);
                }}
              >
                {item.full_address}
              </h2>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Autocomplete;
