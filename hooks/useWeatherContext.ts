import { WeatherContext } from "@/contexts";
import { useContext } from "react";

export default function useWeatherContext() {
  return useContext(WeatherContext);
}
