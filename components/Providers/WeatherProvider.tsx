"use client";

import { WeatherContext } from "@/contexts";
import { useWeatherData } from "@/hooks";

type WeatherProviderProps = {
  children: React.ReactNode;
};

export default function WeatherProvider({ children }: WeatherProviderProps) {
  const { weatherData } = useWeatherData();

  return (
    <WeatherContext.Provider value={{ weather: weatherData }}>
      {children}
    </WeatherContext.Provider>
  );
}
