"use client";

import { Weather } from "@/components";
import { useWeatherContext } from "@/hooks";

export default function HomePage() {
  const { weather: weatherData } = useWeatherContext();

  return (
    <main>
      <Weather weatherData={weatherData} />
    </main>
  );
}
