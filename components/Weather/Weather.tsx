import { WeatherData } from "@/models";
import { Skeleton, SkeletonText } from "../Skeleton";
import { WeatherDetails } from "../WeatherDetails";
import WeatherIcon from "../WeatherIcon";
import styles from "./Weather.module.css";

interface WeatherProps {
  weatherData: WeatherData | null;
}

export default function Weather({ weatherData }: WeatherProps) {
  return (
    <div className={styles.weather}>
      <h2 className={styles.city}>
        {weatherData ? (
          `${weatherData.location.city}, ${weatherData.location.country}`
        ) : (
          <SkeletonText characters={15} />
        )}
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
      <h3 className={styles.weatherMain}>
        {weatherData ? (
          weatherData.weather.main
        ) : (
          <SkeletonText characters={8} />
        )}
      </h3>
      <WeatherDetails weatherData={weatherData} />
    </div>
  );
}
