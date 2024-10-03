import { HourlyForecastProps } from "../types";
import { NotSavedBookbark } from "./NotSavedBookmark";
import { useState } from "react";
import { SavedBookbark } from "./SavedBookmark";

export const CurrentForecast = ({
  weather,
  selectedDay,
}: HourlyForecastProps) => {
  const [saved, setDaved] = useState(false);
  const saveCity = () => {
    setDaved(!saved);
  };

  return (
    <>
      <div className="flex w-full flex-row items-center justify-center space-x-2 rounded">
        <div className="flex flex-1 items-center justify-center text-center font-bold sm:text-xl md:text-2xl">
          {weather.location.name}
        </div>
        <div className="flex flex-1 items-center justify-center font-bold sm:text-xl md:text-2xl">
          {weather.forecast.forecastday[selectedDay].date
            .split(" ")[0]
            .replaceAll("-", "/")}
        </div>
        <div className="flex flex-1 items-center justify-center">
          <button className="flex" onClick={saveCity}>
            {saved ? <SavedBookbark /> : <NotSavedBookbark />}
          </button>
        </div>
      </div>

      <div className="flex h-5/6 flex-col items-center justify-center space-y-4 sm:space-y-2 md:space-y-0">
        <div className="flex items-center justify-center text-8xl font-semibold md:text-9xl">
          {weather.forecast.forecastday[selectedDay].day.avgtemp_c}°
        </div>

        <div className="flex w-full flex-col justify-between px-3 sm:max-w-80">
          <div className="flex w-full flex-row items-center justify-between">
            <div className="sm: flex w-full items-center justify-between text-lg sm:text-xl md:text-2xl">
              {weather.forecast.forecastday[selectedDay].day.condition.text}

              <div className="flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14">
                <img
                  src={
                    weather.forecast.forecastday[selectedDay].day.condition.icon
                  }
                  alt="Condition Icon"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-between">
            <div className="flex w-full items-center justify-between text-base text-slate-800 sm:text-xl md:text-2xl">
              {weather.forecast.forecastday[selectedDay].day.avgvis_km} km/h
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14">
                <img src="/wind.png" alt="Condition Icon" />
              </div>
            </div>
            <div className="flex w-full items-center justify-between text-base text-slate-800 sm:text-xl md:text-2xl">
              {weather.forecast.forecastday[selectedDay].day.avghumidity} %
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14">
                <img src="/humidity.png" alt="Condition Icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
