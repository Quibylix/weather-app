import { CityData } from "@/models";
import { getCityFromCoords } from "@/services/client";
import { useEffect, useState } from "react";
import usePositionContext from "./usePositionContext";

export default function useCityData() {
  const [cityData, setCityData] = useState<CityData | null>(null);

  const { position } = usePositionContext();

  useEffect(() => {
    async function getCityData() {
      if (!position) return;

      const data = await getCityFromCoords(position.lat, position.lon);

      setCityData(data[0]);
    }

    getCityData();
  }, [position]);

  return { cityData };
}
