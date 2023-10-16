import { defaultPosition, weatherConditionCodes } from "@/constants";

describe("general app test", () => {
  // Mock navigator.geolocation
  beforeEach(() => {
    cy.visit("http://localhost:3000", {
      onBeforeLoad(win) {
        cy.stub(win.navigator.geolocation, "getCurrentPosition").callsFake(
          callback => {
            return callback({
              coords: {
                latitude: defaultPosition.lat,
                longitude: defaultPosition.lon,
              },
            });
          },
        );
      },
    });
  });

  it("renders the title 'Weather App'", () => {
    cy.title().should("include", "Weather App");
  });

  it("renders the default location 'Texarkana'", () => {
    cy.get("h2").contains("Texarkana, US");
  });

  it("renders an icon with the alt text 'Weather Icon'", () => {
    cy.get("img").should("have.attr", "alt", "Weather Icon");
  });

  it("renders the current weather for the default location", () => {
    const possibleWeather = [...Object.keys(weatherConditionCodes)];

    cy.contains(new RegExp(possibleWeather.join("|"), "i"));
  });

  it("renders the current temperature for the default location", () => {
    cy.contains(/\d+°C/);
  });

  it("renders the current pressure for the default location", () => {
    cy.get("h4").contains("Pressure");
    cy.contains(/\d+ hPa/);
  });

  it("renders the current humidity for the default location", () => {
    cy.get("h4").contains("Humidity");
    cy.contains(/\d+%/);
  });

  it("renders the current wind speed for the default location", () => {
    cy.get("h4").contains("Wind speed");
    cy.contains(/\d+\.\d{2} m\/s/);
  });
});
