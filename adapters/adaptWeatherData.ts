import { weatherConditionCodes, WeatherIcons } from "@/constants";
import { WeatherData } from "@/models";

export default function adaptWeatherData(data: any): WeatherData {
  try {
    const isValidMain = typeof data.weather[0].main === "string";
    const isValidTemp = typeof data.main.temp === "number";
    const isValidWindSpeed = typeof data.wind.speed === "number";
    const isValidHumidity = typeof data.main.humidity === "number";
    const isValidPressure = typeof data.main.pressure === "number";
    const isValidCity = typeof data.name === "string";
    const isValidCountry = typeof data.sys.country === "string";

    if (
      !isValidMain ||
      !isValidTemp ||
      !isValidWindSpeed ||
      !isValidHumidity ||
      !isValidPressure ||
      !isValidCity ||
      !isValidCountry
    ) {
      throw new Error("Error while adapting weather data");
    }

    return {
      location: {
        city: data.name as string,
        country: data.sys.country as string,
      },
      weather: {
        main: data.weather[0].main as string,
        icon: getIconFromId(data.weather[0].id),
      },
      temperature: (data.main.temp - 273.15) as number,
      windSpeed: data.wind.speed as number,
      humidity: data.main.humidity as number,
      pressure: data.main.pressure as number,
    };
  } catch {
    throw new Error("Error while adapting weather data");
  }
}

function getIconFromId(id: number) {
  switch (true) {
    case weatherConditionCodes.THUNDERSTORM.includes(id):
      return WeatherIcons.THUNDERSTORM;
    case weatherConditionCodes.DRIZZLE.includes(id):
      return WeatherIcons.DRIZZLE;
    case weatherConditionCodes.RAIN.includes(id):
      return WeatherIcons.RAIN;
    case weatherConditionCodes.SNOW.includes(id):
      return WeatherIcons.SNOW;
    case weatherConditionCodes.ATMOSPHERE.includes(id):
      return WeatherIcons.ATMOSPHERE;
    case weatherConditionCodes.CLEAR.includes(id):
      return WeatherIcons.CLEAR;
    case weatherConditionCodes.CLOUDS.includes(id):
      return WeatherIcons.CLOUDS;
    default:
      return WeatherIcons.CLEAR;
  }
}
