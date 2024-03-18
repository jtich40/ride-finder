"use client";
import Image from "next/image";
import Booking from "@/components/Booking/Booking";
import MapBoxMap from "@/components/Map/MapBoxMap";
import { useEffect, useState } from "react";
import { UserLocationContext } from "@/context/UserLocationContext";
import { SourceCoordinatesContext } from "@/context/SourceCoordinatesContext";
import { DestinationCoordinatesContext } from "@/context/DestinationCoordinatesContext";
import { DirectionDataContext } from "@/context/DirectionDataContext";
import { SelectedCarAmountContext } from "@/context/SelectedCarAmountContext";

export default function Home() {
  const [userLocation, setUserLocation] = useState<any>();
  const [sourceCoordinates, setSourceCoordinates] = useState<any>([]);
  const [destinationCoordinates, setDestinationCoordinates] = useState<any>([]);
  const [directionData, setDirectionData] = useState<any>([]);
  const [carAmount, setCarAmount] = useState<any>();

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
      <SourceCoordinatesContext.Provider
        value={{ sourceCoordinates, setSourceCoordinates }}
      >
        <DestinationCoordinatesContext.Provider
          value={{ destinationCoordinates, setDestinationCoordinates }}
        >
          <DirectionDataContext.Provider
            value={{ directionData, setDirectionData }}
          >
            <SelectedCarAmountContext.Provider
              value={{ carAmount, setCarAmount }}
            >
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
            </SelectedCarAmountContext.Provider>
          </DirectionDataContext.Provider>
        </DestinationCoordinatesContext.Provider>
      </SourceCoordinatesContext.Provider>
    </UserLocationContext.Provider>
  );
}
