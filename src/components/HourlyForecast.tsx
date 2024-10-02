import { HourlyForecastProps } from "../types";

export const HourlyForecast = ({
  weather,
  selectedDay,
}: HourlyForecastProps) => {
  return (
    <div className="mx-2 h-full space-y-2 overflow-y-auto">
      {weather.forecast.forecastday[selectedDay].hour.map(function (item) {
        return (
          <div className="flex min-h-[150px] flex-col items-center justify-between justify-items-center rounded-xl border-b-2 border-sky-600 bg-white">
            <div className="mt-4 text-xl font-bold">
              {item.time.split(" ")[1]}
            </div>
            <div className="text-lg font-semibold">{item.temp_c}°</div>
            <div className="mb-4 text-center">{item.condition.text}</div>
          </div>
        );
      })}
    </div>
  );
};
