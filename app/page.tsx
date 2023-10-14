import {
  HumidityIcon,
  PressureIcon,
  WeatherIcon,
  WindIcon,
} from "@/components";
import { getCityFromCoords, getWeatherFromCoords } from "@/services";
import styles from "./page.module.css";

export default async function HomePage() {
  const lat = 33.44;
  const lon = -94.04;

  const res = await getWeatherFromCoords(lat, lon);
  const cityData = await getCityFromCoords(lat, lon);

  return (
    <main className={styles.page}>
      <h2 className={styles.city}>
        {cityData[0].city}, {cityData[0].country}
      </h2>
      <WeatherIcon className={styles.icon} icon={res.weather.icon} />
      <h2 className={styles.temperature}>
        <span className={styles.temperatureValue}>
          {(res.temperature - 273.15).toFixed(0)}
        </span>
        <span className={styles.temperatureUnits}>°C</span>
      </h2>
      <h3 className={styles.weather}>{res.weather.main}</h3>
      <section className={styles.details}>
        <article className={styles.detail}>
          <HumidityIcon />
          <h4>Humidity</h4>
          <div className={styles.detailValue}>{res.humidity}%</div>
        </article>
        <article className={styles.detail}>
          <PressureIcon />
          <h4>Pressure</h4>
          <div className={styles.detailValue}>{res.pressure} hPa</div>
        </article>
        <article className={styles.detail}>
          <WindIcon />
          <h4>Wind speed</h4>
          <div className={styles.detailValue}>
            {res.windSpeed.toFixed(2)} m/s
          </div>
        </article>
      </section>
    </main>
  );
}
