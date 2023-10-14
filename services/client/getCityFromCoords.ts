import { CityData } from "@/models";

export default async function getCityFromCoords(lat: number, lon: number) {
  const res = await fetch("/api/city", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ lat, lon }),
  });

  const data = (await res.json()) as CityData[];

  return data;
}
