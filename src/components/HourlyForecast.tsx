import { HourlyForecastProps } from "../types";

export const HourlyForecast = ({
  weather,
  selectedDay,
}: HourlyForecastProps) => {
  return (
    <div className="mx-2 h-full space-y-2 overflow-y-auto">
      {weather.forecast.forecastday[selectedDay].hour.map(function (item) {
        return (
          <div
            className="flex min-h-[150px] flex-col items-center justify-between justify-items-center rounded-xl border-b-2 border-sky-600 bg-white"
            key={window.crypto.randomUUID()}
          >
            <div className="mt-4 text-lg sm:text-2xl md:text-3xl">
              {item.time.split(" ")[1]}
            </div>
            <div className="text-xl font-bold sm:text-xl md:text-2xl">
              {item.temp_c}°
            </div>
            <div className="mb-4 text-center font-semibold sm:text-lg md:text-xl">
              {item.condition.text}
            </div>
          </div>
        );
      })}
    </div>
  );
};
