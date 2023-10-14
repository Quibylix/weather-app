import { WeatherData } from "@/models";

export default async function getWeatherFromCoords(lat: number, lon: number) {
  const res = await fetch("/api/weather", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ lat, lon }),
  });

  const data = (await res.json()) as WeatherData;

  return data;
}
