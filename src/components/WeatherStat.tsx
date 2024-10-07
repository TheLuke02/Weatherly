import { WeatherStatProps } from "../types";
import { useState } from "react";
import { HourlyForecast } from "./HourlyForecast";
import { DailyForecast } from "./DailyForecast";
import { CurrentForecast } from "./CurrentForecast";

export const WeatherStat = ({ weather }: WeatherStatProps) => {
  const [day, setDay] = useState(0);

  return (
    <div className="h-full">
      <div className="ml-2 flex h-full flex-row space-x-2">
        <div className="mx-2 my-2 flex h-auto w-8/12 flex-col space-y-2 rounded">
          <CurrentForecast weather={weather} selectedDay={day} />
          <DailyForecast weather={weather} selectedDay={day} dayChange={setDay} />
        </div>
        <div className="w-4/12 bg-slate-100 py-2">
          <HourlyForecast weather={weather} selectedDay={day} />
        </div>
      </div>
    </div>
  );
};
