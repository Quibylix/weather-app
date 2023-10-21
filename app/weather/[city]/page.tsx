import { WeatherDetails, WeatherIcon } from "@/components";
import { getWeatherFromCity } from "@/services/server";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

type CityPageProps = {
  params: { city: string };
};

export default async function CityPage({ params }: CityPageProps) {
  const { city } = params;

  const weatherData = await getWeatherFromCity(decodeURIComponent(city)).catch(
    notFound,
  );

  return (
    <main className={styles.page}>
      <h2 className={styles.city}>{decodeURIComponent(city)}</h2>
      <WeatherIcon className={styles.icon} icon={weatherData.weather.icon} />
      <h2 className={styles.temperature}>
        <span className={styles.temperatureValue}>
          {weatherData.temperature.toFixed(0)}
        </span>
        <span className={styles.temperatureUnits}>°C</span>
      </h2>
      <h3 className={styles.weather}>{weatherData.weather.main}</h3>
      <WeatherDetails weatherData={weatherData} />
    </main>
  );
}
