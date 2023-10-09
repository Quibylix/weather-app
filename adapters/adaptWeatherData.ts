import { weatherConditionCodes, WeatherIcons } from "@/constants";

export default function adaptWeatherData(data: any) {
  try {
    if (typeof data.weather[0].main !== "string") {
      throw new Error("Invalid data");
    }

    return {
      weather: {
        main: data.weather[0].main as string,
        icon: getIconFromId(data.weather[0].id),
      },
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
