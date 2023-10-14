import { CityData } from "@/models";

export default function adaptCityData(data: any): CityData[] {
  if (!Array.isArray(data)) {
    throw new Error("Error while adapting city data");
  }

  try {
    return data.map(city => {
      const isValidCity = typeof city.name === "string";
      const isValidCountry = typeof city.country === "string";

      if (!isValidCity || !isValidCountry) {
        throw new Error("Error while adapting city data");
      }

      return {
        city: city.name as string,
        country: city.country as string,
      };
    });
  } catch {
    throw new Error("Error while adapting city data");
  }
}
