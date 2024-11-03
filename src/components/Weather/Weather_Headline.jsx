import { useContext } from "react";
import PinSvg from "../../assets/pin.svg";

import ClodIcon from "../../assets/cloud.svg";
import HazeIcon from "../../assets/haze.svg";
import ShowIcon from "../../assets/icons/snow.svg";
import SunnyIcon from "../../assets/icons/sunny.svg";
import RainIcon from "../../assets/rainy.svg";
import ThunderIcon from "../../assets/thunder.svg";

import { WeatherContext } from "../../context";
import { getFormatDate } from "../../utlis/date";

export default function Weather_Headline() {
  const { weatherData } = useContext(WeatherContext);
  const { location, climate, temperature, time } = weatherData;

  function getWeatherIcon(climate) {
    switch (climate) {
      case "Rain":
        return RainIcon;

      case "Thunder":
        return ThunderIcon;

      case "Clouds":
        return ClodIcon;

      case "Clear":
        return SunnyIcon;

      case "Show":
        return ShowIcon;

      case "Haze":
        return HazeIcon;
      case "Fog":
        return HazeIcon;
      case "Mist":
        return HazeIcon;

      default:
        return SunnyIcon;
    }
  }

  return (
    <>
      <div>
        <div className="max-md:flex items-center justify-between md:-mt-10">
          <img src={getWeatherIcon(climate)} alt="cloud" />
          <div className="max-md:flex items-center max-md:space-x-4">
            <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
              {Math.round(temperature)}°
            </h1>
            <div className="flex items-center space-x-4 md:mb-4">
              <img src={PinSvg} />
              <h2 className="text-2xl lg:text-[50px]">{location}</h2>
            </div>
          </div>
        </div>
        <p className="text-sm lg:text-lg">
          {getFormatDate(time, "time", false)} -{" "}
          {getFormatDate(time, "date", false)}
        </p>
      </div>
    </>
  );
}
