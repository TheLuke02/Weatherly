import { HourlyForecastProps } from "../types";

export const CurrentForecast = ({
  weather,
  selectedDay,
}: HourlyForecastProps) => {
  return (
    <>
      <div className="flex w-full flex-row items-center justify-center space-x-2 rounded">
        <div className="flex flex-1 items-center justify-center text-center font-bold">
          {weather.location.name}
        </div>
        <div className="flex flex-1 items-center justify-center font-bold">
          {weather.location.localtime.split(" ")[1]}
        </div>
        <div className="flex flex-1 items-center justify-center font-bold">
          {weather.forecast.forecastday[selectedDay].date
            .split(" ")[0]
            .replaceAll("-", "/")}
        </div>
      </div>
      <div className="flex h-5/6 flex-col items-center justify-center space-y-4">
        <div className="flex items-center justify-center text-8xl font-semibold">
          {weather.forecast.forecastday[selectedDay].day.avgtemp_c}°
        </div>

        <div className="flex w-full flex-col justify-evenly px-3">
          <div className="flex w-full flex-row items-center justify-between">
            <div className="flex w-full justify-between text-lg">
              {weather.forecast.forecastday[selectedDay].day.condition.text}
            </div>

            <div className="flex h-[40px] w-[51px] md:h-10 md:w-10">
              <img
                src={
                  weather.forecast.forecastday[selectedDay].day.condition.icon
                }
                alt="Condition Icon"
              />
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-between">
            <div className="flex w-full items-center justify-between text-base text-slate-800">
              {weather.forecast.forecastday[selectedDay].day.avgvis_km} km/h
              <div className="flex h-10 w-10">
                <img src="/wind.png" alt="Condition Icon" />
              </div>
            </div>
            <div className="flex w-full items-center justify-between text-base text-slate-800">
              {weather.forecast.forecastday[selectedDay].day.avghumidity} %
              <div className="flex h-10 w-10">
                <img src="/humidity.png" alt="Condition Icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
