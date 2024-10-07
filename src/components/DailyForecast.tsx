import { DailyForecastProps } from "../types";

export const DailyForecast = ({
  weather,
  dayChange,
  selectedDay,
}: DailyForecastProps) => {
  let tomorrow: string = weather.forecast.forecastday[1].date.split(" ")[0];
  tomorrow = tomorrow.replaceAll("-", "/");

  let afterTomorrow: string =
    weather.forecast.forecastday[2].date.split(" ")[0];
  afterTomorrow = afterTomorrow.replaceAll("-", "/");

  return (
    <div className="flex h-1/6 flex-row space-x-2 rounded">
      <button
        className="flex flex-1"
        onClick={() => {
          dayChange(0);
        }}
      >
        <div
          className={`${selectedDay === 0 ? "border-sky-600" : "border-slate-100"} flex h-full flex-1 flex-col items-center justify-around rounded-xl border-2`}
        >
          <div className="flex justify-center px-1 font-semibold sm:text-xl md:text-2xl">
            Today
          </div>
          <div className="flex font-bold sm:text-xl md:text-2xl">
            {weather.forecast.forecastday[0].day.avgtemp_c}°
          </div>
        </div>
      </button>
      <button
        className="flex flex-1"
        onClick={() => {
          dayChange(1);
        }}
      >
        <div
          className={`${selectedDay === 1 ? "border-sky-600" : "border-slate-100"} flex h-full flex-1 flex-col items-center justify-around rounded-xl border-2`}
        >
          <div className="flex justify-center px-1 font-semibold sm:text-xl md:text-2xl">
            {tomorrow.substring(5)}
          </div>
          <div className="flex font-bold sm:text-xl md:text-2xl">
            {weather.forecast.forecastday[1].day.avgtemp_c}°
          </div>
        </div>
      </button>
      <button
        className="flex flex-1"
        onClick={() => {
          dayChange(2);
        }}
      >
        <div
          className={`${selectedDay === 2 ? "border-sky-600" : "border-slate-100"} flex h-full flex-1 flex-col items-center justify-around rounded-xl border-2`}
        >
          <div className="flex justify-center px-1 font-semibold sm:text-xl md:text-2xl">
            {afterTomorrow.substring(5)}
          </div>
          <div className="flex font-bold sm:text-xl md:text-2xl">
            {weather.forecast.forecastday[2].day.avgtemp_c}°
          </div>
        </div>
      </button>
    </div>
  );
};
