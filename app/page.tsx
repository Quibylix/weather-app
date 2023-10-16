"use client";

import {
  City,
  HumidityIcon,
  PressureIcon,
  WeatherIcon,
  WindIcon,
} from "@/components";
import { useWeatherContext } from "@/hooks";
import styles from "./page.module.css";

export default function HomePage() {
  const { weather: weatherData } = useWeatherContext();

  if (!weatherData) return;

  return (
    <main className={styles.page}>
      <h2 className={styles.city}>
        <City />
      </h2>
      <WeatherIcon className={styles.icon} icon={weatherData.weather.icon} />
      <h2 className={styles.temperature}>
        <span className={styles.temperatureValue}>
          {weatherData.temperature.toFixed(0)}
        </span>
        <span className={styles.temperatureUnits}>°C</span>
      </h2>
      <h3 className={styles.weather}>{weatherData.weather.main}</h3>
      <section className={styles.details}>
        <article className={styles.detail}>
          <HumidityIcon />
          <h4>Humidity</h4>
          <div className={styles.detailValue}>{weatherData.humidity}%</div>
        </article>
        <article className={styles.detail}>
          <PressureIcon />
          <h4>Pressure</h4>
          <div className={styles.detailValue}>{weatherData.pressure} hPa</div>
        </article>
        <article className={styles.detail}>
          <WindIcon />
          <h4>Wind speed</h4>
          <div className={styles.detailValue}>
            {weatherData.windSpeed.toFixed(2)} m/s
          </div>
        </article>
      </section>
    </main>
  );
}
