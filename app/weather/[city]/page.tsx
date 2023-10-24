import { Weather } from "@/components";
import { getWeatherFromCity } from "@/services/server";
import { notFound } from "next/navigation";

type CityPageProps = {
  params: { city: string };
};

export default async function CityPage({ params }: CityPageProps) {
  const { city } = params;

  const weatherData = await getWeatherFromCity(decodeURIComponent(city)).catch(
    notFound,
  );

  return (
    <main>
      <Weather weatherData={weatherData} city={city} />
    </main>
  );
}
