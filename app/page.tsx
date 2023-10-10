import {
  HumidityIcon,
  PressureIcon,
  WeatherIcon,
  WindIcon,
} from "@/components";
import { getWeatherFromCoords } from "@/services";
import styles from "./page.module.css";

export default async function HomePage() {
  const res = await getWeatherFromCoords(33.44, -94.04);

  return (
    <main className={styles.page}>
      <WeatherIcon className={styles.icon} icon={res.weather.icon} />
      <h2 className={styles.temperature}>
        <span className={styles.temperatureValue}>
          {(res.temperature - 273.15).toFixed(0)}
        </span>
        <span className={styles.temperatureUnits}>°C</span>
      </h2>
      <h3 className={styles.weather}>{res.weather.main}</h3>
      <div className={styles.details}>
        <div className={styles.detail}>
          <HumidityIcon />
          <h4>Humidity</h4>
          <span className={styles.detailValue}>{res.humidity}%</span>
        </div>
        <div className={styles.detail}>
          <PressureIcon />
          <h4>Pressure</h4>
          <span className={styles.detailValue}>{res.pressure} hPa</span>
        </div>
        <div className={styles.detail}>
          <WindIcon />
          <h4>Wind speed</h4>
          <span className={styles.detailValue}>
            {res.windSpeed.toFixed(2)} m/s
          </span>
        </div>
      </div>
    </main>
  );
}
