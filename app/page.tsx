"use client";

import { Weather } from "@/components";
import { useCityData, useWeatherContext } from "@/hooks";

export default function HomePage() {
  const { weather: weatherData } = useWeatherContext();
  const { cityData } = useCityData();

  return (
    <main>
      <Weather
        weatherData={weatherData}
        city={cityData && `${cityData.city}, ${cityData.country}`}
      />
    </main>
  );
}
