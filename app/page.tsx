"use client";

import { Weather } from "@/components";
import { useWeatherData } from "@/hooks";

export default function HomePage() {
  const { weatherData } = useWeatherData();

  return (
    <main>
      <Weather weatherData={weatherData} />
    </main>
  );
}
