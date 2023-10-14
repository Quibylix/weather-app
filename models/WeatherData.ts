import { WeatherIcons } from "@/constants";

export type WeatherData = {
  weather: {
    main: string;
    icon: WeatherIcons;
  };
  temperature: number;
  windSpeed: number;
  humidity: number;
  pressure: number;
};
