import { adaptCityData } from "@/adapters";
import { describe, expect, it } from "vitest";

describe("adaptCityData", () => {
  it("should return an array of cities", () => {
    const data = [
      {
        name: "London",
        country: "United Kingdom",
      },
      {
        name: "Paris",
        country: "France",
      },
    ];

    const adaptedData = adaptCityData(data);

    expect(adaptedData).toEqual([
      {
        city: "London",
        country: "United Kingdom",
      },
      {
        city: "Paris",
        country: "France",
      },
    ]);
  });

  it("should throw an error if data does not have the correct shape", () => {
    const data = [
      {
        name: "London",
        country: "United Kingdom",
      },
      {
        name: "Paris",
        country: "France",
      },
      {
        name: "Berlin",
      },
    ];

    expect(() => adaptCityData(data)).toThrowError(
      "Error while adapting city data",
    );

    const data2 = [
      {
        name: "London",
        country: "United Kingdom",
      },
      {
        name: "Paris",
        country: "France",
      },
      {
        country: "Germany",
      },
    ];

    expect(() => adaptCityData(data2)).toThrowError(
      "Error while adapting city data",
    );
  });
});
