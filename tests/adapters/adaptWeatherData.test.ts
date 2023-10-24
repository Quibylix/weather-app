import { adaptWeatherData } from "@/adapters";
import { WeatherIcons, weatherConditionCodes } from "@/constants";
import { describe, expect, it } from "vitest";

describe("adaptWeatherData", () => {
  it("returns weather data", () => {
    const data = {
      name: "London",
      sys: {
        country: "GB",
      },
      weather: [
        {
          id: weatherConditionCodes.CLOUDS[0],
          main: "Clouds",
        },
      ],
      main: {
        temp: 298.48,
        pressure: 1015,
        humidity: 64,
      },
      wind: {
        speed: 0.62,
      },
    };

    const res = adaptWeatherData(data);

    expect(res).toEqual({
      location: {
        city: "London",
        country: "GB",
      },
      weather: {
        main: "Clouds",
        icon: WeatherIcons.CLOUDS,
      },
      temperature: 298.48 - 273.15,
      windSpeed: 0.62,
      humidity: 64,
      pressure: 1015,
    });
  });

  it("throws an error if data is invalid", () => {
    const data = {
      weather: {
        noArray: true,
        description: "broken clouds",
        id: weatherConditionCodes.CLOUDS[0],
      },
    };

    expect(() => adaptWeatherData(data)).toThrowError(
      "Error while adapting weather data",
    );

    const data2 = {
      weather: [
        {
          noMain: true,
          description: "broken clouds",
          id: weatherConditionCodes.CLOUDS[0],
        },
      ],
    };

    expect(() => adaptWeatherData(data2)).toThrowError(
      "Error while adapting weather data",
    );
  });
});
