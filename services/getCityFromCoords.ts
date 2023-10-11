import { adaptCityData } from "@/adapters";

export default async function getCityFromCoords(lat: number, lon: number) {
  const res = await fetch(
    `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}`,
  );

  const data = await res.json();

  return adaptCityData(data);
}
