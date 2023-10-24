import { WeatherIcons } from "@/constants";

export type WeatherData = {
  location: {
    city: string;
    country: string;
  };
  weather: {
    main: string;
    icon: WeatherIcons;
  };
  temperature: number;
  windSpeed: number;
  humidity: number;
  pressure: number;
};
