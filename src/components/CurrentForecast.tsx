import { HourlyForecastProps } from "../types";

export const CurrentForecast = ({
  weather,
  selectedDay,
}: HourlyForecastProps) => {
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
        <div className="flex flex-1 flex-row items-center justify-center space-x-5">
          <button className="flex">
            <svg
              className={
                "h-5 w-5 fill-sky-600 stroke-2 transition duration-300 ease-in-out hover:scale-125 sm:h-6 sm:w-6 md:h-7 md:w-7"
              }
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 4C4 2.34315 5.34315 1 7 1H17C18.6569 1 20 2.34315 20 4V20.9425C20 22.6114 18.0766 23.5462 16.7644 22.5152L12 18.7717L7.23564 22.5152C5.92338 23.5462 4 22.6114 4 20.9425V4ZM7 3C6.44772 3 6 3.44772 6 4V20.9425L12 16.2283L18 20.9425V4C18 3.44772 17.5523 3 17 3H7Z"
                fill="#0F0F0F"
              />
            </svg>
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
