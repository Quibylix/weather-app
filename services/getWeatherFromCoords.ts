import { adaptWeatherData } from "@/adapters";

export default async function getWeatherFromCoords(lat: number, lon: number) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}`,
  );

  const data = await res.json();

  return adaptWeatherData(data);
}
