"use client";

import {
  City,
  Skeleton,
  SkeletonText,
  WeatherDetails,
  WeatherIcon,
} from "@/components";
import { useWeatherContext } from "@/hooks";
import styles from "./page.module.css";

export default function HomePage() {
  const { weather: weatherData } = useWeatherContext();

  return (
    <main className={styles.page}>
      <h2 className={styles.city}>
        <City />
      </h2>
      {weatherData ? (
        <WeatherIcon className={styles.icon} icon={weatherData.weather.icon} />
      ) : (
        <div className={styles.iconSkeleton}>
          <Skeleton />
        </div>
      )}
      <h2 className={styles.temperature}>
        <span className={styles.temperatureValue}>
          {weatherData ? (
            weatherData.temperature.toFixed(0)
          ) : (
            <SkeletonText characters={2} />
          )}
        </span>
        <span className={styles.temperatureUnits}>
          {weatherData ? "°C" : <SkeletonText characters={2} />}
        </span>
      </h2>
      <h3 className={styles.weather}>
        {weatherData ? (
          weatherData.weather.main
        ) : (
          <SkeletonText characters={8} />
        )}
      </h3>
      <WeatherDetails weatherData={weatherData} />
    </main>
  );
}
