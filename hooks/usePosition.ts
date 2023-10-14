import { defaultPosition } from "@/constants";
import { Position } from "@/models";
import { useEffect, useState } from "react";

export default function usePosition() {
  const [position, setPosition] = useState<Position | null>(null);

  function handleSuccess(position: GeolocationPosition) {
    setPosition({
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    });
  }

  function handleError() {
    setPosition(defaultPosition);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return position;
}
