import { adaptWeatherData } from "@/adapters";

export default async function getCoordsFromCity(city: string) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`,
  );

  const data = await res.json();

  return adaptWeatherData(data);
}
