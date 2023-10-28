import { SearchBar, Weather } from "@/components";
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
