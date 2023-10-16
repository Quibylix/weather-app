import { WeatherData } from "@/models";
import { getWeatherFromCoords } from "@/services/client";
import { useEffect, useState } from "react";
import usePositionContext from "./usePositionContext";

export default function useWeatherData() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const { position } = usePositionContext();

  useEffect(() => {
    async function getWeatherData() {
      if (!position) return;

      const res = await getWeatherFromCoords(position.lat, position.lon);

      setWeatherData(res);
    }

    getWeatherData();
  }, [position]);

  return { weatherData };
}
