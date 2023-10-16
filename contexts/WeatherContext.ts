import { WeatherData } from "@/models";
import { createContext } from "react";

type WeatherContextValue = { weather: WeatherData | null };

const WeatherContext = createContext<WeatherContextValue>({
  weather: null,
});

export default WeatherContext;
