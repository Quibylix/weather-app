import { HumidityIcon, PressureIcon, Skeleton, WindIcon } from "@/components";
import { WeatherData } from "@/models";
import styles from "./WeatherDetails.module.css";

type WeatherDetailsProps = {
  weatherData: WeatherData | null;
};

export default function WeatherDetails({ weatherData }: WeatherDetailsProps) {
  return (
    <section className={styles.details}>
      <WeatherDetail
        title="Humidity"
        value={`${weatherData?.humidity}%`}
        icon={HumidityIcon}
        isLoading={!weatherData}
      />
      <WeatherDetail
        title="Pressure"
        value={`${weatherData?.pressure} hPa`}
        icon={PressureIcon}
        isLoading={!weatherData}
      />
      <WeatherDetail
        title="Wind speed"
        value={`${weatherData?.windSpeed.toFixed(2)} m/s`}
        icon={WindIcon}
        isLoading={!weatherData}
      />
    </section>
  );
}

type WeatherDetailProps = {
  title: string;
  value: string;
  icon: () => JSX.Element;
  isLoading?: boolean;
};

function WeatherDetail({
  title,
  value,
  icon: Icon,
  isLoading,
}: WeatherDetailProps) {
  return isLoading ? (
    <div className={styles.skeletonWrapper}>
      <Skeleton />
    </div>
  ) : (
    <article className={styles.detail}>
      <Icon />
      <h4>{title}</h4>
      <div className={styles.detailValue}>{value}</div>
    </article>
  );
}
