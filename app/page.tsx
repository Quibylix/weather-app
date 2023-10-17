"use client";

import {
  City,
  HumidityIcon,
  PressureIcon,
  Skeleton,
  SkeletonText,
  WeatherIcon,
  WindIcon,
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
      <section className={styles.details}>
        <article className={styles.detail}>
          {weatherData ? (
            <>
              <HumidityIcon />
              <h4>Humidity</h4>
              <div className={styles.detailValue}>{weatherData.humidity}%</div>
            </>
          ) : (
            <Skeleton />
          )}
        </article>
        <article className={styles.detail}>
          {weatherData ? (
            <>
              <PressureIcon />
              <h4>Pressure</h4>
              <div className={styles.detailValue}>
                {weatherData.pressure} hPa
              </div>
            </>
          ) : (
            <Skeleton />
          )}
        </article>
        <article className={styles.detail}>
          {weatherData ? (
            <>
              <WindIcon />
              <h4>Wind speed</h4>
              <div className={styles.detailValue}>
                {weatherData.windSpeed.toFixed(2)} m/s
              </div>
            </>
          ) : (
            <Skeleton />
          )}
        </article>
      </section>
    </main>
  );
}
