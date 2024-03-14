import { DestinationCoordinatesContext } from "@/context/DestinationCoordinatesContext";
import { SourceCoordinatesContext } from "@/context/SourceCoordinatesContext";
import { UserLocationContext } from "@/context/UserLocationContext";
import React, { useContext } from "react";
import { Map, Marker } from "react-map-gl";

const Markers = () => {
  const { userLocation, setUserLocation } = useContext(UserLocationContext);
  const { sourceCoordinates, setSourceCoordinates } = useContext(
    SourceCoordinatesContext
  );
  const { destinationCoordinates, setDestinationCoordinates } = useContext(
    DestinationCoordinatesContext
  );
  return (
    <div>
      {/* User Marker */}
      <Marker
        longitude={userLocation?.lng}
        latitude={userLocation?.lat}
        anchor="bottom"
      >
        <img src="./pin.png" className="w-10 h-10" />
      </Marker>

      {/* Source Marker */}
      {sourceCoordinates.length != 0 ? (
        <Marker
          longitude={sourceCoordinates?.lng}
          latitude={sourceCoordinates?.lat}
          anchor="bottom"
        >
          <img src="./pin.png" className="w-10 h-10" />
        </Marker>
      ) : null}
      {/* Destination Marker */}
      {destinationCoordinates.length != 0 ? (
        <Marker
          longitude={destinationCoordinates?.lng}
          latitude={destinationCoordinates?.lat}
          anchor="bottom"
        >
          <img src="./pin.png" className="w-10 h-10" />
        </Marker>
      ) : null}
    </div>
  );
};

export default Markers;
