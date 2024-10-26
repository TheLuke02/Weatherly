import { HourlyForecastProps } from "../types";

export const HourlyForecast = ({
  weather,
  selectedDay,
}: HourlyForecastProps) => {
  let key: number = 0;
  return (
    <div className="mx-2 h-full space-y-2 overflow-y-auto">
      {localStorage.getItem("Temperature") === "Celsius"
        ? weather.forecast.forecastday[selectedDay].hour.map(function (item) {
            key++;
            return (
              <div
                className="flex min-h-[150px] flex-col items-center justify-between justify-items-center rounded-xl border-b-2 border-sky-600 bg-white"
                key={key}
              >
                <div className="mt-4 text-lg sm:text-2xl md:text-3xl">
                  {item.time.split(" ")[1]}
                </div>
                <div className="flex flex-row">
                  <div className="text-xl font-bold sm:text-xl md:text-2xl">
                    {item.temp_c}
                  </div>
                  <div className="text-sm font-bold sm:text-base md:text-lg">
                    °C
                  </div>
                </div>

                <div className="mb-4 text-center font-semibold sm:text-lg md:text-xl">
                  {item.condition.text}
                </div>
              </div>
            );
          })
        : weather.forecast.forecastday[selectedDay].hour.map(function (item) {
            key++;
            return (
              <div
                className="flex min-h-[150px] flex-col items-center justify-between justify-items-center rounded-xl border-b-2 border-sky-600 bg-white"
                key={key}
              >
                <div className="mt-4 text-lg sm:text-2xl md:text-3xl">
                  {item.time.split(" ")[1]}
                </div>
                <div className="flex flex-row">
                  <div className="text-xl font-bold sm:text-xl md:text-2xl">
                    {item.temp_f}
                  </div>
                  <div className="text-sm font-bold sm:text-base md:text-lg">
                    °F
                  </div>
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
