import React from "react";

import { iconUrlFromCode } from "../services/weatherService";

export default function Forecast({ title, items }) {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="dark:text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row items-center justify-between dark:text-white">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center justify-center">
            <p className="font-light text-sm dark:text-yellow-200">
              {item.title}
            </p>
            <img
              src={iconUrlFromCode(item.icon)}
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
