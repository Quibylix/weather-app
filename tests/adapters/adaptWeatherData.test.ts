import { adaptWeatherData } from "@/adapters";
import { WeatherIcons, weatherConditionCodes } from "@/constants";
import { describe, expect, it } from "vitest";

describe("adaptWeatherData", () => {
  it("returns weather data", () => {
    const data = {
      weather: [
        {
          main: "Clouds",
          description: "broken clouds",
          id: weatherConditionCodes.CLOUDS[0],
        },
      ],
      unused: "unused",
    };

    const res = adaptWeatherData(data);

    expect(res).toEqual({
      weather: {
        main: "Clouds",
        icon: WeatherIcons.CLOUDS,
      },
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
