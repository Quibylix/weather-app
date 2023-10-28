"use client";

import { SearchBar, Weather } from "@/components";
import { useWeatherData } from "@/hooks";
import styles from "./page.module.css";

export default function HomePage() {
  const { weatherData } = useWeatherData();

  return (
    <div className={styles.page}>
      <header>
        <SearchBar />
      </header>
      <main>
        <Weather weatherData={weatherData} />
      </main>
    </div>
  );
}
