"use client";

import { SearchBar, Weather } from "@/components";
import { useWeatherData } from "@/hooks";

export default function HomePage() {
  const { weatherData } = useWeatherData();

  return (
    <>
      <header>
        <SearchBar />
      </header>
      <main>
        <Weather weatherData={weatherData} />
      </main>
    </>
  );
}
