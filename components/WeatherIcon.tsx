import atmosphere from "@/assets/icons/atmosphere.png";
import clear from "@/assets/icons/clear.png";
import clouds from "@/assets/icons/clouds.png";
import drizzle from "@/assets/icons/drizzle.png";
import rain from "@/assets/icons/rain.png";
import snow from "@/assets/icons/snow.png";
import thunderstorm from "@/assets/icons/thunderstorm.png";
import { WeatherIcons } from "@/constants";
import Image from "next/image";

type WeatherIconProps = {
  icon: WeatherIcons;
};

export default function WeatherIcon({ icon }: WeatherIconProps) {
  let src;
  switch (icon) {
    case WeatherIcons.THUNDERSTORM:
      src = thunderstorm;
      break;
    case WeatherIcons.DRIZZLE:
      src = drizzle;
      break;
    case WeatherIcons.RAIN:
      src = rain;
      break;
    case WeatherIcons.SNOW:
      src = snow;
      break;
    case WeatherIcons.ATMOSPHERE:
      src = atmosphere;
      break;
    case WeatherIcons.CLEAR:
      src = clear;
      break;
    case WeatherIcons.CLOUDS:
      src = clouds;
      break;
  }

  return <Image src={src} alt="Weather Icon" width={100} height={100} />;
}
