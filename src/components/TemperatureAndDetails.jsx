import React from "react";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";
import {
  WiThermometer,
  WiRaindrops,
  WiStrongWind,
  WiSunrise,
  WiSunset,
  WiDirectionUp,
  WiDirectionDown,
} from "react-icons/wi";

export default function TemperatureAndDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div>
      <div className="flex flex-row items-center justify-between dark:text-white py-3">
        <div className="flex flex-col items-center justify-center py-6 text-xl text-cyan-900 dark:text-yellow-400">
          <img src={iconUrlFromCode(icon)} alt="" className="w-20" />

          <p>{details}</p>
        </div>
        <p className="text-5xl">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <WiThermometer size={30} className="mr-1" />
            Feels like:
            <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <WiRaindrops size={30} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <WiStrongWind size={30} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{`${speed.toFixed()} m/s`}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 dark:text-yellow-200 text-sm py-3">
        <WiSunrise size={20} />
        <p className="font-light">
          Rise:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunrise, timezone, "HH:mm")}
          </span>
        </p>
        <p className="font-light">|</p>

        <WiSunset size={20} />
        <p className="font-light">
          Set:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunset, timezone, "HH:mm")}
          </span>
        </p>
        <p className="font-light">|</p>

        <WiDirectionUp size={20} />
        <p className="font-light">
          High:{" "}
          <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className="font-light">|</p>

        <WiDirectionDown size={20} />
        <p className="font-light">
          Low:{" "}
          <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
}
