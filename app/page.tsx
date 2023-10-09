import { WeatherIcon } from "@/components";
import { getWeatherFromCoords } from "@/services";

export default async function HomePage() {
  const res = await getWeatherFromCoords(33.44, -94.04);

  return (
    <main>
      <h1>Weather App</h1>
      <p>{res.weather.main}</p>
      <WeatherIcon icon={res.weather.icon} />
    </main>
  );
}
