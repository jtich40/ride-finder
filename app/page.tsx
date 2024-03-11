"use client";
import Image from "next/image";
import Booking from "@/components/Booking/Booking";
import MapBoxMap from "@/components/Map/MapBoxMap";
import { useEffect, useState } from "react";
import { UserLocationContext } from "@/context/UserLocationContext";

export default function Home() {
  const [userLocation, setUserLocation] = useState<any>();

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      setUserLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  };

  return (
    <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="">
            <Booking />
          </div>
          <div className="col-span-2">
            <MapBoxMap />
          </div>
        </div>
      </div>
    </UserLocationContext.Provider>
  );
}
