import { WeatherIcon } from "@/components";
import { WeatherIcons } from "@/constants";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("WeatherIcon", () => {
  it("should render the correct icon for thunderstorm", () => {
    render(<WeatherIcon icon={WeatherIcons.THUNDERSTORM} />);

    const img = screen.getByAltText("Weather Icon");

    expect(img.getAttribute("src")).toContain("thunderstorm.png");
  });

  it("should render the correct icon for drizzle", () => {
    render(<WeatherIcon icon={WeatherIcons.DRIZZLE} />);

    const img = screen.getByAltText("Weather Icon");

    expect(img.getAttribute("src")).toContain("drizzle.png");
  });

  it("should render the correct icon for rain", () => {
    render(<WeatherIcon icon={WeatherIcons.RAIN} />);

    const img = screen.getByAltText("Weather Icon");

    expect(img.getAttribute("src")).toContain("rain.png");
  });

  it("should render the correct icon for snow", () => {
    render(<WeatherIcon icon={WeatherIcons.SNOW} />);

    const img = screen.getByAltText("Weather Icon");

    expect(img.getAttribute("src")).toContain("snow.png");
  });

  it("should render the correct icon for atmosphere", () => {
    render(<WeatherIcon icon={WeatherIcons.ATMOSPHERE} />);

    const img = screen.getByAltText("Weather Icon");

    expect(img.getAttribute("src")).toContain("atmosphere.png");
  });

  it("should render the correct icon for clear", () => {
    render(<WeatherIcon icon={WeatherIcons.CLEAR} />);

    const img = screen.getByAltText("Weather Icon");

    expect(img.getAttribute("src")).toContain("clear.png");
  });

  it("should render the correct icon for clouds", () => {
    render(<WeatherIcon icon={WeatherIcons.CLOUDS} />);

    const img = screen.getByAltText("Weather Icon");

    expect(img.getAttribute("src")).toContain("clouds.png");
  });
});
